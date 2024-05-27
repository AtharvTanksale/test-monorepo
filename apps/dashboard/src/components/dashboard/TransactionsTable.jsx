import dayjs from "dayjs";
import {
  Paper,
  Typography,
  DataGrid,
  GridToolbar,
} from "@camonk/design-system/components";
import { paymentStatusColors } from "../../utils/constants";

const columns = [
  {
    field: "date",
    headerName: "Date",
    width: 150,
    valueGetter: (value) =>
      dayjs(value, "DD/MM/YYYY hh:mm a").format("DD-MMM-YYYY @ hh:mm a"),
  },
  {
    field: "status",
    headerName: "Status",
    width: 90,
    editable: true,
    type: "singleSelect",
    valueOptions: ["success", "initiated", "failed"],
    renderCell: (params) => (
      <div>
        <Typography
          variant=""
          sx={{
            color: paymentStatusColors[params.value]["color"],
            background: paymentStatusColors[params.value]["background"],
            padding: "2.4px 8px",
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          {params.value}
        </Typography>
      </div>
    ),
  },
  { field: "amount", headerName: "Amount", type: "number", width: 80 },
  { field: "orderId", headerName: "Order Id", width: 130 },
  {
    field: "fullName",
    headerName: "Full Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 150,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },

  {
    field: "email",
    headerName: "Email",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
  },

  {
    field: "phone",
    headerName: "Phone",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 130,
  },
];

const rows = [
  {
    id: 1,
    date: "08/08/2018 12:30 pm",
    firstName: "Jon",
    lastName: "Snow",
    email: "jon@example.com",
    phone: 9876543210,
    amount: 100,
    orderId: "ABCD123",
    status: "success",
  },
  {
    id: 2,
    date: "09/08/2018 01:45 pm",
    firstName: "Daenerys",
    lastName: "Targaryen",
    email: "dany@example.com",
    phone: 9876543211,
    amount: 150,
    orderId: "EFGH456",
    status: "initiated",
  },
  {
    id: 3,
    date: "10/08/2018 02:15 pm",
    firstName: "Tyrion",
    lastName: "Lannister",
    email: "tyrion@example.com",
    phone: 9876543212,
    amount: 200,
    orderId: "IJKL789",
    status: "failed",
  },
  {
    id: 4,
    date: "11/09/2018 10:00 am",
    firstName: "Arya",
    lastName: "Stark",
    email: "arya@example.com",
    phone: 9876543213,
    amount: 120,
    orderId: "MNOP101",
    status: "success",
  },
  {
    id: 5,
    date: "12/08/2018 11:20 am",
    firstName: "Sansa",
    lastName: "Stark",
    email: "sansa@example.com",
    phone: 9876543214,
    amount: 180,
    orderId: "QRST121",
    status: "initiated",
  },
  {
    id: 6,
    date: "13/08/2018 03:10 pm",
    firstName: "Cersei",
    lastName: "Lannister",
    email: "cersei@example.com",
    phone: 9876543215,
    amount: 90,
    orderId: "UVWX141",
    status: "failed",
  },
  {
    id: 7,
    date: "14/08/2018 09:45 am",
    firstName: "Jaime",
    lastName: "Lannister",
    email: "jaime@example.com",
    phone: 9876543216,
    amount: 250,
    orderId: "YZAB161",
    status: "success",
  },
  {
    id: 8,
    date: "15/09/2018 04:20 pm",
    firstName: "Bran",
    lastName: "Stark",
    email: "bran@example.com",
    phone: 9876543217,
    amount: 300,
    orderId: "CDEF181",
    status: "initiated",
  },
  {
    id: 9,
    date: "16/08/2018 02:55 pm",
    firstName: "Robb",
    lastName: "Stark",
    email: "robb@example.com",
    phone: 9876543218,
    amount: 140,
    orderId: "GHIJ201",
    status: "failed",
  },
  {
    id: 10,
    date: "17/08/2018 08:40 am",
    firstName: "Joffrey",
    lastName: "Baratheon",
    email: "joffrey@example.com",
    phone: 9876543219,
    amount: 200,
    orderId: "KLMN221",
    status: "success",
  },
  {
    id: 11,
    date: "18/08/2018 11:55 am",
    firstName: "Theon",
    lastName: "Greyjoy",
    email: "theon@example.com",
    phone: 9876543220,
    amount: 180,
    orderId: "OPQR241",
    status: "initiated",
  },
  {
    id: 12,
    date: "19/08/2018 03:25 pm",
    firstName: "Samwell",
    lastName: "Tarly",
    email: "sam@example.com",
    phone: 9876543221,
    amount: 120,
    orderId: "STUV261",
    status: "failed",
  },
  {
    id: 13,
    date: "20/08/2018 10:15 am",
    firstName: "Margaery",
    lastName: "Tyrell",
    email: "margaery@example.com",
    phone: 9876543222,
    amount: 250,
    orderId: "WXYZ281",
    status: "success",
  },
  {
    id: 14,
    date: "21/08/2018 01:30 pm",
    firstName: "Catelyn",
    lastName: "Stark",
    email: "catelyn@example.com",
    phone: 9876543223,
    amount: 300,
    orderId: "ABCD301",
    status: "initiated",
  },
  {
    id: 15,
    date: "22/08/2018 09:10 am",
    firstName: "Eddard",
    lastName: "Stark",
    email: "ned@example.com",
    phone: 9876543224,
    amount: 140,
    orderId: "EFGH321",
    status: "failed",
  },
  {
    id: 16,
    date: "23/08/2018 12:20 pm",
    firstName: "Robert",
    lastName: "Baratheon",
    email: "robert@example.com",
    phone: 9876543225,
    amount: 200,
    orderId: "IJKL341",
    status: "success",
  },
  {
    id: 17,
    date: "24/08/2018 10:30 am",
    firstName: "Stannis",
    lastName: "Baratheon",
    email: "stannis@example.com",
    phone: 9876543226,
    amount: 180,
    orderId: "MNOP361",
    status: "initiated",
  },
  {
    id: 18,
    date: "25/08/2018 11:45 am",
    firstName: "Renly",
    lastName: "Baratheon",
    email: "renly@example.com",
    phone: 9876543227,
    amount: 120,
    orderId: "QRSTUV381",
    status: "failed",
  },
  {
    id: 19,
    date: "26/08/2018 03:55 pm",
    firstName: "Viserys",
    lastName: "Targaryen",
    email: "viserys@example.com",
    phone: 9876543228,
    amount: 250,
    orderId: "WXYZ401",
    status: "success",
  },
  {
    id: 20,
    date: "27/08/2018 02:10 pm",
    firstName: "Drogo",
    lastName: "Targaryen",
    email: "drogo@example.com",
    phone: 9876543229,
    amount: 300,
    orderId: "ABCD421",
    status: "initiated",
  },
];

function TransactionsTable() {
  return (
    <Paper style={{ height: "100%", width: "100%" }}>
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        columns={columns}
        autoHeight={true}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 25, 50]}
        checkboxSelection
      />
    </Paper>
  );
}

export default TransactionsTable;
