import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { isEmpty } from "lodash";

import HomeVideosListScreen from "../../component/HomeVideosList";
import ContentPlaceholder from "../../component/common/ContentPlaceholder";

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
  if (isEmpty(fetchedVideos)) {
    const loader = [];
    for (let i = 0; i < 12; i++) {
      loader.push(
        <ContentPlaceholder className="homeVideoList-container py-2" />
      );
    }
    return <div className="homeVideoList-container py-2">{loader}</div>;
  }
  return (
    <div className="homeVideoList-container py-2">{renderingVideoList()}</div>
  );
};

export default HomeVideosList;
