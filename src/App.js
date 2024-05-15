import React, { Component } from "react";
import Myself from "./Myself";

export default class App extends Component {
  render() {
    return (
      <div>
        <Myself />
        <p>I am outside the student.</p>
      </div>
    );
  }
}
