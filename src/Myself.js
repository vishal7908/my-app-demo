import React, { Component } from "react";
import vishal from "./image.jpg";
// import "./Myself.css";

export default class Myself extends Component {
  render() {
    return (
      <div className="myself">
        <p>My Image! </p>
        {/* <img src={vishal} /> */}
        <img src={require("./image.jpg")} />
      </div>
    );
  }
}
