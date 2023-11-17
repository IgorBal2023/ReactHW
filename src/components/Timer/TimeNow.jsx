import { useEffect, useState } from "react";

function TimeNow() {
  const [timeNow, setTimeNow] = useState(new Date());

  useEffect(() => {
    const timeId = setInterval(() => {
      setTimeNow(new Date());
    }, 1000);

    return () => clearInterval(timeId);
  }, []);

  const hour = timeNow.getHours();
  const minutes = timeNow.getMinutes();
  const seconds = timeNow.getSeconds();
  const CLock = (num) => (num < 10 ? `0${num}` : num);
  return (
    <div className="clock">
      <p>Час зараз:</p>
      <p>
        {CLock(hour)} : {CLock(minutes)} : {CLock(seconds)}
      </p>
      <hr />
    </div>
  );
}

export default TimeNow;
