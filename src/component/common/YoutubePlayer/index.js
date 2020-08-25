import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";

function YoutubePlayer({ videoId }) {
  const [height, setHeight] = useState(window.innerHeight * 0.75);

  const handleHeight = () => {
    setHeight(window.innerHeight * 0.75);
  };

  useEffect(() => {
    window.addEventListener("resize", handleHeight);
    return () => {
      window.removeEventListener("resize", handleHeight);
    };
  }, []);

  const opts = {
    height: height,
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return <YouTube videoId={videoId} opts={opts} />;
}

YoutubePlayer.propTypes = {};

export default YoutubePlayer;
