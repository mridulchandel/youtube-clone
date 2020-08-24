import React from "react";

import {
  faHome,
  faFire,
  faBook,
  faHistory,
  faClock,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import SideBarScreen from "../../component/SideBar";
const SideBar = ({ selectedNav, handleNavigationClick }) => {
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
  return (
    <SideBarScreen
      listGroup={listGroup}
      selectedNav={selectedNav}
      handleNavigationClick={handleNavigationClick}
    />
  );
};

export default SideBar;
