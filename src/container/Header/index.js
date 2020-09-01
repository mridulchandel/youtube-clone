import React from "react";
import HeaderScreen from "../../component/Header";

const Header = ({
  searchValue,
  showSideBar,
  handleSearchValue,
  handleSearchClick,
}) => {
  return (
    <HeaderScreen
      searchValue={searchValue}
      showSideBar={showSideBar}
      handleSearchValue={handleSearchValue}
      handleSearchClick={handleSearchClick}
    />
  );
};

export default Header;
