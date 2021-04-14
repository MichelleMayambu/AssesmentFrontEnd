import axios from "axios";

axios.defaults.baseURL = "https://localhost:44353";

const api = {
    get: (url, payload) => {
      // console.log("GET: " + url);
      // eslint-disable-next-line no-console
      // console.log(payload);
      return new Promise(function (resolve, reject) {
        try {
          axios.get(url, payload).then((response) => {
            resolve(response.data);
          });
        } catch (error) {
          reject(error);
          alert(error);
        }
      });
    },
    post: (url, payload) => {
    //   axios.defaults.headers.post = {
    //     Authorization: "Token " + token,
    //   };
      // console.log("POST: " + url);
      // eslint-disable-next-line no-console
      // console.log(payload);
      return new Promise(function (resolve, reject) {
        try {
          axios.post(url, payload).then((response) => {
            resolve(response.data);
          });
        } catch (error) {
          reject(error);
          alert(error);
        }
      });
    },
    put: (url, payload) => {
      axios.defaults.headers.put = {
        Authorization: "Token " + token,
      };
      // console.log("POST: " + url);
      // eslint-disable-next-line no-console
      // console.log(payload);
      return new Promise(function (resolve, reject) {
        try {
          axios.put(url, payload).then((response) => {
            resolve(response.data);
          });
        } catch (error) {
          reject(error);
          alert(error);
        }
      });
    },
    delete: (url, payload) => {
      axios.defaults.headers.delete = {
        Authorization: "Token " + token,
      };
      // console.log("POST: " + url);
      // eslint-disable-next-line no-console
      // console.log(payload);
      return new Promise(function (resolve, reject) {
        try {
          axios.delete(url, payload).then((response) => {
            resolve(response.data);
          });
        } catch (error) {
          reject(error);
          alert(error);
        }
      });
    },
  };

  export default {
    api
  }