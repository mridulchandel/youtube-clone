import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import MainScreen from "../MainScreen";
import SearchScreen from "../SearchScreen";
import Header from "../Header";

const Router = (props) => {
  const history = useHistory();
  const [selectedNav, setSelectedNav] = useState("Home");
  const [searchValue, setSearchValue] = useState("");
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
      {/* <BrowserRouter> */}
      <Switch>
        <Route path="/results">
          <SearchScreen
            selectedNav={selectedNav}
            handleNavigationClick={handleNavigationClick}
          />
        </Route>
        <Route path="/">
          <MainScreen
            selectedNav={selectedNav}
            handleNavigationClick={handleNavigationClick}
          />
        </Route>
      </Switch>
      {/* </BrowserRouter> */}
    </>
  );
};

Router.propTypes = {};

export default Router;
