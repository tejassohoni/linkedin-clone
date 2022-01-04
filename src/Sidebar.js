import React from "react";
import { useSelector } from "react-redux";

import { Avatar } from "@material-ui/core";

import "./Sidebar.css";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={user.photoUrl}>
          {user.displayName[0]}
        </Avatar>

        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed You</p>
          <div className="sidebar__statNumber">1,000</div>
        </div>
        <div className="sidebar__stat">
          <p>Views On Posts</p>
          <div className="sidebar__statNumber">2,000</div>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software")}
        {recentItem("web designing")}
      </div>
    </div>
  );
}

export default Sidebar;
