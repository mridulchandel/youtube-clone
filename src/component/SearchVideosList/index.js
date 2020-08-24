import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";

function Search({
  thumbnail,
  title,
  channelTitle,
  channelIcon,
  views,
  uploaded,
}) {
  return (
    <section className="searchVideoList-component">
      <div className="searchVideoList-subSection">
        <img src={thumbnail.url} />
        <div className="searchVideoList-text">
          <h6>{title}</h6>
          <p>
            {`${channelTitle}\t`}&middot;
            {`\t${views}`} views
          </p>
        </div>
      </div>
    </section>
  );
}

Search.propTypes = {};

export default Search;
