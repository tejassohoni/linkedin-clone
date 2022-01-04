import React from "react";
import "./Widgets.css";

import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React Is Back", "9.3K readers")}
      {newsArticle("Covid hits again", "10.7K readers")}
      {newsArticle("Tesla hits new high", "5.2K readers")}
      {newsArticle("Redux updated with Sagas", "8.6K readers")}
      {newsArticle("Linkedin design update", "15.9K readers")}
    </div>
  );
}

export default Widgets;
