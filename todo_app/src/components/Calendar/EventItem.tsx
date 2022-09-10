import React from "react";
import { UserEvent } from "../redux/user-events";

interface Props {
  event: UserEvent;
}

const EventItem: React.FC<Props> = ({ event }) => {
  return (
    <div className="calendar-event">
      <div className="calendar-event-info">
        <div className="calendar-event-time">10:00 - 12:00</div>
        <div className="calendar-event-title">{event.title}</div>
      </div>
      <button className="calendar-event-delete-button">&times;</button>
    </div>
  );
};

export default EventItem;
