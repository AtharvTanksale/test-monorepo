import dayjs from "dayjs";
import { useTheme } from "../index";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
  Box,
} from "../components";

function CustomToolbar(fileName) {
  const theme = useTheme();

  return (
    <GridToolbarContainer sx={{ p: theme.spacing(1, 2) }}>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector
        slotProps={{ tooltip: { title: "Change density" } }}
      />
      <Box sx={{ flexGrow: 1 }} />
      <GridToolbarExport
        slotProps={{
          tooltip: { title: "Export data" },
          button: { variant: "contained" },
        }}
        csvOptions={{
          fileName: `${fileName} ${dayjs().format("DD-MMM-YY")}`,
          delimiter: ",",
          utf8WithBom: true,
        }}
      />
    </GridToolbarContainer>
  );
}

export { CustomToolbar };
