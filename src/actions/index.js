import axiosConfig from '../utils/axiosConfig';
import { FETCH_TEAMS, ITEM_SELECTED, FETCH_USERS } from './types';
export function fetchTeams() {
  return (dispatch) => {
    let mainTeamPromise = new Promise((resolve, reject) => {
      axiosConfig('get', 'teams', (response1) => {
        let count = 0;
        const teamLength = response1.data.length;
        response1.data.forEach((element) => {
          if (element.teamLead) {
            axiosConfig('get', `users/${element.teamLead}/`, (response2) => {
              count++;
              element.teamLeadName = response2.data.name;
              if (count === teamLength) {
                resolve(response1.data);
              }
            });
          } else {
            count++;
            element.teamLeadName = {
              first: 'The position is not',
              last: 'filled yet.',
            };
          }
        });
      });
    });
    mainTeamPromise.then((data) => {
      dispatch({
        type: FETCH_TEAMS,
        payload: { teams: data },
      });
    });
  };
}
export function fetchUsers() {
  return (dispatch) => {
    let firstTeamPromise = new Promise((resolve, reject) => {
      axiosConfig('get', 'users', (response1) => {
        let count = 0;
        const userLength = response1.data.length;
        response1.data.forEach((user) => {
          if (user.userId) {
            axiosConfig('get', `users/${user.userId}/`, (response2) => {
              count++;
              user.name = response2.data.name;
              if (count === userLength) {
                resolve(response1.data);
              }
            });
          } else {
            count++;
            user.name = { first: 'The position is not', last: 'filled yet.' };
          }
        });
      });
    });
    firstTeamPromise.then((data) => {
      dispatch({
        type: FETCH_USERS,
        payload: { users: data },
      });
    });
  };
}
export function selectItem(item) {
  return {
    type: ITEM_SELECTED,
    payload: { slecteditem: item },
  };
}
