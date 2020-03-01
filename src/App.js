
import React from "react";
import { Component } from "react";
import Results from "./components/results";
import SearchBar from "./components/searchBar";
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


