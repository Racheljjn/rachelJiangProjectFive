import React, { Component } from "react";
import dropdownMenu from "./dropdownMenu.js";

class Selection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelection: "",
      selectedItem: [],
    };
  }
  // get user's selection

  handleChange = (e) => {
    this.setState({ userSelection: e.target.value }, () => {
      const selection = dropdownMenu.filter((item) => {
        return item.cuisine === this.state.userSelection;
      });
      this.setState({ selectedItem: selection }, () => {
        console.log(this.state.selectedItem);
      });
    });
  };

  render() {
    const { userSelection, selectedItem } = this.state;

    return (
      // create a dropdown menu for cuisines(by region)

      <main className="selection">
        <label htmlFor="cuisines">Choose a cuisine: </label>
        <select
          id="cuisines"
          name="cuisines"
          value={userSelection}
          onChange={this.handleChange}
          required
        >
          <option value="">Choose...</option>

          <option value="Thai">Thai</option>
          <option value="Chinese">Chinese</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
        </select>

        {/* create a dropdown menu for restaurants */}
        <label htmlFor="restaurants">Choose a restaurant: </label>
        <select id="restaurants" name="restaurants" required>
          <option value="">Choose...</option>

          {this.state.selectedItem.map((item) => {
            return (
              <option key={item.id} value={item.restaurant}>
                {item.restaurant}
              </option>
            );
          })}
        </select>
        <div>
          <button onClick={(e) => this.props.displayResult(e, selectedItem)}>
            write a review
          </button>
        </div>
      </main>
    );
  }
}

export default Selection;
