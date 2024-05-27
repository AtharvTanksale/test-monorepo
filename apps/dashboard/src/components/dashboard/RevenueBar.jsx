import { useTheme } from "@camonk/design-system";
import { Paper, BarChart } from "@camonk/design-system/components";

const dataset = [
  {
    revenue: 10700,
    date: "May 1, 2024",
  },
  {
    revenue: 16800,
    date: "May 2, 2024",
  },
  {
    revenue: 29200,
    date: "May 3, 2024",
  },
  {
    revenue: 16600,
    date: "May 4, 2024",
  },
  {
    revenue: 10700,
    date: "May 5, 2024",
  },
  {
    revenue: 5700,
    date: "May 6, 2024",
  },
  {
    revenue: 14400,
    date: "May 7, 2024",
  },
];

const valueFormatter = (value) => `₹ ${value}`;

function RevenueBar() {
  const theme = useTheme();

  const tickPlacement = "middle";
  const tickLabelPlacement = "middle";

  const chartSetting = {
    series: [
      {
        dataKey: "revenue",
        label: "Revenue",
        valueFormatter,
        color: theme.palette.primary.main,
      },
    ],
    height: 300,
    sx: {
      p: 1,
    },
  };

  return (
    <Paper style={{ width: "100%" }}>
      <BarChart
        dataset={dataset}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "date",
            tickPlacement,
            tickLabelPlacement,
            fill: "red",
          },
        ]}
        {...chartSetting}
      />
    </Paper>
  );
}

export default RevenueBar;
