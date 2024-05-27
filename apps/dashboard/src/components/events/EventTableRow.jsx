import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

import { useTheme } from "@camonk/design-system";
import { useDispatch } from "@camonk/react-redux";

import {
  Box,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@camonk/design-system/components";
import {
  Circle as CircleIcon,
  PeopleOutline as PeopleOutlineIcon,
  DriveFileRenameOutline as DriveFileRenameOutlineIcon,
} from "@camonk/design-system/icons";
import { createEditEvent, showEventUsers } from "./EventsDashboardSlice";
import { eventStausColors } from "../../utils/constants";

function EventTableRow({ groupedEvent }) {
  const theme = useTheme();

  const dispatch = useDispatch();

  const date = Object.keys(groupedEvent)[0];
  const events = groupedEvent[date];

  return (
    <Box>
      <Typography variant="body1" sx={{ mb: 2, fontWeight: 500 }}>
        {dayjs(date).format("MMM DD, YYYY")}
      </Typography>

      {events.map((event) => {
        return (
          <Grid
            container
            key={event.id}
            sx={{
              backgroundColor: theme.palette.background.paper,
              p: theme.spacing(3, 2),
              borderRadius: 2,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid item md={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body2">
                  {dayjs(event.startTime).format("hh:mm a")}
                </Typography>
                <span>-</span>
                <Typography variant="body2">
                  {dayjs(event.endTime).format("hh:mm a")}
                </Typography>
              </Stack>
            </Grid>

            <Grid item md={4}>
              <Typography variant="body2" sx={{ mr: 4, fontWeight: 500 }}>
                {event.title}
              </Typography>
            </Grid>

            <Grid item md={1}>
              <Typography variant="body2">
                {event.totalRegistered} / {event.maxAllowedSpots}
              </Typography>
            </Grid>

            <Grid item md={2}>
              <Typography variant="caption">
                {dayjs(event.createdAt).format("MMM DD, YYYY @ hh:mm A")}
              </Typography>
            </Grid>

            <Grid item md={1}>
              <Typography
                // variant="caption"
                sx={{
                  color: eventStausColors[event.status]["color"],
                  backgroundColor: eventStausColors[event.status]["background"],
                  fontWeight: 500,
                  textTransform: "capitalize",
                  textAlign: "center",
                  width: "fit-content",
                  p: theme.spacing(0.3, 1),
                  display: "flex",
                  alignItems: "baseline",
                  gap: 0.5,
                  fontSize: "12px",
                }}
              >
                <CircleIcon
                  fontSize="small"
                  sx={{ width: "7px", height: "7px" }}
                />
                {event.status}
              </Typography>
            </Grid>

            <Grid item md={1} sx={{ display: "flex" }}>
              <IconButton
                aria-label="users"
                onClick={() => dispatch(showEventUsers(event.id))}
              >
                <PeopleOutlineIcon fontSize="large" />
              </IconButton>

              <IconButton
                aria-label="edit"
                onClick={() => dispatch(createEditEvent(event))}
              >
                <DriveFileRenameOutlineIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}

export default EventTableRow;
