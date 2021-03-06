import axios from "axios";

const api = axios.create({
  baseURL: "https://cs-ecom-be.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
    "authorization": "Bearer " + localStorage.getItem("accessToken")
  },
});

/**
 * console.log all requests and responses
 */
api.interceptors.request.use(
  (request) => {
    console.log("Starting Request", request);
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  function (error) {
    error = error.response.data;
    console.log("RESPONSE ERROR", error);
    return Promise.reject({ message: error.split("\n")[0] });
  }
);

export default api;
