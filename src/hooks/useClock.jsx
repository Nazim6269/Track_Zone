import { addMinutes } from "date-fns";
import { useEffect, useState } from "react";
import { TIMEZONE_OFFSET } from "../constants/timezone";

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

export default useClock;
