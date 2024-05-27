import dayjs from "dayjs";
import { Paper, DataGrid } from "@camonk/design-system/components";

const columns = [
  {
    field: "date",
    headerName: "Date & Time",
    sortable: false,
    width: 150,
    valueGetter: (value) =>
      dayjs(value, "DD/MM/YYYY hh:mm a").format("DD-MMM-YYYY @ hh:mm a"),
  },
  {
    field: "fullName",
    headerName: "Full Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 150,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  { field: "activity", headerName: "Activity", width: 130, sortable: false },
];

const rows = [
  {
    id: 1,
    date: "08/08/2018 12:30 pm",
    firstName: "Jon",
    lastName: "Snow",
    activity: "Interview Bot",
  },
  {
    id: 2,
    date: "09/08/2018 01:45 pm",
    firstName: "Daenerys",
    lastName: "Targaryen",
    activity: "Resume Scorer",
  },
  {
    id: 3,
    date: "10/08/2018 02:15 pm",
    firstName: "Tyrion",
    lastName: "Lannister",
    activity: "Salary Estimator",
  },
  {
    id: 4,
    date: "11/09/2018 10:00 am",
    firstName: "Arya",
    lastName: "Stark",
    activity: "Event",
  },
  {
    id: 5,
    date: "12/08/2018 11:20 am",
    firstName: "Sansa",
    lastName: "Stark",
    activity: "Articleship Scorer",
  },
  {
    id: 6,
    date: "13/08/2018 09:00 am",
    firstName: "Cersei",
    lastName: "Lannister",
    activity: "Recruitment Panel",
  },

  {
    id: 7,
    date: "14/08/2018 03:30 pm",
    firstName: "Bran",
    lastName: "Stark",
    activity: "Internship Interview",
  },

  {
    id: 8,
    date: "15/08/2018 10:45 am",
    firstName: "Jaime",
    lastName: "Lannister",
    activity: "Training Session",
  },

  {
    id: 9,
    date: "16/08/2018 02:00 pm",
    firstName: "Theon",
    lastName: "Greyjoy",
    activity: "Mock Interviews",
  },

  {
    id: 10,
    date: "17/08/2018 11:15 am",
    firstName: "Samwell",
    lastName: "Tarly",
    activity: "Career Fair Booth",
  },
];

function UserActivityTable() {
  return (
    <Paper style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight={true}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Paper>
  );
}

export default UserActivityTable;
