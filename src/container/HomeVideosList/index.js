import React from "react";
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
        <ContentPlaceholder
          className="homeVideoList-container py-2"
          width={400}
          height={300}
        >
          <rect x="8" y="2" rx="0" ry="0" width="352" height="166" />
          <circle cx="35" cy="210" r="29" />
          <rect x="77" y="190" rx="0" ry="0" width="282" height="36" />
          <rect x="79" y="236" rx="0" ry="0" width="278" height="23" />
        </ContentPlaceholder>
      );
    }
    return <div className="homeVideoList-container py-2">{loader}</div>;
  }
  return (
    <div className="homeVideoList-container py-2">{renderingVideoList()}</div>
  );
};

export default HomeVideosList;
