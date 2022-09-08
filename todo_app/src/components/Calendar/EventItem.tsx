import React from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { deleteUserEvent, UserEvent } from "../redux/user-events";

interface Props {
  event: UserEvent;
}

const EventItem: React.FC<Props> = ({ event }) => {
  const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

  const handleDelete = () => {
    dispatch(deleteUserEvent(event.id));
  };

  return (
    <div className="calendar-event" key={event.id}>
      <div className="calendar-event-info">
        <div className="calendar-event-time">10:00 - 12:00</div>
        <div className="calendar-event-title">{event.title}</div>
      </div>
      <button className="calendar-event-delete-button" onClick={handleDelete}>
        &times;
      </button>
    </div>
  );
};

export default EventItem;
