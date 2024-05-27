import { createSlice } from "@camonk/react-redux";

const initialState = {
  isDrawerOpen: false,
  eventToEdit: null,
  isCreatingEditingEvent: false,
  eventId: null,
  eventUsers: [],
};

export const eventsDashboardSlice = createSlice({
  name: "eventsDashboard",
  initialState,
  reducers: {
    createEditEvent: (state, action) => {
      state.isDrawerOpen = true;
      state.isCreatingEditingEvent = true;
      state.eventToEdit = action.payload;
    },

    showEventUsers: (state, action) => {
      state.isDrawerOpen = true;
      state.eventId = action.payload;
    },

    closeSideDrawer: () => initialState,
  },
});

export const { createEditEvent, showEventUsers, closeSideDrawer } =
  eventsDashboardSlice.actions;

export default eventsDashboardSlice.reducer;
