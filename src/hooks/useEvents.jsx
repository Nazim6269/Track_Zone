import { useState } from "react";
import { generate } from "shortid";

/**
 * useEvents is a custom hook for managing events.
 * @returns {Object} An object containing methods for managing events.
 */

const useEvents = () => {
  const [state, setState] = useState({});

  /**
   * Retrieves events associated with a clock by its ID.
   * @param {string} clockId - The ID of the clock.
   * @returns {string[]} An array of event IDs associated with the clock.
   */
  const getEventsByClockId = (clockId) => {
    return Object.keys(state).filter((item) => item.startsWith(clockId));
  };

  /**
   * Retrieves all events.
   * @param {boolean} [isArray=false] - Specifies whether to return events as an array or an object.
   * @returns {Object|string[]} All events as an object or an array.
   */
  const getEvents = (isArray = fase) => {
    if (!isArray) return state;
    return Object.values(state);
  };

  /**
   * this function adding events
   * @param {Object} event - The event to add.
   * @returns {Object} The added event.
   */
  const addEvent = (event) => {
    event.id = generate();

    setState((prev) => ({
      ...prev,
      [`${event.clockId} | ${event.id}`]: event,
    }));

    return event;
  };

  /**
   * Deletes an event by its ID.
   * @param {string} id - The ID of the event to delete.
   */
  const deleteEvent = (id) => {
    const events = { ...state };
    delete events[id];
    setState(events);
  };

  /**
   * Deletes all events associated with a clock by its ID.
   * @param {string} clockId - The ID of the clock whose events are to be deleted.
   */
  const deleteEventByCock = (clockId) => {
    const events = Object.keys(state).filter(
      (item) => !item.startsWith(clockId)
    );
    setState(events);
  };

  /**
   * Updates an existing event.
   * @param {Object} updatedEvent - The updated event object.
   * @param {string} id - The ID of the event to update.
   */
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
