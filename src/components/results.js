
import React, { Component } from "react";
import Loading from "../components/loading";
import '../assets/styles/teamCard.scss';
import '../assets/styles/app.scss';
import '../assets/styles/loading.scss';
import '../assets/styles/homePage.scss';
import { connect } from 'react-redux'
import { fetchTeams, selectItem, fetchUsers } from '../actions/index'
import TeamList from './team-list'
import DetailCards from './details_card'
class Results extends Component {

  componentDidMount() {
    this.props.fetchTeams();

  };

  renderResults() {
    if (this.props.teams.length === 0) {
      return <Loading className="loaderContainer" />
    }

    if (typeof (this.props.activeItem) === 'string') {

      let itemNumber = this.props.teams.filter(team => team.id === this.props.activeItem);
      let itemType
      if (itemNumber.length === 1) {
        itemType = "team"
      } else {
        itemType = "user";
      };

      return (
        <div>
          <div
            className="homebutton"

            onClick={() => {
              this.props.selectItem(0);
            }}
          >
           
              Home page
   
          </div>
          <div className='cardsMain'>
            <TeamList />
            <DetailCards itemType={itemType} />
          </div>
        </div>
      )
    };

    return (
      <div>
        <TeamList />
      </div>
    );
  }
  render() {
    return (
      <div >
        {this.renderResults()}
      </div>

    );
  }
}
function mapStateToProps(state) {
  return { teams: state.appState.teams, activeItem: state.appState.activeItem };
}

export default connect(mapStateToProps, {fetchTeams: fetchTeams, selectItem: selectItem})(Results);
