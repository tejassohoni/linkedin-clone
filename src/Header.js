import React from "react";
import { useDispatch } from "react-redux";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import SupervisorAccountSharpIcon from "@material-ui/icons/SupervisorAccountSharp";
import NotificationsIcon from "@material-ui/icons/Notifications";

import "./Header.css";
import HeaderOption from "./HeaderOption";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountSharpIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption title="Me" onClick={logoutOfApp} avatar={true} />
      </div>
    </div>
  );
}

export default Header;
