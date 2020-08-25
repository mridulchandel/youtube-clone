import React, { useState } from "react";
import PropTypes from "prop-types";
import YoutubePlayer from "../common/YoutubePlayer";
import { Container, Row, Col } from "react-bootstrap";

import "./style.scss";

function VideoPlayer({ videoId }) {
  return (
    <Container fluid className="videoPlayer-component py-4">
      <YoutubePlayer videoId={videoId} />
      <div></div>
    </Container>
  );
}

VideoPlayer.propTypes = {};

export default VideoPlayer;
