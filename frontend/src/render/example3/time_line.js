import React from "react";
import { color } from "../../action/mock_data/example3/data";
import "../../component/example3/style.css";

const TimeLine = props => {
  const { data, item } = props;

  return (
    <div>
      <div className="bar-date">
        {item === "Today" || item === "Tomorrow" ? (
          <label>{`${item} (${data.day}, ${data.date} ${data.month})`}</label>
        ) : (
          <label>{`${data.day}, ${data.date} ${data.month}`}</label>
        )}
      </div>
      <div className="list-containner">
        <div className="content">
          {data.event.map((item, index) => {
            return (
              <div key={`room${index}`}>
                <div
                  style={{
                    width: "10%",
                    position: "relative"
                  }}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: color[index],
                      borderRadius: "10px",
                      position: "absolute",
                      top: 21,
                      left: "-4px"
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    width: "90%",
                    marginLeft: 30
                  }}
                >
                  <p>{item.time}</p>
                  <p>{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
