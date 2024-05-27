import { axios } from "@camonk/axios";
import dayjs from "dayjs";

export async function createEvent(event) {
  let newEvent = event.data;

  try {
    const response = await axios.post(`/events/create`, {
      ...newEvent,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Event could not be created");
  }
}

export async function cancelEvent(eventId) {
  try {
    const response = await axios.patch(`/events/cancel/${eventId}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Event could not be canceled");
  }
}

export async function openEvent(eventId) {
  try {
    const response = await axios.patch(`/events/${eventId}`, {
      status: "opened",
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Event could not be opened");
  }
}

export async function deleteEvent(eventId) {
  try {
    const response = await axios.delete(`/events/${eventId}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Event could not be deleted");
  }
}

export async function editEvent(eventId, editedEvent) {
  delete editedEvent.id;
  delete editedEvent.createdAt;
  delete editedEvent.totalRegistered;

  try {
    const response = await axios.put(`/events/${eventId}`, {
      ...editedEvent,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Event could not be edited");
  }
}

export async function getAllRegisteredUsers(eventId) {
  console.log("eventId", eventId);

  try {
    const response = await axios.get(`/events/registered/${eventId}`);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Event could not be edited");
  }
}
