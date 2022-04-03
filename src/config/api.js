import axios from "axios";

const url = axios.create({
  baseURL: "http://localhost:3001/",
});

export default {
  signUp: (data) => {
    return new Promise((resolve, reject) => {
      url
        .post(`sign_up`, {
          fullName: data.fullname,
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          console.log(response);
          resolve(true);
        })
        .catch((err) => {
          console.log(err.message);
          reject(false);
        });
    });
  },
  login: (data) => {
    return new Promise((resolve, reject) => {
      url
        .post(`login`, {
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          console.log(response.data);
          resolve(true);
          localStorage.setItem("token", response.data.token);
        })
        .catch((err) => {
          console.log(err.message);
          reject(false);
        });
    });
  },
  getOneUser: (id) => {
    return new Promise((resolve, reject) => {
      url
        .get(`get_one_user/${id}`)
        .then((response) => {
          // console.log(response.data);
          resolve(response.data);
        })
        .catch((err) => {
          console.log(err.message);
          reject(false);
        });
    });
  },
};
