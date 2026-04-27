import React from "react";
import { TimeDisplay24 } from "./datetime";
import "./time_widget.scss";

const Twidget = () => {
  return (
    <time className="head">
      <div className="time">
        <TimeDisplay24 />
      </div>
    </time>
  );
};

export default Twidget;
