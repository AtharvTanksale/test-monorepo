import { useTheme } from "@camonk/design-system";
import { Box, Drawer } from "@camonk/design-system/components";
import { useDispatch, useSelector } from "@camonk/react-redux";
import { closeSideDrawer } from "./EventsDashboardSlice";
import EventRegisteredUsersTable from "./EventRegisteredUsersTable";
import CreateEventForm from "./CreateEventForm";
import EventUsers from "./EventUsers";

function SideDrawer() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const isDrawerOpen = useSelector(
    (state) => state.eventsDashboard.isDrawerOpen
  );

  const isCreatingEditingEvent = useSelector(
    (state) => state.eventsDashboard.isCreatingEditingEvent
  );

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={() => dispatch(closeSideDrawer())}
    >
      <Box p={theme.spacing(2)} width="37vw" role="presentation">
        {isCreatingEditingEvent ? (
          <CreateEventForm />
        ) : (
          <EventRegisteredUsersTable />
        )}
      </Box>
    </Drawer>
  );
}

export default SideDrawer;
