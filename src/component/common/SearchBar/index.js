import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

const SearchBar = ({
  searchStyle,
  searchValue,
  handleSearchValue,
  handleSearchClick,
}) => {
  return (
    <div className="searchBarContainer d-flex rounded">
      <input
        type="text"
        className="border-0"
        style={searchStyle}
        placeholder="Search"
        id="searchBar"
        value={searchValue}
        onChange={(e) => handleSearchValue(e.target.value)}
      />
      <Button variant="light" className="rounded-0" onClick={handleSearchClick}>
        <FontAwesomeIcon icon={faSearch} className="text-muted" />
      </Button>
    </div>
  );
};

export default SearchBar;
