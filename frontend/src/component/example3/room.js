import React, { useState } from "react";
import "./style.css";
import { nowDate, nowDay, nowMonth } from "../../action/setStableDate";
import ThisWeek from "../../render/example3/thisWeek";
import NextWeek from "../../render/example3/nextWeek";
import WholeMonth from "../../render/example3/wholeMonth";
import ThisWeekToday from "../../render/example3/thisWeek_today";

const Room = props => {
  const [valueNav, setValueNav] = useState(0);
  const { roomId, values, sortNextWeek, sortEvent, sortWholeMonth } = props;

  return (
    <div className="room-containner">
      <div>
        <div className="upcomming">
          <div className="name-room">
            <p>{roomId}</p>
          </div>
          <div className="list-time">
            <p>Upcomming</p>
            <p>{nowDay.day}</p>
            <p>
              {nowDate} {nowMonth.month_abbreviations}
            </p>
          </div>
          <div className="show-event-containner">
            <ThisWeekToday sortEvent={sortEvent} />
          </div>
        </div>

        <div className="list-menu">
          <div className="nav-bar-container">
            <div
              onClick={() => {
                setValueNav(0);
              }}
              className={valueNav === 0 ? "active" : "noActive"}
            >
              <p>THIS WEEK</p>
              <div></div>
            </div>
            <div
              onClick={() => {
                setValueNav(1);
              }}
              className={valueNav === 1 ? "active" : "noActive"}
            >
              <p>NEXT WEEK</p>
              <div></div>
            </div>
            <div
              onClick={() => {
                setValueNav(2);
              }}
              className={valueNav === 2 ? "active" : "noActive"}
            >
              <p>WHOLE MONTH</p>
              <div></div>
            </div>
          </div>
          <div className="show-list-event">
            <div className="timeLine"></div>
            {valueNav === 2 ? <div className="timeLineWhole"></div> : ""}
            <div style={{ marginTop: "10%" }}>
              {valueNav === 0 ? (
                <ThisWeek sortEvent={sortEvent} values={values} />
              ) : valueNav === 1 ? (
                <NextWeek sortNextWeek={sortNextWeek} />
              ) : (
                <WholeMonth sortWholeMonth={sortWholeMonth} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
