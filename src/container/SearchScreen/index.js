import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useLocation, useHistory } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { isEmpty } from "lodash";

import { getSearchVideos } from "../../action";
import SideBar from "../SideBar";
import SearchVideosList from "../../component/SearchVideosList";
import { getSearchParam } from "../../utility/utility";

const Search = ({ listGroup, selectedNav, handleNavigationClick }) => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.videoSearch);

  let location = useLocation();
  const searchValue = getSearchParam(location.search, "search_query");

  useEffect(() => {
    dispatch(getSearchVideos(searchValue));
  }, [searchValue, getSearchVideos]);

  let history = useHistory();
  const handleVideoClick = (videoId) => {
    history.push(`watch?v=${videoId}`);
  };

  const handlingVideoList = () => {
    if (!isEmpty(reduxState)) {
      if (!isEmpty(reduxState.fetchSearchVideos)) {
        return reduxState.fetchSearchVideos.map((videoDetail) => {
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
      } else if (!isEmpty(reduxState.searchErrorMsg)) {
        return <p>{reduxState.searchErrorMsg}</p>;
      } else {
        return <p>Loading...</p>;
      }
    }
  };

  return (
    <div>
      <Row>
        <Col xs={2} className="p-0">
          <SideBar
            listGroup={listGroup}
            selectedNav={selectedNav}
            handleNavigationClick={handleNavigationClick}
          />
        </Col>
        <Col xs={10} className="p-0">
          {handlingVideoList()}
        </Col>
      </Row>
    </div>
  );
};

Search.propTypes = {};

export default Search;
