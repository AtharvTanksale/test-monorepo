import dayjs from "dayjs";
import { axios } from "@camonk/axios";
import { toast } from "@camonk/toast";

export async function getEvents({ filterValue }) {
  try {
    const response = await axios.get(`/events/all?${filterValue}`);
    const data = response.data.data.sort(
      (a, b) => dayjs(a.date) - dayjs(b.date)
    );

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Events could not be loaded");
  }
}

export async function getEvent(eventId) {
  try {
    const response = await axios.get(`/events/${eventId}`);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Event could not be loaded");
  }
}
