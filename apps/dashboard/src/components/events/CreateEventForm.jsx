import dayjs from "dayjs";

import { useRef, useState } from "react";
import {
  StarterKit,
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
} from "@camonk/design-system/tiptap";
import { useTheme } from "@camonk/design-system";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
} from "@camonk/design-system/components";

import {
  TimePicker,
  DatePicker,
  Input,
  UploadFileButton,
  FieldLabel,
  Checkbox,
  Spinner,
} from "@camonk/design-system/custom-components";
import { FormProvider, useForm } from "@camonk/react-hook-form";
import {
  Close as CloseIcon,
  FileUpload as FileUploadIcon,
} from "@camonk/design-system/icons";
import { useDispatch, useSelector } from "@camonk/react-redux";
import { closeSideDrawer } from "./EventsDashboardSlice";
import { useCreateEvent } from "../../hooks/events/useCreateEvent";
import { useCancelEvent } from "../../hooks/events/useCancelEvent";
import { useDeleteEvent } from "../../hooks/events/useDeleteEvent";
import { useEditEvent } from "../../hooks/events/useEditEvent";
import { useOpenEvent } from "../../hooks/events/useOpenEvent";
import ConfirmDeleteEventModal from "./ConfirmDeleteEventModal";

function CreateEventForm() {
  const rteRef = useRef(null);
  const dispatch = useDispatch();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const { isCreating, createEvent } = useCreateEvent();
  const { isCanceling, cancelEvent } = useCancelEvent();
  const { isOpening, openEvent } = useOpenEvent();
  const { isDeleting, deleteEvent } = useDeleteEvent();
  const { isEditing, editEvent } = useEditEvent();

  let eventToEdit = useSelector((state) => state.eventsDashboard.eventToEdit);

  // Format Date and time for the event to edit
  const defaultValues = {
    ...eventToEdit,
    date: dayjs(eventToEdit?.date).format("DD/MM/YYYY"),
    startTime: dayjs(eventToEdit?.startTime).format("hh:mm A"),
    endTime: dayjs(eventToEdit?.endTime).format("hh:mm A"),
  };

  const methods = useForm({
    defaultValues,
  });

  function handleClose() {
    setOpen(false);
  }

  function onSubmit(data) {
    const eventDescription = rteRef.current?.editor?.getHTML();

    data["description"] = eventDescription;
    data["imageSrc"] = "https://source.unsplash.com/random/1920x1080/?event";

    // Format date
    data["date"] = dayjs(data["date"], "DD/MM/YYYY").format("YYYY-MM-DD");

    // Format start and end time
    data["startTime"] = dayjs(data["startTime"], "hh:mm A").format("HH:mm:ss");

    data["endTime"] = dayjs(data["endTime"], "hh:mm A").format("HH:mm:ss");

    if (eventToEdit) {
      const eventId = eventToEdit.id;

      editEvent(
        { eventId, editedEvent: { ...data } },
        {
          onSuccess: () => {
            dispatch(closeSideDrawer());
          },
        }
      );
    } else {
      if (data.isActive === undefined) data.isActive = false;

      createEvent(
        { data },
        {
          onSuccess: () => {
            dispatch(closeSideDrawer());
            methods.reset();
          },
        }
      );
    }
  }

  function handleCancelEvent() {
    cancelEvent(eventToEdit.id, {
      onSuccess: () => {
        dispatch(closeSideDrawer());
      },
    });
  }

  function handleConfirmDelete() {
    setOpen(true);
  }

  function handleDeleteEvent() {
    deleteEvent(eventToEdit.id, {
      onSuccess: () => {
        dispatch(closeSideDrawer());
      },
    });
  }

  function handleOpenEvent() {
    const openedEvent = { ...eventToEdit };

    // Format date
    openedEvent["date"] = dayjs(openedEvent["date"]).format("YYYY-MM-DD");

    // Format start and end time
    openedEvent["startTime"] = dayjs(
      openedEvent["startTime"],
      "hh:mm A"
    ).format("HH:mm:ss");

    openedEvent["endTime"] = dayjs(openedEvent["endTime"], "hh:mm A").format(
      "HH:mm:ss"
    );

    openedEvent.status = "OPENED";

    const eventId = openedEvent.id;

    openEvent(
      { eventId, editedEvent: { ...openedEvent } },
      {
        onSuccess: () => {
          dispatch(closeSideDrawer());
        },
      }
    );
  }

  function handleDuplicateEvent() {
    const data = { ...eventToEdit };
    delete data.id;

    data["date"] = dayjs().format("YYYY-MM-DD");
    data["bookedSpots"] = 0;

    createEvent(
      { data },
      {
        onSuccess: () => {
          dispatch(closeSideDrawer());
          methods.reset();
        },
      }
    );
  }

  function onError(errors) {
    console.log(errors);
  }

  if (isCreating || isCanceling || isDeleting || isEditing || isOpening)
    return <Spinner />;

  return (
    <>
      <Container component="section">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 6 }}
        >
          <Typography variant="h4">
            {!eventToEdit ? "Create Event" : "Edit Event"}
          </Typography>
          <CloseIcon
            fontSize="large"
            onClick={() => dispatch(closeSideDrawer())}
            sx={{ cursor: "pointer" }}
          />
        </Stack>
        <FormProvider {...methods}>
          <Box
            component="form"
            sx={{ my: 4 }}
            onSubmit={methods.handleSubmit(onSubmit, onError)}
          >
            <Grid container rowSpacing={{ md: 4 }} columnSpacing={3}>
              <Grid item md={12}>
                <Input
                  id="title"
                  label="Event Name"
                  placeholder="Enter event name"
                  // defaultValue={event?.title || null}
                  size="large"
                  type="text"
                  validation={{
                    required: "This field is required",
                  }}
                />
              </Grid>

              <Grid item md={6}>
                <DatePicker
                  id="date"
                  validation={{
                    required: "This field is required",
                  }}
                  disablePast={!eventToEdit && true}
                  defaultValue={!eventToEdit ? dayjs() : null}
                  format="DD-MM-YYYY"
                />
              </Grid>

              <Grid item md={6}></Grid>

              <Grid item md={6}>
                <TimePicker
                  id="startTime"
                  label="From"
                  validation={{
                    required: "This field is required",
                    validate: (value) => {
                      if (!eventToEdit) {
                        return (
                          dayjs(value).isBefore(
                            dayjs(methods.getValues().endTime)
                          ) || "Start Time cannot be after the End Time"
                        );
                      }
                      return true;
                    },
                  }}
                  format="hh:mm A"
                />
              </Grid>

              <Grid item md={6}>
                <TimePicker
                  id="endTime"
                  label="To"
                  validation={{
                    required: "This field is required",
                    validate: (value) => {
                      if (!eventToEdit) {
                        return (
                          dayjs(value).isAfter(
                            dayjs(methods.getValues().startTime)
                          ) || "End Time cannot be before the Start Time"
                        );
                      }
                      return true;
                    },
                  }}
                  format="hh:mm A"
                  defaultValue={""}
                />
              </Grid>

              <Grid item md={6}>
                <Input
                  id="price"
                  label="Price"
                  placeholder="Enter event price"
                  size="large"
                  type="number"
                  validation={{
                    required: "This field is required",
                    valueAsNumber: true,
                  }}
                />
              </Grid>

              <Grid item md={6}>
                <Input
                  id="maxAllowedSpots"
                  label="Maximum Allowed Spots"
                  placeholder="Enter total slots"
                  size="large"
                  type="number"
                  validation={{
                    required: "This field is required",
                    min: {
                      value: 1,
                      message: "Slots must be at least 1",
                    },
                    valueAsNumber: true,
                  }}
                />
              </Grid>

              <Grid item md={12}>
                <UploadFileButton
                  variant="outlined"
                  label="Upload Featured Image"
                  id="imageSrc"
                  accept="image/*"
                  startIcon={<FileUploadIcon />}
                >
                  Upload Image
                </UploadFileButton>
              </Grid>

              <Grid item md={12}>
                <FieldLabel id="description">Description</FieldLabel>
                <RichTextEditor
                  ref={rteRef}
                  extensions={[StarterKit]}
                  content={eventToEdit?.description || ""}
                  renderControls={() => (
                    <MenuControlsContainer>
                      <MenuSelectHeading />
                      <MenuDivider />
                      <MenuButtonBold />
                      <MenuButtonItalic />

                      {/* Add more controls of your choosing here */}
                    </MenuControlsContainer>
                  )}
                />
              </Grid>

              <Grid item md={12}>
                <Checkbox
                  id="isActive"
                  label="Show event on site"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: theme.typography.h4,
                    },
                  }}
                  defaultChecked={eventToEdit?.isActive}
                />
              </Grid>
            </Grid>

            {eventToEdit ? (
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={2}
                sx={{ mt: 4 }}
              >
                <Stack direction="row" spacing={1.5}>
                  {eventToEdit.status === "CANCELLED" ||
                  eventToEdit.status === "CLOSED" ? (
                    <Button variant="contained" onClick={handleOpenEvent}>
                      Open Event
                    </Button>
                  ) : (
                    <Button variant="contained" onClick={handleDuplicateEvent}>
                      Duplicate Event
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="error"
                    onClick={
                      eventToEdit.status === "OPENED"
                        ? handleCancelEvent
                        : handleConfirmDelete
                    }
                  >
                    {eventToEdit.status === "OPENED"
                      ? "Cancel Event"
                      : "Delete Event"}
                  </Button>
                </Stack>
                <Button variant="contained" type="submit">
                  Save Event
                </Button>
              </Stack>
            ) : (
              <Stack
                direction="row"
                justifyContent="flex-end"
                spacing={2}
                sx={{ mt: 4 }}
              >
                <Button
                  variant="outlined"
                  onClick={() => dispatch(closeSideDrawer())}
                >
                  Cancel
                </Button>

                <Button variant="contained" type="submit">
                  Create Event
                </Button>
              </Stack>
            )}
          </Box>
        </FormProvider>
      </Container>
      <ConfirmDeleteEventModal
        open={open}
        handleClose={handleClose}
        handleDeleteEvent={handleDeleteEvent}
      />
    </>
  );
}

export default CreateEventForm;
