import React from "react";
import { Card } from "react-bootstrap";

import "./style.scss";

const VideoListCard = ({
  thumbnail,
  title,
  channelTitle,
  channelIcon,
  views,
  uploaded,
}) => {
  return (
    <Card className="video-list-card-container">
      <Card.Img variant="top" src={thumbnail.url} />
      <Card.Body>
        <div className="title">{title}</div>
        <Card.Text class="text">
          {channelTitle}
          {`\n${views} views . ${uploaded} ago`}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default VideoListCard;
