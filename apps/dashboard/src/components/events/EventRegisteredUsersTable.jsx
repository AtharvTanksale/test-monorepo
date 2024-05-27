import dayjs from "dayjs";
import {
  Avatar,
  Box,
  Paper,
  Typography,
  DataGrid,
  GridActionsCellItem,
  GridToolbar,
} from "@camonk/design-system/components";
import { Spinner } from "@camonk/design-system/custom-components";
import { Delete as DeleteIcon } from "@camonk/design-system/icons";
import { useGetAllRegisteredUsers } from "../../hooks/events/useGetAllRegisteredUsers";
import { useSelector } from "@camonk/react-redux";
import { useEffect } from "react";

const columns = [
  // {
  //   field: "avatar",
  //   headerName: "",
  //   width: 35,
  //   sortable: false,
  //   renderCell: (params) => (
  //     <Avatar src={params.value} sx={{ width: 35, height: 35 }} />
  //   ),
  // },

  {
    field: "fullName",
    headerName: "Full Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },

  {
    field: "email",
    headerName: "Email",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
  },

  {
    field: "phone",
    headerName: "Phone",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
  },

  {
    field: "registeredAt",
    headerName: "Registered At",
    type: "dateTime",
    width: 100,
    valueFormatter: (value) => dayjs(value).format("DD/MM/YYYY hh:mm A"),
  },

  {
    field: "actions",
    type: "actions",
    width: 25,
    getActions: () => [
      <GridActionsCellItem
        key="delete-user"
        icon={<DeleteIcon style={{ fontSize: "18px" }} />}
        label="Delete user from this event"
      />,
    ],
  },
];

function EventRegisteredUsersTable() {
  let { eventId } = useSelector((state) => state.eventsDashboard);

  const { eventUsers, isLoading, refetch, isRefetching } =
    useGetAllRegisteredUsers({ eventId });

  useEffect(() => {
    refetch();
  }, [refetch]);

  const isLoadingUsers = isLoading || isRefetching;

  if (isLoadingUsers) return <Spinner />;

  return (
    <Paper style={{ height: "auto", width: "100%" }}>
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        rows={eventUsers}
        columns={columns}
        autoHeight
        loading={isLoadingUsers}
        initialState={{
          density: "comfortable",
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 50, 100]}
        checkboxSelection
      />
    </Paper>
  );
}

export default EventRegisteredUsersTable;
