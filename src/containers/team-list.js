
import React, { Component } from "react";
import Loading from "../components/loading";
import '../assets/styles/loading.scss';
import '../assets/styles/detailsCard.scss';
import '../assets/styles/app.scss';
import { connect } from 'react-redux'
import { fetchUsers, selectItem } from '../actions/index'
import { bindActionCreators } from 'redux'
class TeamList extends Component {
  constructor(props) {
    super(props);
  }
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
      <p className={"overview"}>
        This team has {members.length} members.
            </p>
    )
  }
  renderList() {
    return this.props.teams.map(team => {
      if (this.props.activeItem.length > 0) {
        return (
          <div
            className="cardContainerNoDetail"
            key={team.id}
            onClick={() => {
              this.props.selectItem(team.id);
            }}
          >
            <div className={"infoWrapper"}>
              <div className={"title"}>
                {team.name}
              </div>
            </div>
          </div>
        );
      } else {
        const members = this.props.users.filter(user => user.teamId === team.id);
        return (
          <div
            className="cardContainerWithDetail"
            key={team.id}
            onClick={() => {
              this.props.selectItem(team.id);
            }}
          >
            <div className={"infoWrapper"}>
              <div className={"title"}>
                {team.name}
              </div>
              {this.helper(members)}
              <p className={"overview"}>
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
      <div className={(this.props.activeItem.length > 0) ? "CardsWrapperWithDetails" : "CardsWrapperNoDetails"}>
        {this.renderList()}
      </div>

    );
  }
}
function mapStateToProps(state) {
  return { teams: state.teams, activeItem: state.activeItem, users: state.users };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectItem: selectItem,
    fetchUsers: fetchUsers
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
