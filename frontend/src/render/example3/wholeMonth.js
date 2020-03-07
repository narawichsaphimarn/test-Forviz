import React from "react";
import "../../component/example3/style.css";
import TimeLineWholMonth from "./time_line_whole_month";

const WholeMonth = props => {
  const { sortWholeMonth } = props;

  return (
    <div>
      {sortWholeMonth.map((item, index) => {
        let data = item;
        if (data.data.length !== 0) {
          return (
            <div key={`bar${index}`}>
              <TimeLineWholMonth data={data} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default WholeMonth;
