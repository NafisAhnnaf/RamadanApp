import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

const Home = () => {
  const [c, setDate] = useState("");
  const [daysV, setDaysV] = useState("");
  const [hoursV, setHoursV] = useState("");
  const [minutesV, setMinutesV] = useState("");
  const [Cols, setCols] = useState(4);
  const [loading, setLoading] = useState(true);

  //   Get Location:
  const [geoPermissionState, setGeoPermissionState] = useState("");

  useEffect(() => {
    const success = (pos) => {
      const crd = pos.coords;
      console.log(
        `Latitude: ${crd.latitude}, Longitude: ${crd.longitude}, Accuracy: ${crd.accuracy}`
      );
    };

    const error = (err) => {
      console.error(`ERROR(${err.code}): ${err.message}`);
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    };

    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by this browser.");
      return;
    }

    navigator.permissions
      ?.query({ name: "geolocation" })
      .then((result) => {
        setGeoPermissionState(result.state);
        if (result.state === "denied") {
          alert(
            "Location permission denied. Please allow it in site settings."
          );
        } else {
          navigator.geolocation.getCurrentPosition(success, error, options);
        }

        result.onchange = () => setGeoPermissionState(result.state);
      })
      .catch(() => {
        // fallback if `permissions` API not supported
        navigator.geolocation.getCurrentPosition(success, error, options);
      });
  }, [geoPermissionState]);

  const d = new Date(2026, 1, 17, 17, 55, 0, 0);

  //Refreshing every second:
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  useEffect(() => {
    // Show spinner for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  let rem = d - c;
  const days = rem / 86400000;
  const hours = (days - Math.floor(days)) * 24;
  const minutes = (hours - Math.floor(hours)) * 60;
  const seconds = (minutes - Math.floor(minutes)) * 60;
  //Display status
  if (days == 0) {
    setCols(3);
    setDaysV("hidden");
    if (hours == 0) {
      setCols(2);
      setHoursV("hidden");
      if (minutes == 0) {
        setCols(1);
        setMinutesV("hidden");
      }
    }
  }

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <HashLoader
          color="#fff"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  } else {
    return (
      <div className="h-screen flex flex-col justify-center items-center space-y-12 text-center">
        <div className="text-4xl">Ramadan Countdown</div>
        <div
          className={
            Cols + " grid grid-cols-1 md:grid-cols-4 space-y-6 md:space-x-6"
          }
        >
          {/* <div>
                <div className='text-6xl' onLoad={(e)=>setDate(d.getMonth())} >{d.getMonth()+1}</div>
                <div>Month</div>
            </div> */}
          <div>
            <div className={daysV + " text-6xl"}>{Math.floor(days)}</div>
            <div>Days</div>
          </div>
          <div>
            <div className={hoursV + " text-6xl"}>{Math.floor(hours)}</div>
            <div>Hours</div>
          </div>
          <div>
            <div className={minutesV + " text-6xl"}>{Math.floor(minutes)}</div>
            <div>Minutes</div>
          </div>
          <div>
            <div className="text-6xl">{Math.floor(seconds)}</div>
            <div>Seconds</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
