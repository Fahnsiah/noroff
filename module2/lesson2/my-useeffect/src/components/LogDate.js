import React, { useEffect, useState } from "react";

const LogDate = () => {
  const [currentDate, setCurrentDate] = useState();
  function getCurrentDate() {
    const currentDate = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let currDate = currentDate.toLocaleDateString("en-US", options);
    setCurrentDate(currDate);
  }

  useEffect(() => {
    getCurrentDate();
  }, []);
  return (
    <div>
      <h2>Current Date:</h2>
      <h3>{currentDate}</h3>
    </div>
  );
};

export default LogDate;
