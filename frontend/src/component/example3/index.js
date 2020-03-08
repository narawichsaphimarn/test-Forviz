import React from "react";
import "./style.css";
import Room from "./room";
import { data } from "../../action/mock_data/example3/data";
import {
  sort_event,
  sort_event_nextWeek,
  sort_data_month
} from "../../tool/sortEvents";
import { nowDate, nowDay, nowMonth, nowYear } from "../../action/setStableDate";
import { Link, useLocation } from "react-router-dom";

const Example3 = props => {
  let query = new URLSearchParams(useLocation().search);
  const { room } = props;

  let value = [];
  let roomId = query.get("roomId");

  if (typeof roomId !== "undefined") {
    value = data.filter(item => item.roomId === roomId);
  }

  console.log("value : ", value);

  let sortEvent = sort_event(value, nowDate, nowDay, nowMonth);
  let sortNextWeek = sort_event_nextWeek(value, nowDate, nowDay, nowMonth);
  let sortWholeMonth = sort_data_month(
    value,
    nowDate,
    nowDay,
    nowMonth,
    nowYear
  );

  const values = Object.keys(sortEvent);

  return (
    <div>
      <div className="bar_buttom_room">
        {room.map(item => {
          return (
            <div key={`${item.roomId}`}>
              <Link
                id={`link${item.roomId}`}
                className={"buttom_link"}
                to={`/bookinngs/today?roomId=${item.roomId}`}
              >
                {item.roomId}
              </Link>
            </div>
          );
        })}
      </div>
      {typeof roomId !== "undefined" ? (
        <Room
          roomId={roomId}
          value={value}
          values={values}
          sortEvent={sortEvent}
          sortNextWeek={sortNextWeek}
          sortWholeMonth={sortWholeMonth}
        />
      ) : (
        <h1>Select path</h1>
      )}
    </div>
  );
};

export default Example3;
