import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

function Backdrop({ onDismiss }) {
  return <div className="backdrop" onClick={onDismiss}></div>;
}

Backdrop.propTypes = {};

export default Backdrop;
