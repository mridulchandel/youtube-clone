import React from "react";

import SideList from "../common/SideList";
import "./style.scss";

const SideBar = ({ listGroup, selectedNav, handleNavigationClick }) => {
  return (
    <aside className="sideBar-container">
      {listGroup.map((list) => (
        <div key={list[0].iconName}>
          <SideList
            list={list}
            selectedNav={selectedNav}
            handleNavigationClick={handleNavigationClick}
          />
          <hr />
        </div>
      ))}
    </aside>
  );
};

export default SideBar;
