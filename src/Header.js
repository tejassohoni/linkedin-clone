import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>This is a header</h1>
      <div className="header_left">
        <img src="" />
        <div className="header_search">
          {/* Search Icon */}
          <input type="text" />
        </div>
      </div>
      <div className="header_right"></div>
    </div>
  );
}

export default Header;
