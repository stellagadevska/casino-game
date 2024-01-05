import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTime } from "../redux/actions";

const Timer = ({ onTimerEnd }) => {
  const dispatch = useDispatch();
  const label = "Timer";
  const initialTime = 180; // 3 minutes in seconds
  const time = useSelector((state) => state.time);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (time === 0) {
        clearInterval(timerId);
        onTimerEnd();
        dispatch(setTime(initialTime));
      } else {
        dispatch(setTime(time - 1)); 
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [time, onTimerEnd, dispatch, initialTime]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div>
      <h2>{label}</h2>
      {formatTime(time)}
    </div>
  );
};

export default Timer;
