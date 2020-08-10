import React, { Component } from "react";
import dropdownMenu from "./dropdownMenu.js";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisine: {},
      resaturant: {},
      display: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    console.log(this);
  }

  handleChange(e) {
    this.setState({ cuisine: e.target.value });

    if (e.target.value === "Thai") {
      this.setState({ resaturant: "EAT BKK" });
    }
  }
  handleClick() {
    this.setState({
      display: (
        <div>
          {" "}
          <h1> {dropdownMenu[0].restaurant}</h1>
          <img
            src={dropdownMenu[0].picture}
            alt="EAT BKK Thai Kitchen with colorful poster on the wall,black and red chairs around a square table"
          ></img>
        </div>
      ),
    });
  }

  render() {
    return (
      // create a dropdown menu for cuisines
      <main>
        <label htmlFor={this.props.idOne}>Choose a cuisine: </label>
        <select
          id={this.props.idOne}
          value={this.state.cuisine}
          onChange={this.handleChange}
        >
          <option value="undefined">choose...</option>
          <option value="Thai">Thai</option>
          <option value="Chinese">Chinese</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
        </select>

        <label htmlFor={this.props.idTwo}>Choose a restaurant: </label>
        <select
          id={this.props.idTwo}
          value={this.state.resaturant}
          onChange={this.handleChange}
        >
          <option value="undefined">choose...</option>
          <option value="EAT BKK">EAT BKK</option>
          <option value="The Best Wonton">The Best Wonton</option>
        </select>
        <button onClick={this.handleClick}>Submit</button>

        <div>
          {/* display restaurant name and image based on user selection */}
          {this.state.display}
        </div>
      </main>
    );
  }
}

export default Main;
