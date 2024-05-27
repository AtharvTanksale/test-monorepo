import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate } from "@camonk/router";
import {
  Avatar,
  Paper,
  DataGrid,
  GridActionsCellItem,
} from "@camonk/design-system/components";
import {
  CustomToolbar,
  Spinner,
} from "@camonk/design-system/custom-components";
import {
  Launch as LaunchIcon,
  WhatsApp as WhatsAppIcon,
} from "@camonk/design-system/icons";

import { useGetUsers } from "../../hooks/users/useGetUsers";
import { debounce } from "../../utils/helpers";

function UsersTable() {
  const navigate = useNavigate();

  const [queryOptions, setQueryOptions] = useState();
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 25,
  });

  const onFilterChange = debounce((filterModel) => {
    setQueryOptions({ filterModel: { ...filterModel } });
  }, 1000);

  const { isLoading, users, refetch } = useGetUsers(
    queryOptions,
    paginationModel
  );

  useEffect(() => {
    refetch();
  }, [queryOptions, paginationModel, refetch]);

  // Memoize the users data

  if (isLoading) return <Spinner />;

  function handleOpenUser(userId) {
    navigate(`${userId}/details`);
  }

  function handleWhatsAppOpen(phone) {
    window.open(`https://wa.me/${phone}`, "_blank");
  }

  if (!users?.length) return <div>No users found!</div>;

  const columns = [
    {
      field: "avatar",
      headerName: "",
      width: 60,
      sortable: false,
      renderCell: (params) => (
        <Avatar
          src={params.value}
          sx={{ width: 35, height: 35 }}
          slotProps={{ img: { referrerPolicy: "no-referrer" } }}
        />
      ),
    },

    {
      field: "fullName",
      headerName: "Full Name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },

    {
      field: "email",
      headerName: "Email",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 240,
    },

    {
      field: "phone",
      headerName: "Phone",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },

    {
      field: "createdAt",
      headerName: "Joined At",
      type: "dateTime",
      width: 200,
      valueFormatter: (params) => dayjs(params).format("DD-MMM-YYYY @ hh:mm a"),
    },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id, row: { phone } }) => [
        <GridActionsCellItem
          key="whatsapp"
          icon={<WhatsAppIcon style={{ fontSize: "18px" }} />}
          onClick={() => handleWhatsAppOpen(phone)}
          label="Send message on WhatsApp"
        />,

        <GridActionsCellItem
          key="user-info"
          icon={<LaunchIcon style={{ fontSize: "18px" }} />}
          onClick={() => handleOpenUser(id)}
          label="Open user info"
        />,
      ],
    },
  ];

  return (
    <Paper style={{ width: "100%" }}>
      <DataGrid
        // slots={{ toolbar: GridToolbar }}
        slots={{ toolbar: () => CustomToolbar("Users Data") }}
        rows={users}
        columns={columns}
        onFilterModelChange={onFilterChange}
        loading={isLoading}
        autoHeight={true}
        initialState={{
          density: "comfortable",
          // pagination: {
          //   paginationModel: { page: 0, pageSize: 10 },
          // },
        }}
        rowCount={282}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode="server"
        filterMode="server"
        pageSizeOptions={[25, 50, 100]}
        checkboxSelection
      />
    </Paper>
  );
}

export default UsersTable;
