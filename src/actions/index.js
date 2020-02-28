import axios from 'axios'
const URL_Teams = 'https://tempo-exercises.herokuapp.com/rest/v1/teams';
const URL_Users = 'https://tempo-exercises.herokuapp.com/rest/v1/users';
const URL_User_Details = 'https://tempo-exercises.herokuapp.com/rest/v1/users/ ';
export const FETCH_TEAMS = "FETCH_TEAMS";
export const ITEM_SELECTED = "ITEM_SELECTED";
export const FETCH_USERS = "FETCH_USERS";
export function fetchTeams() {
  const request1 = axios.get(URL_Teams);
  return (dispatch) => {
    let mainTeamPromise = new Promise((resolve, reject) => {
      request1.then(({ data }) => {
        let count = 0;
        data.map(element => {
          if (element.teamLead) {
            const URL_TEAMLEAD_NAME = `https://tempo-exercises.herokuapp.com/rest/v1/users/${element.teamLead}/`;
            const request2 = axios.get(URL_TEAMLEAD_NAME);
            request2.then((data2) => {
              count++;
              element.teamLeadName = data2.data.name;
              if (count === data.length) {
                resolve(data)
              }
            });
          } else {
            count++;
            element.teamLeadName = { first: "The position is not", last: "filled yet." };

          }
        });
      })

    });

    mainTeamPromise.then((data) => {
      dispatch({
        type: FETCH_TEAMS,
        payload: data
      })
    });
  }
};
export function fetchUsers() {
  const request1 = axios.get(URL_Users);
  return (dispatch) => {
    let mainUserPromise = new Promise((resolve, reject) => {
      request1.then(({ data }) => {
        let count = 0;
        data.map(user => {
          if (user.userId) {
            const URL_USER_NAME = `https://tempo-exercises.herokuapp.com/rest/v1/users/${user.userId}/`;
            const request2 = axios.get(URL_USER_NAME);
            request2.then((data2) => {
              count++;
              user.name = data2.data.name;
              if (count === data.length) {
                resolve(data)
              }
            });
          } else {
            count++;
            user.name = { first: "This user", last: "has no name." };

          }
        });
      })

    });

    mainUserPromise.then((data) => {
      dispatch({
        type: FETCH_USERS,
        payload: data
      })
    });
  }
};
export function selectItem(item) {
  return {
    type: ITEM_SELECTED,
    payload: item
  };
}


