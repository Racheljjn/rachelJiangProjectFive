import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Comments from "./Comments";

class App extends Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div className=" wrapper App">
        {/* add a Header to page */}
        <Header>
          <h1>
            Reviews
            <span>
              <i className="fas fa-utensils"></i>
            </span>
          </h1>
        </Header>
        <Comments/>      
      </div>
    );
  }
}

export default App;
