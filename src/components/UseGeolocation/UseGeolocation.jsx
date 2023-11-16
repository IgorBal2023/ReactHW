import { useEffect, useState } from "react";
import "./UseGeolocation.css";

function UseGeolocation() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    } else {
      console.error("Місцезнаходження недоступне", error);
    }
  }, []);
  return (
    <div className="coordinate">
      <p>Ваше місцезнаходження : </p>
      <hr />
      <p>
        широта: <span className="latitude">{latitude}</span>
      </p>
      <p>
        довгота: <span className="longitude">{longitude}</span>
      </p>
    </div>
  );
}

export default UseGeolocation;
