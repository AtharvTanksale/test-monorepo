import dayjs from "dayjs";
import { Link } from "@camonk/router";
import {
  Avatar,
  Stack,
  Paper,
  Typography,
  DataGrid,
  GridToolbar,
  GridActionsCellItem,
} from "@camonk/design-system/components";
import { CustomToolbar } from "@camonk/design-system/custom-components/CustomToolbar";
import {
  Launch as LaunchIcon,
  Lens as LensIcon,
  FilePresent as FilePresentIcon,
} from "@camonk/design-system/icons";

const columns = [
  {
    field: "avatar",
    headerName: "",
    width: 50,
    sortable: false,
    renderCell: (params) => (
      <Avatar src={params.value} sx={{ width: 35, height: 35 }} />
    ),
  },

  {
    field: "fullName",
    headerName: "Full Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 130,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },

  {
    field: "email",
    headerName: "Email",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 150,
  },

  {
    field: "phone",
    headerName: "Phone",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 80,
  },

  {
    field: "coinsSpent",
    headerName: "Coins Spent",
    type: "number",
    width: 80,
    sortable: false,
    renderCell: (params) => (
      <Stack direction="row" gap={1} alignItems="center">
        <LensIcon style={{ fontSize: "18px", color: "gold" }} />
        <Typography variant="body2">{params.value}</Typography>
      </Stack>
    ),
  },

  {
    field: "spentAt",
    headerName: "Spent At",
    width: 130,
    valueGetter: (value) =>
      dayjs(value, "DD/MM/YYYY hh:mm a").format("DD-MMM-YYYY @ hh:mm a"),
  },

  {
    field: "articleshipScore",
    headerName: "Articleship Score",
    description: "This column has a value getter and is not sortable.",
    type: "number",
    sortable: true,
    width: 100,
  },

  {
    field: "tenthMarks",
    headerName: "10th Marks",
    description: "This column has a value getter and is not sortable.",
    type: "number",
    sortable: true,
    width: 100,
  },

  {
    field: "twelfthMarks",
    headerName: "12th Marks",
    description: "This column has a value getter and is not sortable.",
    type: "number",
    sortable: true,
    width: 100,
  },

  {
    field: "caFoundationMarks",
    headerName: "CA Foundation Marks",
    description: "This column has a value getter and is not sortable.",
    type: "number",
    sortable: true,
    width: 100,
  },
  {
    field: "caInterMarks",
    headerName: "CA Inter Marks",
    description: "This column has a value getter and is not sortable.",
    type: "number",
    sortable: true,
    width: 100,
  },

  {
    field: "numberOfAttemptsInCaInterGroup1",
    headerName: "Number Of Attempts In CA Inter Group 1",
    description: "This column has a value getter and is not sortable.",
    type: "number",
    sortable: true,
    width: 100,
  },

  {
    field: "numberOfAttemptsInCaInterGroup2",
    headerName: "Number Of Attempts In CA Inter Group 2",
    description: "This column has a value getter and is not sortable.",
    type: "number",
    sortable: true,
    width: 100,
  },

  {
    field: "rankInCaInter",
    headerName: "Rank In CA Inter",
    description: "This column has a value getter and is not sortable.",
    type: "boolean",
    sortable: true,
    width: 100,
  },
  {
    field: "industrialTraining",
    headerName: "Industrial Training",
    description: "This column has a value getter and is not sortable.",
    type: "boolean",
    sortable: true,
    width: 100,
  },

  {
    field: "communicationSkills",
    headerName: "Communication Skills",
    description: "This column has a value getter and is not sortable.",
    type: "number",
    sortable: true,
    width: 100,
  },
  {
    field: "technicalSkills",
    headerName: "Technical Skills",
    description: "This column has a value getter and is not sortable.",
    type: "number",
    sortable: true,
    width: 100,
  },

  {
    field: "numberOfAttemptsInCaFoundation",
    headerName: "Number Of Attempts In CA Foundation",
    description: "This column has a value getter and is not sortable.",
    type: "number",
    sortable: true,
    width: 100,
  },

  {
    field: "resume",
    headerName: "Resume",
    width: 50,
    sortable: false,
    renderCell: (params) => (
      <Link to={params.value} target="_blank" rel="noopener">
        <FilePresentIcon style={{ fontSize: "20px" }} />
      </Link>
    ),
  },

  {
    field: "actions",
    type: "actions",
    width: 100,
    getActions: () => [
      <GridActionsCellItem
        key="whatsapp"
        icon={<LaunchIcon style={{ fontSize: "18px" }} />}
        label="Open user info"
      />,
    ],
  },
];

const rows = [
  {
    id: 1,
    spentAt: "08/08/2018 12:30 pm",
    firstName: "Jon",
    lastName: "Snow",
    email: "jon@example.com",
    phone: 9876543210,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: true,
    industrialTraining: false,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/300",
    resume: "https://www.google.com",
  },
  {
    id: 2,
    spentAt: "09/08/2018 01:45 pm",
    firstName: "Daenerys",
    lastName: "Targaryen",
    email: "dany@example.com",
    phone: 9876543211,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: false,
    industrialTraining: true,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/310",
    resume: "https://www.google.com",
  },
  {
    id: 3,
    spentAt: "10/08/2018 02:15 pm",
    firstName: "Tyrion",
    lastName: "Lannister",
    email: "tyrion@example.com",
    phone: 9876543212,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: true,
    industrialTraining: false,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/320",
    resume: "https://www.google.com",
  },
  {
    id: 4,
    spentAt: "11/09/2018 10:00 am",
    firstName: "Arya",
    lastName: "Stark",
    email: "arya@example.com",
    phone: 9876543213,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: false,
    industrialTraining: true,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/330",
    resume: "https://www.google.com",
  },
  {
    id: 5,
    spentAt: "12/08/2018 11:20 am",
    firstName: "Sansa",
    lastName: "Stark",
    email: "sansa@example.com",
    phone: 9876543214,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: true,
    industrialTraining: true,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/335",
    resume: "https://www.google.com",
  },
  {
    id: 6,
    spentAt: "13/08/2018 03:10 pm",
    firstName: "Cersei",
    lastName: "Lannister",
    email: "cersei@example.com",
    phone: 9876543215,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: true,
    industrialTraining: true,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/350",
    resume: "https://www.google.com",
  },
  {
    id: 7,
    spentAt: "14/08/2018 09:45 am",
    firstName: "Jaime",
    lastName: "Lannister",
    email: "jaime@example.com",
    phone: 9876543216,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: false,
    industrialTraining: false,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/360",
    resume: "https://www.google.com",
  },
  {
    id: 8,
    spentAt: "15/09/2018 04:20 pm",
    firstName: "Bran",
    lastName: "Stark",
    email: "bran@example.com",
    phone: 9876543217,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: true,
    industrialTraining: true,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/370",
    resume: "https://www.google.com",
  },
  {
    id: 9,
    spentAt: "16/08/2018 02:55 pm",
    firstName: "Robb",
    lastName: "Stark",
    email: "robb@example.com",
    phone: 9876543218,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: true,
    industrialTraining: true,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/380",
    resume: "https://www.google.com",
  },
  {
    id: 10,
    spentAt: "17/08/2018 08:40 am",
    firstName: "Joffrey",
    lastName: "Baratheon",
    email: "joffrey@example.com",
    phone: 9876543219,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: true,
    industrialTraining: false,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/390",
    resume: "https://www.google.com",
  },
  {
    id: 11,
    spentAt: "18/08/2018 11:55 am",
    firstName: "Theon",
    lastName: "Greyjoy",
    email: "theon@example.com",
    phone: 9876543220,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: false,
    industrialTraining: true,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/400",
    resume: "https://www.google.com",
  },
  {
    id: 12,
    spentAt: "19/08/2018 03:25 pm",
    firstName: "Samwell",
    lastName: "Tarly",
    email: "sam@example.com",
    phone: 9876543221,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: true,
    industrialTraining: true,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/410",
    resume: "https://www.google.com",
  },
  {
    id: 13,
    spentAt: "20/08/2018 10:15 am",
    firstName: "Margaery",
    lastName: "Tyrell",
    email: "margaery@example.com",
    phone: 9876543222,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: false,
    industrialTraining: true,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/420",
    resume: "https://www.google.com",
  },
  {
    id: 14,
    spentAt: "21/08/2018 01:30 pm",
    firstName: "Catelyn",
    lastName: "Stark",
    email: "catelyn@example.com",
    phone: 9876543223,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: false,
    industrialTraining: true,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/430",
    resume: "https://www.google.com",
  },
  {
    id: 15,
    spentAt: "22/08/2018 09:10 am",
    firstName: "Eddard",
    lastName: "Stark",
    email: "ned@example.com",
    phone: 9876543224,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: true,
    industrialTraining: false,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/440",
    resume: "https://www.google.com",
  },
  {
    id: 16,
    spentAt: "23/08/2018 12:20 pm",
    firstName: "Robert",
    lastName: "Baratheon",
    email: "robert@example.com",
    phone: 9876543225,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: true,
    industrialTraining: false,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/450",
    resume: "https://www.google.com",
  },
  {
    id: 17,
    spentAt: "24/08/2018 10:30 am",
    firstName: "Stannis",
    lastName: "Baratheon",
    email: "stannis@example.com",
    phone: 9876543226,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: true,
    industrialTraining: true,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/460",
    resume: "https://www.google.com",
  },
  {
    id: 18,
    spentAt: "25/08/2018 11:45 am",
    firstName: "Renly",
    lastName: "Baratheon",
    email: "renly@example.com",
    phone: 9876543227,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: true,
    industrialTraining: true,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/470",
    resume: "https://www.google.com",
  },
  {
    id: 19,
    spentAt: "26/08/2018 03:55 pm",
    firstName: "Viserys",
    lastName: "Targaryen",
    email: "viserys@example.com",
    phone: 9876543228,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: false,
    industrialTraining: true,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/480",
    resume: "https://www.google.com",
  },
  {
    id: 20,
    spentAt: "27/08/2018 02:10 pm",
    firstName: "Drogo",
    lastName: "Targaryen",
    email: "drogo@example.com",
    phone: 9876543229,
    coinsSpent: 25,
    articleshipScore: 80,
    tenthMarks: 65,
    twelfthMarks: 75,
    caFoundationMarks: 75,
    caInterMarks: 65,
    communicationSkills: 80,
    technicalSkills: 68,
    rankInCaInter: true,
    industrialTraining: false,
    numberOfAttemptsInCaInterGroup1: 7,
    numberOfAttemptsInCaInterGroup2: 3,
    numberOfAttemptsInCaFoundation: 1,
    avatar: "https://i.pravatar.cc/500",
    resume: "https://www.google.com",
  },
];

function ArticleshipScorerTransactionsTable() {
  return (
    <Paper style={{ height: "auto", width: "100%" }}>
      <DataGrid
        // slots={{ toolbar: GridToolbar }}
        slots={{ toolbar: () => CustomToolbar("Users Data") }}
        rows={rows}
        columns={columns}
        autoHeight={true}
        initialState={{
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

export default ArticleshipScorerTransactionsTable;