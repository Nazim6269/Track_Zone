import { format } from "date-fns";
import PropTypes from "prop-types";
import React from "react";

/**
 * ClockDisplay component displays a clock with given date, timezone, offset, and title.
 * @param {Object} props - The props object containing date, timezone, offset, and title.
 * @param {Date} props.date - The date object representing the current date and time.
 * @param {string} props.timezone - The timezone string representing the timezone of the clock.
 * @param {number} props.offset - The offset representing the time difference from UTC in minutes.
 * @param {string} props.title - The title of the clock.
 * @returns {JSX.Element} A JSX element representing the ClockDisplay component.
 */

const ClockDisplay = ({ date, timezone, offset, title }) => {
  let offsetHr = offset / 60;
  return (
    <div>
      <h1>Title: {title}</h1>
      <h2>{format(date, "yyy-mm-dd hh:mm:ss aaaa")}</h2>
      <h3>
        {timezone}
        {offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`}
      </h3>
    </div>
  );
};

ClockDisplay.propTypes = {
  date: PropTypes.object,
  timezone: PropTypes.string,
  offset: PropTypes.number,
  title: PropTypes.string,
};

export default ClockDisplay;
