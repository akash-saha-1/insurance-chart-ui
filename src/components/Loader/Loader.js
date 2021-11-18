import React from "react";
import LoaderImage from "./../../assets/loader2.gif";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <img src={LoaderImage} alt="loader" />
    </div>
  );
};

export default Loader;
