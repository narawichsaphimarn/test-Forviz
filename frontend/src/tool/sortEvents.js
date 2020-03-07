import { dayCal } from "./cal_day";
import { day, month } from "../action/mock_data/example3/data";

export const sort_event = (data, nowDate, nowDay, nowMonth) => {
  let dataEvent = {
    Today: { date: "", day: "", month: "", event: [] },
    Tomorrow: { date: "", day: "", month: "", event: [] },
    Day3: { date: "", day: "", month: "", event: [] },
    Day4: { date: "", day: "", month: "", event: [] },
    Day5: { date: "", day: "", month: "", event: [] },
    Day6: { date: "", day: "", month: "", event: [] },
    Day7: { date: "", day: "", month: "", event: [] }
  };
  data.map(item => {
    let startDate = item.startTime.split(" ");
    let endDate = item.endTime.split(" ");
    let getStartDate = startDate[0].split("-")[2];
    let getStartMonth = startDate[0].split("-")[1];
    getStartDate = parseInt(getStartDate, "10");
    getStartMonth = parseInt(getStartMonth, "10");
    let splitDate = item.startTime.split(" ")[0].split("-"); // แยกข้อมูล เอาแต่วันที่
    let splitDateEnd = item.endTime.split(" ")[0].split("-");

    try {
      let id = day.find(item => item.day === nowDay.day);
      const step1 = 7 - id.id;
      const step2 = nowDate + step1;
      let month_days = month.find(item => item.full === nowMonth.month);
      let step3 = step2 - month_days.days;
      if (step3 < 0) {
        step3 = step3 * -1;
      }
      let days = [];

      if (
        (getStartDate >= nowDate &&
          getStartDate <= step2 &&
          getStartMonth === month_days.id) ||
        (getStartDate >= 1 &&
          getStartDate <= step3 &&
          getStartMonth === month_days.id + 1)
      ) {
        const time = setTime(startDate, endDate);

        let numStart = parseInt(splitDate[2], "10");
        let numEnd = parseInt(splitDateEnd[2], "10");

        let distance_day = numEnd - numStart;
        if (distance_day < 0) distance_day = distance_day * -1;

        if (distance_day !== 0) {
          let i = numStart;
          if (numStart > numEnd) {
            let new_date_end = numEnd + month_days.days;
            console.log("new_date_end :: ", new_date_end);
            while (i <= new_date_end) {
              let num = i;
              let num_date = num;
              if (num_date > month_days.days) {
                num_date = num_date - month_days.days;
                if (parseInt(splitDate[1], "10") + 1 > 12) {
                  days = dayCal(
                    `${parseInt(splitDate[0], "10") + 1}-${parseInt(
                      splitDate[1],
                      "10"
                    ) +
                      1 -
                      parseInt(splitDate[1], "10")}-${num_date} `
                  );
                } else {
                  days = dayCal(
                    `${splitDate[0]}-${parseInt(splitDate[1], "10") +
                      1}-${num_date} `
                  );
                }
              }

              if (num_date <= step3) {
                console.log("step3 :: ", step3);
                switch (num - nowDate) {
                  case 0:
                    dataEvent.Today.date = days.date;
                    dataEvent.Today.day = days.day_abbreviations;
                    dataEvent.Today.month = days.month;
                    if (dataEvent.Today.event.length !== 0) {
                      let oldgetTimeStart = dataEvent.Today.event[
                        dataEvent.Today.event.length - 1
                      ].startTime.split(" ")[1];
                      let oldgetTime = parseInt(
                        oldgetTimeStart.split(":")[0],
                        "10"
                      );

                      let newgetTimeStart = parseInt(
                        startDate[1].split(":")[0],
                        "10"
                      );

                      if (oldgetTime < newgetTimeStart) {
                        dataEvent.Today.event.push(
                          Object.assign(item, { time: time })
                        );
                      }
                    } else {
                      dataEvent.Today.event.push(
                        Object.assign(item, { time: time })
                      );
                    }
                    break;

                  case 1:
                    dataEvent.Tomorrow.date = days.date;
                    dataEvent.Tomorrow.day = days.day_abbreviations;
                    dataEvent.Tomorrow.month = days.month;
                    dataEvent.Tomorrow.event.push(
                      Object.assign(item, { time: time })
                    );
                    break;

                  case 2:
                    dataEvent.Day3.date = days.date;
                    dataEvent.Day3.day = days.day_abbreviations;
                    dataEvent.Day3.month = days.month;
                    dataEvent.Day3.event.push(
                      Object.assign(item, { time: time })
                    );
                    break;

                  case 3:
                    dataEvent.Day4.date = days.date;
                    dataEvent.Day4.day = days.day_abbreviations;
                    dataEvent.Day4.month = days.month;
                    dataEvent.Day4.event.push(
                      Object.assign(item, { time: time })
                    );
                    break;

                  case 4:
                    dataEvent.Day5.date = days.date;
                    dataEvent.Day5.day = days.day_abbreviations;
                    dataEvent.Day5.month = days.month;
                    dataEvent.Day5.event.push(
                      Object.assign(item, { time: time })
                    );
                    break;

                  case 5:
                    dataEvent.Day6.date = days.date;
                    dataEvent.Day6.day = days.day_abbreviations;
                    dataEvent.Day6.month = days.month;
                    dataEvent.Day6.event.push(
                      Object.assign(item, { time: time })
                    );
                    break;

                  case 6:
                    dataEvent.Day7.date = days.date;
                    dataEvent.Day7.day = days.day_abbreviations;
                    dataEvent.Day7.month = days.month;
                    dataEvent.Day7.event.push(
                      Object.assign(item, { time: time })
                    );
                    break;

                  default:
                    break;
                }
              }
              i++;
            }
          }
        } else {
          days = dayCal(item.startTime);
          let num_date = 0;
          if (getStartDate < nowDate) {
            num_date = getStartDate + (month_days.days - nowDate);
          } else {
            num_date = getStartDate - nowDate;
          }
          switch (num_date) {
            case 0:
              dataEvent.Today.date = days.date;
              dataEvent.Today.day = days.day_abbreviations;
              dataEvent.Today.month = days.month;
              if (dataEvent.Today.event.length !== 0) {
                let oldgetTimeStart = dataEvent.Today.event[
                  dataEvent.Today.event.length - 1
                ].startTime.split(" ")[1];
                let oldgetTime = parseInt(oldgetTimeStart.split(":")[0], "10");

                let newgetTimeStart = parseInt(
                  startDate[1].split(":")[0],
                  "10"
                );

                if (oldgetTime < newgetTimeStart) {
                  dataEvent.Today.event.push(
                    Object.assign(item, { time: time })
                  );
                }
              } else {
                dataEvent.Today.event.push(Object.assign(item, { time: time }));
              }
              break;

            case 1:
              dataEvent.Tomorrow.date = days.date;
              dataEvent.Tomorrow.day = days.day_abbreviations;
              dataEvent.Tomorrow.month = days.month;
              dataEvent.Tomorrow.event.push(
                Object.assign(item, { time: time })
              );
              break;

            case 2:
              dataEvent.Day3.date = days.date;
              dataEvent.Day3.day = days.day_abbreviations;
              dataEvent.Day3.month = days.month;
              dataEvent.Day3.event.push(Object.assign(item, { time: time }));
              break;

            case 3:
              dataEvent.Day4.date = days.date;
              dataEvent.Day4.day = days.day_abbreviations;
              dataEvent.Day4.month = days.month;
              dataEvent.Day4.event.push(Object.assign(item, { time: time }));
              break;

            case 4:
              dataEvent.Day5.date = days.date;
              dataEvent.Day5.day = days.day_abbreviations;
              dataEvent.Day5.month = days.month;
              dataEvent.Day5.event.push(Object.assign(item, { time: time }));
              break;

            case 5:
              dataEvent.Day6.date = days.date;
              dataEvent.Day6.day = days.day_abbreviations;
              dataEvent.Day6.month = days.month;
              dataEvent.Day6.event.push(Object.assign(item, { time: time }));
              break;

            case 6:
              dataEvent.Day7.date = days.date;
              dataEvent.Day7.day = days.day_abbreviations;
              dataEvent.Day7.month = days.month;
              dataEvent.Day7.event.push(Object.assign(item, { time: time }));
              break;

            default:
              break;
          }
        }
      }
    } catch (error) {
      console.error("Sort event error !:: ", error);
    }
  });
  return dataEvent;
};

