import React from "react";
import SpinnerImage from "./../../assets/spinner.gif";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={SpinnerImage} alt="spinner" />
    </div>
  );
};

export default Spinner;
