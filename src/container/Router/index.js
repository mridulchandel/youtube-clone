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
import {
  faHome,
  faFire,
  faBook,
  faHistory,
  faClock,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import MainScreen from "../MainScreen";
import SearchScreen from "../SearchScreen";
import VideoPlayerScreen from "../VideoPlayerScreen";
import Header from "../Header";
import { getSearchParam } from "../../utility/utility";
import SideBarModal from "../../component/SideBarModal";
import BackDrop from "../../component/common/Backdrop";

const Router = (props) => {
  let showBar = false;
  const history = useHistory();
  const [selectedNav, setSelectedNav] = useState("Home");
  const [searchValue, setSearchValue] = useState("");
  const [showSideBar, setShowSideBar] = useState(false);

  const listGroup = [
    [
      { iconName: "Home", iconSymbol: faHome },
      { iconName: "Trending", iconSymbol: faFire },
      { iconName: "Subscription", iconSymbol: faYoutube },
    ],
    [
      { iconName: "Library", iconSymbol: faBook },
      { iconName: "History", iconSymbol: faHistory },
      { iconName: "Your Videos", iconSymbol: faYoutube },
      { iconName: "Watch Later", iconSymbol: faClock },
      { iconName: "Liked Videos", iconSymbol: faThumbsUp },
    ],
  ];

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
      <BackDrop show={showSideBar} onDismiss={() => setShowSideBar(false)} />
      <SideBarModal
        listGroup={listGroup}
        selectedNav={selectedNav}
        show={showSideBar}
        handleNavigationClick={handleNavigationClick}
      />

      <Header
        searchValue={searchValue}
        showSideBar={() => setShowSideBar(true)}
        handleSearchValue={handleSearchValue}
        handleSearchClick={handleSearchClick}
      />
      <Switch>
        <Route path="/results">
          <SearchScreen
            listGroup={listGroup}
            selectedNav={selectedNav}
            handleNavigationClick={handleNavigationClick}
          />
        </Route>
        <Route path="/watch">
          <VideoPlayerScreen />
        </Route>
        <Route path="/">
          <MainScreen
            listGroup={listGroup}
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
