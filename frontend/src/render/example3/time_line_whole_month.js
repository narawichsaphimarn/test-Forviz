import React from "react";
import { color } from "../../action/mock_data/example3/data";
import "../../component/example3/style.css";

const TimeLineWholeMonth = props => {
  const { data, item } = props;

  return (
    <div>
      <div className="bar-date">
        {item === "Today" || item === "Tomorrow" ? (
          <label>{`${item} (${data.day}, ${data.date} ${data.month})`}</label>
        ) : (
          <label>{`${data.month}, ${data.year}`}</label>
        )}
      </div>
      <div className="list-containner">
        <div className="content">
          {data.data.map((item, index) => {
            return (
              <div key={`date${index}`}>
                <div className="bar-date2">
                  {item === "Today" || item === "Tomorrow" ? (
                    <label>{`${item} (${item.day}, ${item.date} ${item.month})`}</label>
                  ) : (
                    <label>{`${item.day}, ${item.date} ${item.month}`}</label>
                  )}
                </div>
                <div className="list-containner">
                  <div className="contentWhole">
                    {item.event.map((item, index) => {
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
                                top: 21
                              }}
                              className={"dot-style"}
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
          })}
        </div>
      </div>
    </div>
  );
};

export default TimeLineWholeMonth;
