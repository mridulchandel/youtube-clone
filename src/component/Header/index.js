import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Headroom from "react-headroom";

import YoutubeLogo from "../common/YoutubeLogo";
import SearchBar from "../common/SearchBar";
import "./style.scss";
const Header = ({
  searchValue,
  showSideBar,
  handleSearchValue,
  handleSearchClick,
}) => {
  return (
    <Headroom>
      <Container
        fluid
        className="header-component d-flex py-4 justify-content-between"
      >
        <div className="header-subComponent d-flex justify-content-between">
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            onClick={showSideBar}
            className="header-component-barIcon"
          />
          <YoutubeLogo size="2x" />
        </div>
        <SearchBar
          searchStyle={{ width: "50vw", maxWidth: "30rem" }}
          searchValue={searchValue}
          handleSearchValue={handleSearchValue}
          handleSearchClick={handleSearchClick}
        />
      </Container>
    </Headroom>
  );
};

export default Header;
