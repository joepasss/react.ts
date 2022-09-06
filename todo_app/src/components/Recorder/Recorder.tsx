import React, { useEffect, useRef, useState } from "react";
import "./Recorder.css";

// redux
import { useDispatch, useSelector } from "react-redux";
import { selectDateStart, start, stop } from "../redux/recorder";
import { addZero } from "../lib/util";
import { createUserEvent } from "../redux/user-events";

const Recorder = () => {
  const dispatch = useDispatch();
  const [, setCount] = useState<number>(0);

  const dateStart = useSelector(selectDateStart);

  const started = dateStart !== "";

  let interval = useRef<number>(0);

  const handleClick = () => {
    if (started) {
      window.clearInterval(interval.current);
      dispatch(createUserEvent());
      dispatch(stop());
    } else {
      dispatch(start());
      interval.current = window.setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      window.clearInterval(interval.current);
    };
  }, []);

  let seconds = started
    ? Math.floor((Date.now() - new Date(dateStart).getTime()) / 1000)
    : 0;
  let minutes = seconds ? Math.floor(seconds / 60) : 0;
  let hours = seconds ? Math.floor(seconds / 60 / 60) : 0;

  return (
    <div className={started ? "recorder recorder-started" : "recorder"}>
      <button className="recorder-record" onClick={handleClick}>
        <span></span>
      </button>
      <div className="recorder-counter">
        {addZero(hours)}:{addZero(minutes)}:{addZero(seconds)}
      </div>
    </div>
  );
};

export default Recorder;
