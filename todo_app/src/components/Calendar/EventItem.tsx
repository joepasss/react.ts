import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import {
  deleteUserEvent,
  updateUserEvent,
  UserEvent,
} from "../redux/user-events";

interface Props {
  event: UserEvent;
}

const EventItem: React.FC<Props> = ({ event }) => {
  const dispatch = useDispatch() as ThunkDispatch<any, any, any>;
  const [edit, setEdit] = useState<Boolean>(false);

  const handleDelete = () => {
    dispatch(deleteUserEvent(event.id));
  };

  const handleTitleClick = () => {
    setEdit(true);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState<string>(event.title);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (edit) {
      inputRef.current?.focus();
    }
  }, [edit]);

  const handleBlur = () => {
    if (title !== event.title) {
      dispatch(
        updateUserEvent({
          ...event,
          title,
        })
      );
    }
    setEdit(false);
  };

  return (
    <div className="calendar-event" key={event.id}>
      <div className="calendar-event-info">
        <div className="calendar-event-time">10:00 - 12:00</div>
        <div className="calendar-event-title">
          {edit ? (
            <input
              type="text"
              value={title}
              ref={inputRef}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ) : (
            <span onClick={handleTitleClick}>{event.title}</span>
          )}
        </div>
      </div>
      <button className="calendar-event-delete-button" onClick={handleDelete}>
        &times;
      </button>
    </div>
  );
};

export default EventItem;
