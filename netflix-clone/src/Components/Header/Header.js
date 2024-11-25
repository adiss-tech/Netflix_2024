//! Import the necessary dependencies and resources
import React from "react"; //? import react library
import "./header.css"; //? import CSS file for the header
import NetflixLogo from "../../assets/images/NetflixLogo.png";

//? import icons from the Material-UI library.
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => { //? Define a functional component called Header
  return (
    <div className="header_outer_container">
      <div className="header_container">
        {/* Create a left-aligned section for the header content, with a class name
        of header_left */}
        <div className="header_left">
          <ul>
            {/* create an unordered list */}
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        {/* Create a right-aligned section for the header content */}
        <div className="header_right">
          <ul> {/* create an unordered list */}
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
