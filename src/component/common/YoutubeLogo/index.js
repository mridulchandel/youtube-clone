import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import "./style.scss";

const YoutubeLogo = ({ size }) => {
  return (
    <div className="youtubeLogo-container">
      <FontAwesomeIcon icon={faYoutube} className="text-danger" size={size} />
      <h4>
        YouTube <sup className="text-muted">IN</sup>
      </h4>
    </div>
  );
};

export default YoutubeLogo;
