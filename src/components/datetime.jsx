import React, { useState, useEffect } from "react";

export const DateDisplay = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();

      const weekday = now.toLocaleDateString("en-US", {
        weekday: "short",
      });

      const month = now.toLocaleDateString("en-US", {
        month: "short",
      });

      const day = now.getDate();
      const year = now.getFullYear();

      const formattedDate = `${weekday} ,${month} ${day} ${year}`;

      setDate(formattedDate);
    };

    updateDate();
    const interval = setInterval(updateDate, 60000);

    return () => clearInterval(interval);
  }, []);

  return <div>{date}</div>;
};

export const TimeDisplay24 = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formattedTime = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit", // optional, remove if not needed
        hour12: false,
      });

      setTime(formattedTime);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
};