const setTime = (startDate, endDate) => {
  let newStartTime = startDate[1].split(":");
  let newEndTime = endDate[1].split(":");
  let time = `${newStartTime[0]}:${newStartTime[1]} - ${newEndTime[0]}:${newEndTime[1]}`;
  return time;
};

export const sort_event_nextWeek = (data, nowDate, nowDay, nowMonth) => {
  const data_week = cal_data_week(data, nowDate, nowDay, nowMonth);
  let new_data_week = [];
  data_week.map((item, index) => {
    if (new_data_week.length === 0) {
      new_data_week.push(item);
    } else {
      let search = new_data_week.find(it => item.date === it.date);
      if (search === undefined) {
        new_data_week.push(item);
      } else {
        search.event.push(item.event[0]);
      }
    }
  });
  return new_data_week;
};

const cal_data_week = (data, nowDate, nowDay, nowMonth) => {
  let id = day.find(item => item.day === nowDay.day);
  const step1 = 7 - id.id;
  const step2 = nowDate + step1;
  let month_days = month.find(item => item.full === nowMonth.month); // ขอข้อมูลเดือน
  let step3 = step2 - month_days.days;
  if (step3 < 0) {
    step3 = step3 * -1;
  }
  let value = [];

  data.map((item, index) => {
    //   data struc for nextweek data
    let data_week = {
      date: "",
      day: "",
      month: "",
      event: []
    };
    const time = setTime(item.startTime.split(" "), item.endTime.split(" ")); // ขอข้อมูลเวลา
    let splitDate = item.startTime.split(" ")[0].split("-"); // แยกข้อมูล เอาแต่วันที่
    let splitDateEnd = item.endTime.split(" ")[0].split("-");

    if (step2 > month_days.days) {
      let newMonth = month_days.id + 1;
      if (newMonth > 12) newMonth = newMonth - 12;
      if (parseInt(splitDate[1], "10") === newMonth) {
        if (
          parseInt(splitDate[2], "10") > step3 &&
          parseInt(splitDate[2], "10") < step3 + 7
        ) {
          let newMonth = month_days.id + 1;
          let new_month = month.find(item => item.id === newMonth);
          if (newMonth > 12) newMonth = newMonth - 12;

          let numStart = parseInt(splitDate[2], "10");
          let numEnd = parseInt(splitDateEnd[2], "10");

          if (numEnd - numStart !== 0) {
            let i = numStart;
            if (
              step3 + 7 < numEnd ||
              splitDate[1] !== splitDateEnd[1] ||
              splitDate[0] !== splitDateEnd[0]
            ) {
              while (i <= step3 + 7) {
                data_week = {
                  date: "",
                  day: "",
                  month: "",
                  event: []
                };
                let num = i;
                let data_day = dayCal(
                  `${splitDate[0]}-${splitDate[1]}-${num} `
                );
                if (step3 + 7 > num) {
                  if (num >= parseInt(splitDate[2], "10")) {
                    data_week.date = num;
                    data_week.day = data_day.day_abbreviations;
                    data_week.month = new_month.abbreviations;
                    data_week.event.push(Object.assign(item, { time: time }));
                    value.push(data_week);
                  }
                } else {
                  data_week.date = num;
                  data_week.day = data_day.day_abbreviations;
                  data_week.month = month_days.abbreviations;
                  data_week.event.push(Object.assign(item, { time: time }));
                  value.push(data_week);
                }
                i++;
              }
            } else {
              while (i <= numEnd) {
                data_week = {
                  date: "",
                  day: "",
                  month: "",
                  event: []
                };
                let num = i;
                let data_day = dayCal(
                  `${splitDate[0]}-${splitDate[1]}-${num} `
                );
                if (step3 + 7 > num) {
                  if (num >= parseInt(splitDate[2], "10")) {
                    data_week.date = num;
                    data_week.day = data_day.day_abbreviations;
                    data_week.month = new_month.abbreviations;
                    data_week.event.push(Object.assign(item, { time: time }));
                    value.push(data_week);
                  }
                } else {
                  data_week.date = num;
                  data_week.day = data_day.day_abbreviations;
                  data_week.month = month_days.abbreviations;
                  data_week.event.push(Object.assign(item, { time: time }));
                  value.push(data_week);
                }
                i++;
              }
            }
          } else {
            let data_day = dayCal(item.startTime); // ขอข้อมูลวัน
            data_day = data_day.day_abbreviations;
            let new_value = step3 + 7;
            if (step3 + 7 > month_days.days) {
              if (new_value > parseInt(splitDate[2], "10")) {
                data_week.date = parseInt(splitDate[2], "10");
                data_week.day = data_day;
                data_week.month = new_month.abbreviations;
                data_week.event.push(Object.assign(item, { time: time }));
                value.push(data_week);
              }
            } else {
              data_week.date = parseInt(splitDate[2], "10");
              data_week.day = data_day;
              data_week.month = month_days.abbreviations;
              data_week.event.push(Object.assign(item, { time: time }));
              value.push(data_week);
            }
          }
        }
      }
    }
  });
  return value;
};

