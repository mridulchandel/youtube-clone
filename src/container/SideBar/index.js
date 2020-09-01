import React from "react";

import SideBarScreen from "../../component/SideBar";
const SideBar = ({ listGroup, selectedNav, handleNavigationClick }) => {
  return (
    <SideBarScreen
      listGroup={listGroup}
      selectedNav={selectedNav}
      handleNavigationClick={handleNavigationClick}
    />
  );
};

export default SideBar;
