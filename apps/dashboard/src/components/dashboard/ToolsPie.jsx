import { Paper, Typography, PieChart } from "@camonk/design-system/components";

function ToolsPie() {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5">Most used tools summary</Typography>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 25, label: "Events" },
              { id: 1, value: 25, label: "Interview Bot" },
              { id: 2, value: 25, label: "Resume Scorer" },
              { id: 3, value: 10, label: "Salary Estimator" },
              { id: 4, value: 25, label: "Communication Bot" },
              { id: 5, value: 25, label: "Articleship Scorer" },
              { id: 6, value: 25, label: "Resume Tp JD Scorer" },
            ],

            innerRadius: 60,
            outerRadius: 90,
            paddingAngle: 2,
            cornerRadius: 1,
            startAngle: 0,
            endAngle: 360,
            cx: 100,
            cy: 150,
          },
        ]}
        width={400}
        height={300}
      />
    </Paper>
  );
}

export default ToolsPie;
