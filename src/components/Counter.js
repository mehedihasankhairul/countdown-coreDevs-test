import { useLayoutEffect, useState } from "react";

import getCountDown from "../helpers/getCountDown";

const END_DATE = "Jun 05, 2023 12:00:00";

export default function Counter() {
  const [clockData, setClockData] = useState(() => getCountDown(END_DATE));

  useLayoutEffect(() => {
    const clockInterval = setInterval(() => {
      const data = getCountDown(END_DATE)
      if (data.ss < 0) return clearInterval(clockInterval);
      setClockData(data);
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    }
  }, []);

  return (
    <div className="flex-w flex-c-m cd100 p-b-33">
      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 days">{clockData.dd}</span>
        <span className="s2-txt1">Days</span>
      </div>

      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 hours">{clockData.hh}</span>
        <span className="s2-txt1">Hours</span>
      </div>

      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 minutes">{clockData.mm}</span>
        <span className="s2-txt1">Minutes</span>
      </div>

      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 seconds">{clockData.ss}</span>
        <span className="s2-txt1">Seconds</span>
      </div>
    </div>
  );
}