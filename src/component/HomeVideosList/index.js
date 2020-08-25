import React from "react";
import VideoListCard from "../common/VideoListCard";

const HomeVideosList = ({
  title,
  channelTitle,
  views,
  thumbnail,
  videoId,
  handleVideoClick,
}) => {
  return (
    <VideoListCard
      title={title}
      channelTitle={channelTitle}
      views={views}
      thumbnail={thumbnail}
      videoId={videoId}
      handleVideoClick={handleVideoClick}
    />
  );
};

export default HomeVideosList;