export const sort_data_month = (value, nowDate, nowDay, nowMonth, nowYear) => {
  // struct of month
  let month_struct = {
    month: "",
    year: "",
    data: []
  };
  value.map((item, index) => {
    const stable_month = nowMonth; // ตั้งค่าเดือนปัจจุบัน
    const stable_year = nowYear; // ตั้งค่าปีปัจจุบัน

    // ถอดเดือนของแต่ละ item
    let month_start = item.startTime.split(" ")[0].split("-")[1];
    month_start = parseInt(month_start, "10");
    // ถอดปีของ item
    let yaer_start = item.startTime.split(" ")[0].split("-")[0];
    let splitDate = item.startTime.split(" ")[0].split("-"); // แยกข้อมูล เอาแต่วันที่
    let splitDateEnd = item.endTime.split(" ")[0].split("-");

    // เช็คว่าข้อมูลอยู่ในเดือนและปีเดียวกัน
    if (
      month_start === stable_month.id &&
      stable_year.toString() === yaer_start
    ) {
      let numStart = parseInt(splitDate[2], "10");
      let numEnd = parseInt(splitDateEnd[2], "10");
      let monthStart = parseInt(splitDate[1], "10");
      let monthEnd = parseInt(splitDateEnd[1], "10");

      // set month ตั้งต้น
      if (
        month_struct.month === "" &&
        month_struct.year === "" &&
        month_struct.data.length === 0
      ) {
        month_struct.month = stable_month.month_abbreviations;
        month_struct.year = stable_year;
      }

      const time = setTime(item.startTime.split(" "), item.endTime.split(" ")); // ขอข้อมูลเวลา

      let distance_day = numEnd - numStart;
      if (distance_day < 0) distance_day = distance_day * -1;

      if (distance_day !== 0) {
        let i = numStart;
        if (monthStart !== monthEnd || splitDate[0] !== splitDateEnd[0]) {
          while (i <= nowMonth.days) {
            let day_struct = {
              date: "",
              day: "",
              month: "",
              event: []
            };
            let num = i;
            let data_day = dayCal(`${splitDate[0]}-${splitDate[1]}-${num} `);
            // set data day && เก็บค่า
            day_struct.date = data_day.date;
            day_struct.day = data_day.day_abbreviations;
            day_struct.month = data_day.month;
            day_struct.event.push(Object.assign(item, { time: time }));

            let search = month_struct.data.find(
              (item, index) => data_day.date === item.date
            );

            if (search !== undefined) {
              search.event.push(day_struct.event[0]);
            } else {
              month_struct.data.push(day_struct);
            }
            i++;
          }
        } else {
          while (i <= numEnd) {
            let day_struct = {
              date: "",
              day: "",
              month: "",
              event: []
            };
            let num = i;
            let data_day = dayCal(`${splitDate[0]}-${splitDate[1]}-${num} `);
            // set data day && เก็บค่า
            day_struct.date = data_day.date;
            day_struct.day = data_day.day_abbreviations;
            day_struct.month = data_day.month;
            day_struct.event.push(Object.assign(item, { time: time }));

            let search = month_struct.data.find(
              (item, index) => data_day.date === item.date
            );

            if (search !== undefined) {
              search.event.push(day_struct.event[0]);
            } else {
              month_struct.data.push(day_struct);
            }
            i++;
          }
        }
      } else {
        let day_struct = {
          date: "",
          day: "",
          month: "",
          event: []
        };
        // ขอข้อมูลวันของ item
        let data_day = dayCal(item.startTime);

        // set data day && เก็บค่า
        day_struct.date = data_day.date;
        day_struct.day = data_day.day_abbreviations;
        day_struct.month = data_day.month;
        day_struct.event.push(Object.assign(item, { time: time }));

        let search = month_struct.data.find(
          (item, index) => data_day.date === item.date
        );

        if (search !== undefined) {
          search.event.push(day_struct.event[0]);
        } else {
          month_struct.data.push(day_struct);
        }
      }
    }
  });

  // sort data/time
  let newData = month_struct.data;
  newData.map((item, index) => {
    let data_new = [];
    item.event.map((item, index) => {
      let start_time = item.startTime.split(" ")[1].split(":");
      start_time = parseInt(start_time[0], "10");
      data_new[start_time] = item;
    });
    data_new = data_new.filter(item => item !== "empty");
    let search = month_struct.data.find(it => it.date === item.date);
    search.event = data_new;
  });
  return [month_struct];
};
