import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Selection from "./Selection";
import Display from './Display'
import Comments from "./Comments";




class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      image: "",
    };
  }

  // displayResult = (e, userChoice) => {
  //   e.preventDefault();
  //   const restaurantName = userChoice[0].restaurant;
    
  //   const restaurantImage = userChoice[0].picture;

  //   this.setState({
  //     name: restaurantName,
  //     image: restaurantImage,

  //   });
    
  // };

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
        {/* <Selection displayResult={this.displayResult} /> */}
        {/* <Display name={this.state.name} image={this.state.image}/> */}
        
        
        
      </div>
    );
  }
}

export default App;
