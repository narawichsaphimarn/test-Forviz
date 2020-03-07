import React, { useState, useEffect } from "react";
import "../../component/example3/style.css";
import TimeLine from "./time_line";

const ThisWeek = props => {
  const [sortEvent, setSortEvent] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    setSortEvent(props.sortEvent);
    setValues(props.values);
  }, [props.sortEvent, props.values]);

  return (
    <div>
      {values.map((item, index) => {
        let data = sortEvent[item];
        if (data.event.length !== 0) {
          return (
            <div key={`bar${index}`}>
              <TimeLine data={data} item={item} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default ThisWeek;
