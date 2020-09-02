import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import ContentPlaceholder from "../../component/common/ContentPlaceholder";
import SearchVideosList from "../../component/SearchVideosList";
import "./style.scss";

function SearchVideoList({ fetchedVideos }) {
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
        <SearchVideosList
          key={videoId}
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
          className="searchVideoList-container"
          width={"100%"}
          height={200}
        >
          <rect x="289" y="4" rx="2" ry="2" width="600" height="22" />
          <rect x="290" y="37" rx="2" ry="2" width="167" height="18" />
          <rect x="4" y="-23" rx="2" ry="2" width="264" height="178" />
        </ContentPlaceholder>
      );
    }
    return <div className="searchVideoList-container">{loader}</div>;
  }
  return (
    <div className="searchVideoList-container">{renderingVideoList()}</div>
  );
}

SearchVideoList.propTypes = {};

export default SearchVideoList;
