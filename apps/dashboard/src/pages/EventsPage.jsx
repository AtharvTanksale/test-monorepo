import { useDispatch } from "@camonk/react-redux";
import { Container, Fab } from "@camonk/design-system/components";
import { Add as AddIcon } from "@camonk/design-system/icons";
import { createEditEvent } from "../components/events/EventsDashboardSlice";
import EventsTable from "../components/events/EventsTable";
import SideDrawer from "../components/events/SideDrawer";
import Events from "../components/events/Events";

function EventsPage() {
  const dispatch = useDispatch();

  return (
    <Container component="section" sx={{ position: "relative" }}>
      <Events />
      {/* <EventsTable /> */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          right: "2%",
          bottom: "3%",
          width: "60px",
          height: "60px",
        }}
        onClick={() => dispatch(createEditEvent())}
      >
        <AddIcon fontSize="large" />
      </Fab>

      <SideDrawer />
    </Container>
  );
}

export default EventsPage;
