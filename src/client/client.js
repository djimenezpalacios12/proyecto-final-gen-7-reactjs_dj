import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";

const client = axios.create({
  baseURL,
});

client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.message === "Network Error") error.message = "Error de conexión";
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    return Promise.reject({
      message: error.response.statusText,
      ...error.response.data,
    });
  }
);

export default client;
