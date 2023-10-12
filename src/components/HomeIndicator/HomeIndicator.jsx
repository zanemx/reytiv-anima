/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HomeIndicator = ({ darkMode, className, homeIndicatorClassName }) => {
  return (
    <div className={`home-indicator ${className}`}>
      <div className={`div dark-mode-${darkMode} ${homeIndicatorClassName}`} />
    </div>
  );
};

HomeIndicator.propTypes = {
  darkMode: PropTypes.bool,
};
