
import React, { Component } from "react";
import "./MvList.css";
import MvEntry from './MvEntry';

function MvList(props) {
  console.log(props);
  return (
    <div>
      {props.mvs.map(c => <MvEntry id={c.id} text={c.text} />)}
    </div>
  );
}


export default MvList;