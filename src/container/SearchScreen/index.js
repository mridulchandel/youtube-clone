import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

import { getSearchVideos } from "../../action";
import SideBar from "../SideBar";

const Search = ({ selectedNav, handleNavigationClick }) => {
  let location = useLocation();
  const dispatch = useDispatch();
  const params = new URLSearchParams(location.search);
  const searchValue = params.get("search_query");

  useEffect(() => {
    dispatch(getSearchVideos(searchValue));
  }, [searchValue, getSearchVideos]);

  return (
    <div>
      <Row>
        <Col xs={2} className="p-0">
          <SideBar
            selectedNav={selectedNav}
            handleNavigationClick={handleNavigationClick}
          />
        </Col>
        <Col xs={10} className="p-0"></Col>
      </Row>
    </div>
  );
};

Search.propTypes = {};

export default Search;
