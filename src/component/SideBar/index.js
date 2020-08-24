import React from "react";

import SideList from "../common/SideList";
import "./style.scss";

const SideBar = ({ listGroup, selectedNav, handleNavigationClick }) => {
  return (
    <aside className="sideBar-container">
      {listGroup.map((list) => (
        <>
          <SideList
            list={list}
            selectedNav={selectedNav}
            handleNavigationClick={handleNavigationClick}
          />
          <hr />
        </>
      ))}
    </aside>
  );
};

export default SideBar;
