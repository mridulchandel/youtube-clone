import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

const SideList = ({ list, selectedNav, handleNavigationClick }) => {
  return (
    <ul className="sideList-container pl-2 list-unstyled">
      {list.map((listItem) => (
        <li
          key={listItem.iconName}
          className={`py-2 ${
            selectedNav === listItem.iconName ? "active" : null
          }`}
          onClick={() => handleNavigationClick(listItem.iconName)}
        >
          <FontAwesomeIcon icon={listItem.iconSymbol} className="w-25" />
          <p>{listItem.iconName}</p>
        </li>
      ))}
    </ul>
  );
};

export default SideList;
