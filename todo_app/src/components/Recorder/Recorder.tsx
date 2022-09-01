import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectDateStart, start, stop } from "../../redux/recorder";
import cx from "classnames";
import "./Recorder.css";
import { addZero } from "../../lib/utils";
import { createUserEvent } from "../../redux/user-events";
import { ThunkDispatch } from "redux-thunk";

const Recorder = () => {
  const dispatch = useDispatch();
  const thunkDispatch = useDispatch() as ThunkDispatch<any, any, any>;
  const dateStart = useSelector(selectDateStart);
  const started = dateStart !== "";
  let interval = useRef<number>(0);

  const [, setCount] = useState<number>(0);

  const handleClick = () => {
    if (started) {
      window.clearInterval(interval.current);
      thunkDispatch(createUserEvent());
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
  let hours = seconds ? Math.floor(seconds / 60 / 60) : 0;
  seconds -= hours * 60 * 60;
  let minutes = seconds ? Math.floor(seconds / 60) : 0;
  seconds -= minutes * 60;

  return (
    <div className={cx("recorder", { "recorder-started": started })}>
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
