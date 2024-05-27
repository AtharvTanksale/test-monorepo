import { Grid } from "@camonk/design-system/components";
import RevenueBar from "../components/dashboard/RevenueBar";
import Stats from "../components/dashboard/Stats";
import ToolsPie from "../components/dashboard/ToolsPie";
import TransactionsTable from "../components/dashboard/TransactionsTable";
import DaysFilter from "../components/dashboard/DaysFilter";
import UserActivityTable from "../components/dashboard/UserActivityTable";
import DateRangeFilter from "../components/dashboard/DateRangeFilter";

function DashboardPage() {
  return (
    <>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={6}>
          <DaysFilter />
        </Grid>

        <Grid item xs={6}>
          <DateRangeFilter />
        </Grid>

        <Grid item xs={12}>
          <Stats />
        </Grid>

        <Grid item xs={6}>
          <UserActivityTable />
        </Grid>
        <Grid item xs={6}>
          <ToolsPie />
        </Grid>
        <Grid item xs={12}>
          <RevenueBar />
        </Grid>
        <Grid item xs={12}>
          <TransactionsTable />
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardPage;
