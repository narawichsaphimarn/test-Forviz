import React from "react";
import "../../component/example3/style.css";

const ThisWeekToday = props => {
  const { sortEvent } = props;

  return (
    <div>
      {sortEvent.Today.event.map((item, index) => {
        return (
          <div key={`eventToday${index}`} className="event-panel">
            <p>{item.time}</p>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ThisWeekToday;
