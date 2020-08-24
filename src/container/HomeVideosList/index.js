import React, { Fragment } from "react";
import HomeVideosListScreen from "../../component/HomeVideosList";

import "./style.scss";

const HomeVideosList = ({ fetchedVideos }) => {
  const renderingVideoList = () => {
    return fetchedVideos.map((videoDetail) => {
      const {
        videoId,
        title,
        channelTitle,
        thumbnails,
        channelId,
        publishedAt,
        views,
      } = videoDetail;
      return (
        <HomeVideosListScreen
          title={title}
          channelTitle={channelTitle}
          views={views}
          thumbnail={thumbnails.medium}
        />
      );
    });
  };
  return <div class="homeVideoList-container p-2">{renderingVideoList()}</div>;
};

export default HomeVideosList;
