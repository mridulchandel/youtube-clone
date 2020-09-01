import React, { useState, useEffect, useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Container, Col, Row } from "react-bootstrap";
import { isEmpty, map } from "lodash";

import SideBar from "../SideBar";
import HomeVideosList from "../HomeVideosList";
import { getHomeVideos } from "../../action";
import "./style.scss";

const MainScreen = ({ listGroup, selectedNav, handleNavigationClick }) => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.videoSearch);

  useEffect(() => {
    dispatch(getHomeVideos());
  }, []);

  const handlingVideoList = () => {
    if (isEmpty(reduxState.errorMsg)) {
      return (
        <HomeVideosList fetchedVideos={reduxState && reduxState.fetchVideos} />
      );
    } else {
      return <p>{reduxState.errorMsg}</p>;
    }
  };

  return (
    <div className="mainScreen">
      <SideBar
        listGroup={listGroup}
        selectedNav={selectedNav}
        handleNavigationClick={handleNavigationClick}
      />
      {handlingVideoList()}
    </div>
  );
};

export default memo(MainScreen);
