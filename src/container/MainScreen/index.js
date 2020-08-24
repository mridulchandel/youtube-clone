import React, { useState, useEffect, useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Container, Col, Row } from "react-bootstrap";
import { isEmpty, map } from "lodash";

import SideBar from "../SideBar";
import HomeVideosList from "../HomeVideosList";
import { getHomeVideos } from "../../action";

const MainScreen = ({ selectedNav, handleNavigationClick }) => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.videoSearch);

  useEffect(() => {
    dispatch(getHomeVideos());
  }, []);

  const handlingVideoList = () => {
    console.log(reduxState);
    if (!isEmpty(reduxState)) {
      if (!isEmpty(reduxState.fetchVideos)) {
        return <HomeVideosList fetchedVideos={reduxState.fetchVideos} />;
      } else if (!isEmpty(reduxState.errorMsg)) {
        return <p>{reduxState.errorMsg}</p>;
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

export default memo(MainScreen);
