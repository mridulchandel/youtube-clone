import React from "react";
import PropTypes from "prop-types";

import SideList from "../common/SideList";
import Backdrop from "../common/Backdrop";
import "./style.scss";

function SideBarModal({ listGroup, selectedNav, show, handleNavigationClick }) {
  let classes = ["sideBarModal-container"];
  if (show) {
    classes.push("showModal");
  }
  return (
    <aside className={classes.join(" ")}>
      {listGroup.map((list) => (
        <div key={list[0].iconName}>
          <SideList
            modal={true}
            list={list}
            selectedNav={selectedNav}
            handleNavigationClick={handleNavigationClick}
          />
          <hr />
        </div>
      ))}
    </aside>
  );
}

SideBarModal.propTypes = {};

export default SideBarModal;
