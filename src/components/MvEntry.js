import PropTypes from "prop-types";

import React, { Component } from "react";
import "./MvEntry.css";

function MvEntry(props) {
 return (
  <div id={props.id} className="mvEntry">
    <div className="mvId">{props.index}.</div>
    {props.story ? (
        <div className="mvText"><a href="#">{props.text}</a></div>
      ) : (
        <div className="mvText">{props.text}</div>
      )}

  </div>
 );
}

MvEntry.propTypes = {
  text: PropTypes.string.isRequired
};

export default MvEntry;