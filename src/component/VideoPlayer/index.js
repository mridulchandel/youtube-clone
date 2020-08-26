import React, { useState } from "react";
import PropTypes from "prop-types";
import YoutubePlayer from "../common/YoutubePlayer";
import { Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

function VideoPlayer({ videoId, videoDetail }) {
  const renderVideoDetails = () => {
    const {
      title,
      description,
      channelTitle,
      publishedAt,
      channelId,
      tags,
      viewCount,
      likeCount,
      dislikeCount,
      thumbnail,
      subscriberCount,
    } = videoDetail;
    // const tags = ["dsfs", "fdsfd"];
    return (
      <div className="videoPlayer-detail">
        <div className="videoPlayer-mainDetail">
          {tags && tags.map((tag) => <p className="pr-3 mb-0">#{tag}</p>)}
          <h4>{title}</h4>
          <div className="videoPlayer-subDetail">
            <p>{viewCount} views</p>
            <div className="videoPlayer-otherDetail">
              <span>
                <FontAwesomeIcon icon={faThumbsUp} className="text-muted" />
                <p className="m-0 pl-1">{likeCount}</p>
              </span>
              <span>
                <FontAwesomeIcon icon={faThumbsDown} className="text-muted" />
                <p className="m-0 pl-1">{dislikeCount}</p>
              </span>
            </div>
          </div>
          <hr />
        </div>
        <div className="videoPlayer-channelDetail">
          <Image src={thumbnail && thumbnail.url} roundedCircle />
          <div className="videoPlayer-videoDesc pl-2">
            <h5 className="mb-1">{channelTitle}</h5>
            <p className="mb-1">{subscriberCount} subscribers</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Container fluid className="videoPlayer-component py-4">
      <YoutubePlayer videoId={videoId} />
      {videoDetail && renderVideoDetails()}
    </Container>
  );
}

VideoPlayer.propTypes = {};

export default VideoPlayer;
