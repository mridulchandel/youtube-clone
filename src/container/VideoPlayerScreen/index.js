import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import VideoPlayerScreen from "../../component/VideoPlayer";
import { getSearchParam } from "../../utility/utility";
import { getWatchSearchVideos, getWatchVideoDetails } from "../../action";
import SearchVideosList from "../../component/SearchVideosList";

function VideoPlayer(props) {
  const history = useHistory();
  const location = useLocation();
  const videoId = getSearchParam(location.search, "v");

  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.videoSearch);
  const watchState = useSelector((state) => state.videoWatch);
  const { title } = watchState.fetchWatchDetails;

  const handleVideoClick = useCallback(
    (videoId) => {
      history.push(`watch?v=${videoId}`);
    },
    [videoId]
  );

  const handlingVideoList = () => {
    if (!isEmpty(searchState)) {
      if (!isEmpty(searchState.fetchWatchSearchVideos)) {
        return searchState.fetchWatchSearchVideos.map((videoDetail) => {
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
      } else if (!isEmpty(searchState.watchSearchErrorMsg)) {
        return <p>{searchState.watchSearchErrorMsg}</p>;
      } else {
        return <p>Loading...</p>;
      }
    }
  };

  useEffect(() => {
    dispatch(getWatchVideoDetails(videoId));
  }, [videoId, getWatchVideoDetails]);

  useEffect(() => {
    dispatch(getWatchSearchVideos(title));
  }, [title, getWatchSearchVideos]);
  return (
    <div>
      <VideoPlayerScreen
        videoId={videoId}
        videoDetail={watchState.fetchWatchDetails}
      />
      {handlingVideoList()}
    </div>
  );
}

VideoPlayer.propTypes = {};

export default VideoPlayer;
