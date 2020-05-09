import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/searchBar.scss';
import { selectItem } from '../actions/index';

class SearchBar extends Component {
  onSearchInputChange(term) {
    let searchList = [];
    this.props.teams.map((team) => {
      return searchList.push({ id: team.id, name: team.name });
    });
    this.props.users.map((user) => {
      return searchList.push({
        id: user.userId,
        name: `${user.name.first} ${user.name.last}`,
      });
    });

    searchList = searchList.filter((item) => {
      item.name.toLocaleLowerCase().includes(term.toLocaleLowerCase());
    });
    if (searchList.length > 0) {
      this.props.selectItem(searchList[0].id);
    } else {
      this.props.selectItem('nosearchresult');
    }

    if (term.length === 0) {
      this.props.selectItem(0);
    }
  }
  render() {
    return (
      <div className={'searchBarContainer'}>
        <input
          onChange={(event) => this.onSearchInputChange(event.target.value)}
          placeholder={'Search in Users and Teams'}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { teams: state.appState.teams, users: state.appState.users };
}

export default connect(mapStateToProps, { selectItem: selectItem })(SearchBar);
