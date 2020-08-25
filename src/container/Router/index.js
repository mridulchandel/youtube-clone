import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";

import MainScreen from "../MainScreen";
import SearchScreen from "../SearchScreen";
import VideoPlayer from "../VideoPlayer";
import Header from "../Header";
import { getSearchParam } from "../../utility/utility";

const Router = (props) => {
  const history = useHistory();
  const [selectedNav, setSelectedNav] = useState("Home");
  const [searchValue, setSearchValue] = useState("");

  let location = useLocation();
  useEffect(() => {
    const searchValue = getSearchParam(location.search, "search_query");
    setSearchValue(searchValue);
  }, []);

  const handleNavigationClick = useCallback(
    (currentpage) => {
      setSelectedNav(currentpage);
    },
    [setSelectedNav]
  );

  const handleSearchValue = useCallback(
    (searchValue) => {
      setSearchValue(searchValue);
    },
    [setSearchValue]
  );
  const handleSearchClick = useCallback(() => {
    history.push(`results?search_query=${searchValue}`);
  }, [history, searchValue]);

  return (
    <>
      <Header
        searchValue={searchValue}
        handleSearchValue={handleSearchValue}
        handleSearchClick={handleSearchClick}
      />
      <Switch>
        <Route path="/results">
          <SearchScreen
            selectedNav={selectedNav}
            handleNavigationClick={handleNavigationClick}
          />
        </Route>
        <Route path="/watch">
          <VideoPlayer />
        </Route>
        <Route path="/">
          <MainScreen
            selectedNav={selectedNav}
            handleNavigationClick={handleNavigationClick}
          />
        </Route>
      </Switch>
    </>
  );
};

Router.propTypes = {};

export default Router;
