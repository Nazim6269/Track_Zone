import { addSeconds } from "date-fns";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

/**
 * A custom hook for creating a timer based on a provided date.
 * @param {Date} date - The initial date for the timer.
 * @returns {Date|null} The current timer value.
 */

const useTimer = (date) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setTimer(date);
  }, [date]);

  let timerId = null;
  useEffect(() => {
    if (!timer && timerId !== null) return;

    timerId = setInterval(() => {
      setTimer(addSeconds(timer, 1));
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [timer]);

  return timer;
};

useTimer.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export default useTimer;
