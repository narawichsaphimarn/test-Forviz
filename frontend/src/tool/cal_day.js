import { day, month } from "../action/mock_data/example3/data";
import { nowMonth, nowDate, nowYear, nowDay } from "../action/setStableDate";

export const dayCal = startTime => {
  try {
    const get_day = day.find(item => item.day === nowDay.day);
    const getDate = startTime.split(" ")[0];
    let getDay = getDate.split("-");
    let getMonth = getDay[1];
    let getYear = getDay[0];
    getDay = parseInt(getDay[2], "10");
    getMonth = parseInt(getMonth, "10");
    getYear = parseInt(getYear, "10");
    const realMonth = month.find(item => getMonth === item.id);
    let get_day_cal = 0;

    if (nowMonth.id === getMonth && nowYear === getYear) {
      if (getDay < nowDate) {
        let i = nowDate;
        let day = get_day.id;
        while (i > getDay) {
          i--;
          day--;
          if (day === 0) {
            day = day = 7;
          }
        }
        get_day_cal = day;
      } else {
        get_day_cal = getDay - nowDate;
        if (get_day_cal > 7) {
          get_day_cal = get_day_cal + get_day.id;
          while (get_day_cal > 7) {
            get_day_cal = get_day_cal - 7;
          }
        } else {
          get_day_cal = get_day_cal + get_day.id;
        }
      }
    } else {
      if (
        (getMonth > nowMonth.id && nowYear === getYear) ||
        (nowYear < getYear && getYear - nowYear === 1)
      ) {
        let distance = nowMonth.days - nowDate;
        let step1 = getDay + distance;
        get_day_cal = step1 + get_day.id;
        while (get_day_cal > 7) {
          get_day_cal = get_day_cal - 7;
        }
      }
    }

    const realDay = day.find(item => get_day_cal === item.id);
    const value = {
      day: realDay.day,
      day_abbreviations: realDay.abbreviations,
      date: getDay,
      month: realMonth.abbreviations
    };
    return value;
  } catch (error) {
    console.error("dayCal error !:: ", error);
  }
};
