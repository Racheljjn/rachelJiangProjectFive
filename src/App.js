import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import StarRating from "./Rating";
import Comments from "./Comments";

class App extends Component {
  render() {
    return (
      <div className=" wrapper App">
        <Header header="Reviews"  />
        <Main idOne="cuisines" idTwo="restaurants" />
        <StarRating />
        <Comments />
      </div>
    );
  }
}

export default App;
