import React from "react";
import "../../component/example3/style.css";
import TimeLine from "./time_line";

const NextWeek = props => {
  const { sortNextWeek } = props;

  return (
    <div>
      {sortNextWeek.map((item, index) => {
        let data = item;
        if (data.event.length !== 0) {
          return (
            <div key={`bar${index}`}>
              <TimeLine data={data} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default NextWeek;
