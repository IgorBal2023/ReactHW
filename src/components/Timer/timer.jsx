import { useEffect, useState } from "react";
import "./timer.css";
import TimeNow from "./TimeNow";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const countTime = setTimeout(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(countTime);
  }, [time]);

  const timeSeconds = time % 60;
  const timeMinutes = Math.floor((time / 60) % 60);
  const timeHour = Math.floor(time / 3600);
  const YourTimeSite = (time) => (time < 10 ? `0${time}` : `${time}`);

  return (
    <div className="timeBox">
      <p>Час перебування на сайті:</p>
      <p>
        {YourTimeSite(timeHour)} : {YourTimeSite(timeMinutes)} :{" "}
        {YourTimeSite(timeSeconds)}{" "}
      </p>
      <hr />
      <TimeNow />
    </div>
  );
}

export default Timer;
