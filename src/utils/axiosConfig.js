import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: "https://tempo-exercises.herokuapp.com/rest/v1/",
});

const axiosConfig = (method, url, callBack) => {
  if (method === 'get') {
    return axiosInstance({ url: url, method: method })
      .then((response) => {
        callBack(response)
      })
  } else if (method === 'post') {
    return axiosInstance({ url: url, method: method })
      .then((response) => {
        callBack(response)
      })
  }
};

export default axiosConfig;
