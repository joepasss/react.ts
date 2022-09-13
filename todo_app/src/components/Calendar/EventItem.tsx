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
  const [edit, setEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(event.title);
  const dispatch = useDispatch() as ThunkDispatch<any, any, any>;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDelete = () => {
    dispatch(deleteUserEvent(event.id));
  };

  const handleTitleClick = () => {
    setEdit(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBlur = () => {
    dispatch(
      updateUserEvent({
        ...event,
        title,
      })
    );

    setEdit(false);
  };

  useEffect(() => {
    if (edit) {
      inputRef.current!.focus();
    }
  }, [edit]);

  return (
    <div className="calendar-event">
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
