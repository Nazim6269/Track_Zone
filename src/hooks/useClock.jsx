import { addMinutes } from "date-fns";
import { useEffect, useState } from "react";
import { TIMEZONE_OFFSET } from "../constants/timezone";
import PropTypes from "prop-types";

/**
 * useClock is a custom hook that provides date, timezone, and offset based on the given timezone.
 * @param {string} [timezone] - The timezone representing the timezone of the clock.
 * @param {number} [offset=0] - The offset representing the time difference from UTC in minutes.
 * @returns {Object} An object containing date, date in UTC, offset, and timezone.
 */

const useClock = (timezone, offset = 0) => {
  const [localDate, setLocalDate] = useState(null);
  const [localOffset, setLocalOffset] = useState(0);
  const [localTimezone, setLocalTimezone] = useState("");
  const [utc, setUTC] = useState(null);

  useEffect(() => {
    let d = new Date();
    const lo = d.getTimezoneOffset();
    d = addMinutes(d, lo);
    setUTC(d);
    setLocalOffset(lo);
  }, []);

  useEffect(() => {
    if (utc !== null) {
      if (timezone) {
        offset = TIMEZONE_OFFSET[timezone] ?? offset;

        const newUTC = addMinutes(utc, offset);
        setLocalDate(newUTC);
      } else {
        const newUTC = addMinutes(utc, -localOffset);
        const dateStrArr = newUTC.toUTCString().split(" ");
        setLocalDate(newUTC);
        setLocalTimezone(dateStrArr.pop());
      }
    }
  }, [utc, timezone, offset]);

  return {
    date: localDate,
    dateUTC: utc,
    offset: offset || -localOffset,
    timezone: timezone || localTimezone,
  };
};

useClock.propTypes = {
  timezone: PropTypes.string,
  offset: PropTypes.number,
};

export default useClock;
