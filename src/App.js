
import React from "react";
import { Component } from "react";
import Results from "./containers/results";
import SearchBar from "./containers/searchBar";
export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Results />
      </div>
    );
  }
}


