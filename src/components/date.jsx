import React from "react";
import { DateDisplay } from "./datetime";
import "./date.scss";

const Dwidget = () => {
  return (
    <time className="head">
      <div className="date">
        <DateDisplay />
      </div>
    </time>
  );
};

export default Dwidget;
