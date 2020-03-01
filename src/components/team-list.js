
import React, { Component } from "react";
import '../assets/styles/detailsCard.scss';
import '../assets/styles/app.scss';
import { connect } from 'react-redux'
import { fetchUsers, selectItem } from '../actions/index'
class TeamList extends Component {

  componentDidMount() {
    this.props.fetchUsers();
  }
  helper(members) {
    if (this.props.users.length === 0) {
      return (
        <div>
          Loading ...
          </div>
      )
    }
    return (
      <p

      >
        This team has {members.length} members.
            </p>
    )
  }
  renderList() {
    return this.props.teams.map(team => {
      if (this.props.activeItem.length > 0) {
        return (
          <div
            className={"infoWrapper"}

            key={team.id}
            onClick={() => {
              this.props.selectItem(team.id);
            }
            }
          >
            <div className={"title"}   >

              {team.name}

            </div>
          </div >
        );
      } else {
        const members = this.props.users.filter(user => user.teamId === team.id);
        return (
          <div
            className={"infoWrapper"}
            key={team.id}
            onClick={() => {
              this.props.selectItem(team.id);
            }} >
            <div className={"overview"} >
              <div className={"title"}>
                {team.name}
              </div>
              {this.helper(members)}
              <p>
                Leads by: {team.teamLeadName.first} {team.teamLeadName.last}
              </p>
            </div>
          </div>
        );
      }
    });

  }
  render() {
    return (
      <div
        className={(this.props.activeItem.length > 0) ? "CardsWrapperWithDetailPart" : "CardsWrapperNoDetailPart"}

      >
        {this.renderList()}
      </div>

    );
  }
}
function mapStateToProps(state) {
  return { teams: state.appState.teams, activeItem: state.appState.activeItem, users: state.appState.users };
}
export default connect(mapStateToProps, { selectItem: selectItem, fetchUsers: fetchUsers })(TeamList);
