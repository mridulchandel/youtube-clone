import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import HomeVideosListScreen from "../../component/HomeVideosList";

import "./style.scss";

const HomeVideosList = ({ fetchedVideos }) => {
  let history = useHistory();
  const handleVideoClick = (videoId) => {
    history.push(`watch?v=${videoId}`);
  };
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
          videoId={videoId}
          handleVideoClick={handleVideoClick}
        />
      );
    });
  };
  return <div class="homeVideoList-container py-2">{renderingVideoList()}</div>;
};

export default HomeVideosList;
