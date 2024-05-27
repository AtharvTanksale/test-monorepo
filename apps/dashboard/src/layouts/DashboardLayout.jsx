import { Outlet } from "@camonk/router";
import { useTheme } from "@camonk/design-system";
import { Box, Container, Typography } from "@camonk/design-system/components";
import DashboardSidebar from "../components/dashboard-sidebar/DashboardSidebar";
import DashboardNavbar from "../components/dashboard-navbar/DashboardNavbar";

function DashboardLayout() {
  const theme = useTheme();

  return (
    <Container
      maxWidth="100%"
      component="section"
      sx={{
        display: "grid",
        gridTemplateColumns: "24rem 1fr",
        gridTemplateRows: "auto 1fr",
        height: "100vh",
        p: "0 !important",
      }}
    >
      <DashboardNavbar />

      <Box
        component="aside"
        sx={{
          backgroundColor: theme.palette.background.paper,
          padding: "3.2rem 0rem 3.2rem 1rem",
          borderRight: `1px solid ${theme.palette.background.paper}`,
          gridRow: "1 / -1",
          display: "flex",
          flexDirection: "column",
          gap: "3.2rem",
          overflowY: "scroll",
        }}
      >
        <Typography variant="h6">
          <DashboardSidebar />
        </Typography>
      </Box>
      <Box
        component="main"
        sx={{
          backgroundColor: theme.palette.background.default,
          padding: "4rem 4rem 6.4rem",
          overflowY: "scroll",
        }}
      >
        <Outlet />
      </Box>
    </Container>
  );
}

export default DashboardLayout;
