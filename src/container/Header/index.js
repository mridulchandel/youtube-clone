import React from "react";
import HeaderScreen from "../../component/Header";

const Header = ({ searchValue, handleSearchValue, handleSearchClick }) => {
  return (
    <HeaderScreen
      searchValue={searchValue}
      handleSearchValue={handleSearchValue}
      handleSearchClick={handleSearchClick}
    />
  );
};

export default Header;
