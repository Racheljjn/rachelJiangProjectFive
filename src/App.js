import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Comments from "./Comments";
import Footer from './Footer';

class App extends Component {
  
    
  

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
        <Footer footer="created by Rachel Jiang 2020"/>      
      </div>
    );
  }
}

export default App;
