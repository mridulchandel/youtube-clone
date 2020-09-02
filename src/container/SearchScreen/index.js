import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useLocation, useHistory } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { isEmpty } from "lodash";

import { getSearchVideos } from "../../action";
import SideBar from "../SideBar";
import { getSearchParam } from "../../utility/utility";
import SearchVideoList from "../SearchVideoList";
import "./style.scss";
const Search = ({ listGroup, selectedNav, handleNavigationClick }) => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.videoSearch);

  let location = useLocation();
  const searchValue = getSearchParam(location.search, "search_query");

  useEffect(() => {
    dispatch(getSearchVideos(searchValue));
  }, [searchValue, getSearchVideos]);

  const handlingVideoList = () => {
    if (isEmpty(reduxState.searchErrorMsg)) {
      return (
        <SearchVideoList
          fetchedVideos={reduxState && reduxState.fetchSearchVideos}
        />
      );
    } else {
      return <p>{reduxState.searchErrorMsg}</p>;
    }
  };

  // const handlingVideoList = () => {
  //   if (!isEmpty(reduxState)) {
  //     if (!isEmpty(reduxState.fetchSearchVideos)) {
  //       return reduxState.fetchSearchVideos.map((videoDetail) => {
  //         const {
  //           videoId,
  //           title,
  //           channelTitle,
  //           thumbnails,
  //           channelId,
  //           publishedAt,
  //           views,
  //         } = videoDetail;
  //         return (
  //           <SearchVideosList
  //             key={videoId}
  //             title={title}
  //             channelTitle={channelTitle}
  //             views={views}
  //             thumbnail={thumbnails.medium}
  //             videoId={videoId}
  //             handleVideoClick={handleVideoClick}
  //           />
  //         );
  //       });
  //     } else if (!isEmpty(reduxState.searchErrorMsg)) {
  //       return <p>{reduxState.searchErrorMsg}</p>;
  //     } else {
  //       return <p>Loading...</p>;
  //     }
  //   }
  // };

  return (
    <div className="searchScreen">
      <SideBar
        listGroup={listGroup}
        selectedNav={selectedNav}
        handleNavigationClick={handleNavigationClick}
      />
      {handlingVideoList()}
    </div>
  );
};

Search.propTypes = {};

export default Search;
