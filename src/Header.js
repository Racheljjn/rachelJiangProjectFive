// add header to the page
import React, { Component } from "react";

class Header extends Component {
  displayHeader(props) {
    return props.header;
  }
  render() {
    return (
      <header>
        <h1>{this.props.header}</h1>
      </header>
    );
  }
}

export default Header;
