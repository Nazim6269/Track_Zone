import { useState } from "react";
import { generate } from "shortid";

const useEvents = () => {
  const [state, setState] = useState({});

  const getEventsByClockId = (clockId) => {
    return Object.keys(state).filter((item) => item.startsWith(clockId));
  };

  const getEvents = (isArray = fase) => {
    if (!isArray) return state;
    return Object.values(state);
  };

  const addEvent = (event) => {
    event.id = generate();

    setState((prev) => ({
      ...prev,
      [`${event.clockId} | ${event.id}`]: event,
    }));

    return event;
  };

  const deleteEvent = (id) => {
    const events = { ...state };
    delete events[id];
    setState(events);
  };

  const deleteEventByCock = (clockId) => {
    const events = Object.keys(state).filter(
      (item) => !item.startsWith(clockId)
    );
    setState(events);
  };

  const updateEvent = (updatedEvent, id) => {
    const events = { ...state };
    events[id] = {
      ...events[id],
      ...updatedEvent,
    };
  };

  return {
    events: state,
    getEventsByClockId,
    getEvents,
    addEvent,
    deleteEvent,
    deleteEventByCock,
    updateEvent,
  };
};

export default useEvents;
