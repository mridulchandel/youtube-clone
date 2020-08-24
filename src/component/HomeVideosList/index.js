import React from "react";
import VideoListCard from "../common/VideoListCard";

const HomeVideosList = ({ title, channelTitle, views, thumbnail }) => {
  return (
    <VideoListCard
      title={title}
      channelTitle={channelTitle}
      views={views}
      thumbnail={thumbnail}
    />
  );
};

export default HomeVideosList;
