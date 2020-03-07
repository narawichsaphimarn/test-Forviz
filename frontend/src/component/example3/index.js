import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Room from "./room";
import { data } from "../../action/mock_data/example3/data";
import {
  sort_event,
  sort_event_nextWeek,
  sort_data_month
} from "../../tool/sortEvents";
import { nowDate, nowDay, nowMonth, nowYear } from "../../action/setStableDate";

const Example3 = () => {
  let { roomId } = useParams();

  let value = [];

  if (typeof roomId !== "undefined") {
    data.find(item => {
      if (item.roomId === roomId) value.push(item);
    });
  }

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
