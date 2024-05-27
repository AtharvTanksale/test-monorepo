import dayjs from "dayjs";

import { FormProvider, useForm } from "@camonk/react-hook-form";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@camonk/design-system/components";

import {
  Checkbox,
  Input,
  PhoneNumberInput,
  Spinner,
} from "@camonk/design-system/custom-components";

import {
  Delete as DeleteIcon,
  Person as PersonIcon,
} from "@camonk/design-system/icons";

import { useGetUser } from "../../hooks/users/useGetUser";
import { useTheme } from "@camonk/design-system";
import { useUpdateUser } from "../../hooks/users/useUpdateUser";
import { useParams } from "@camonk/router";
import { useEffect, useState } from "react";
import ConfirmDeleteUserModal from "./ConfirmDeleteUserModal";
import { useDeleteUser } from "../../hooks/users/useDeleteUser";

function UserDetails() {
  const theme = useTheme();
  const { userId } = useParams();
  const { isLoading, user } = useGetUser();
  const { isUpdatingUser, updateUser } = useUpdateUser();
  const { isDeletingUser, deleteUser } = useDeleteUser();

  const methods = useForm();
  const {
    formState: { dirtyFields },
    reset,
  } = methods;

  const [open, setOpen] = useState(false);
  const [defaultValues, setDefaultValues] = useState({});

  useEffect(() => {
    if (user) {
      const initialValues = {
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        password: "",
        loginType: user.authProvider || "",
        role: user.role === "ADMIN",
      };
      reset(initialValues);
      setDefaultValues(initialValues);
    }
  }, [user, reset]);

  function onSubmit(data) {
    const modifiedData = {};
    data.role = data.role ? "ADMIN" : "USER";

    Object.keys(dirtyFields).forEach((field) => {
      if (dirtyFields[field] && data[field] !== defaultValues[field]) {
        modifiedData[field] = data[field];
      }
    });

    console.log(modifiedData);

    updateUser({ userId, userData: modifiedData });
  }

  function onError(errors) {
    console.log(errors);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleDeleteUser() {
    deleteUser(userId);
  }

  if (isLoading) return <Spinner />;

  const isMutatingUser = isDeletingUser || isUpdatingUser;

  return (
    <>
      <Paper
        sx={{
          borderRadius: 4,
          py: { md: 6, xs: 4 },
          px: { md: 6, xs: 4 },
          my: 8,
        }}
      >
        <Box
          sx={{
            mb: 8,
            width: "fit-content",
            p: theme.spacing(0.3, 2),
            borderRadius: 1,
            color: theme.palette.mode === "light" ? "#3C4852" : "#3C4852",
            backgroundColor: theme.palette.mode === "light" ? "#eee" : "#fff",
          }}
        >
          <Typography component="span" variant="body2" sx={{ fontWeight: 500 }}>
            Account created on:{" "}
            {dayjs(user?.createdAt).format("DD-MMM-YYYY @ hh:mm A")}
          </Typography>
        </Box>
        <FormProvider {...methods}>
          <Stack
            component="form"
            onSubmit={methods.handleSubmit(onSubmit, onError)}
          >
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Box>
                  <Input
                    id="firstName"
                    label="First Name"
                    size="large"
                    type="text"
                    defaultValue={user?.firstName}
                  />
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box>
                  <Input
                    id="lastName"
                    label="Last Name"
                    size="large"
                    type="text"
                    defaultValue={user?.lastName}
                  />
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box>
                  <Input
                    id="email"
                    label="Email"
                    size="large"
                    type="email"
                    defaultValue={user?.email}
                  />
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box>
                  <PhoneNumberInput
                    id="phone"
                    label="Phone Number"
                    defaultValue={user?.phone}
                    value={user?.phone}
                  />
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box>
                  <Input
                    id="password"
                    label="Reset Password"
                    size="medium"
                    type="password"
                    placeholder="Enter new password"
                    defaultValue=""
                  />
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box>
                  <Input
                    id="loginType"
                    label="Login Type"
                    size="medium"
                    type="text"
                    defaultValue={user?.authProvider}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography
                    sx={{
                      fontSize: theme.typography.body2,
                      color: theme.palette.text.primary,
                      fontWeight: "600",
                    }}
                  >
                    Is Admin?
                  </Typography>
                  <Checkbox
                    id="role"
                    defaultValue={user?.role === "ADMIN"}
                    defaultChecked={user?.role === "ADMIN"}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <Button
                disabled={isMutatingUser}
                sx={{ mt: 2 }}
                variant="contained"
                size="medium"
                color="error"
                onClick={() => setOpen(true)}
                startIcon={<DeleteIcon />}
              >
                Delete User
              </Button>
              <Button
                disabled={isMutatingUser}
                sx={{ mt: 2 }}
                variant="contained"
                type="submit"
                size="medium"
                endIcon={<PersonIcon />}
              >
                Save User
              </Button>
            </Stack>
          </Stack>
        </FormProvider>
      </Paper>

      <ConfirmDeleteUserModal
        open={open}
        handleClose={handleClose}
        handleDeleteUser={handleDeleteUser}
      />
    </>
  );
}

export default UserDetails;
