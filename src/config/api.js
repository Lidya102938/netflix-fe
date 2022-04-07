import axios from "axios";

const url = axios.create({
  baseURL: "http://localhost:3001/",
});

export default {
  signUp: (data) => {
    return new Promise((resolve, reject) => {
      url
        .post(`sign_up`, {
          fullName: data.fullName,
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
          localStorage.setItem("token", response.data.token);
          resolve(true);
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
  updateUser: (data, id) => {
    return new Promise((resolve, reject) => {
      url
        .put(`update_user/${id}`, {
          fullName: data.fullName,
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          console.log(response.data);
          resolve(true);
        })
        .catch((err) => {
          console.log(err.message);
          reject(false);
        });
    });
  },

  updateAvatar: (data, id) => {
    return new Promise((resolve, reject) => {
      const formdata = new FormData();
      formdata.append("image", data);
      url
        .put(`upload_avatar/${id}`, formdata, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((ress) => {
          console.log(ress.data);
          resolve(true);
        })
        .catch((err) => {
          console.log(err.response.data.message);
          reject(false);
        });
    });
  },
  // get movies
  getMovies: (id) => {
    return new Promise((resolve, reject) => {
      url
        .get(`get_movies/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          console.log(err.message);
          reject(false);
        });
    });
  },
  getGenre: () => {
    return new Promise((resolve, reject) => {
      url
        .get(`get_genre`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          console.log(err.message);
          reject(false);
        });
    });
  },
  getPopular: () => {
    return new Promise((resolve, reject) => {
      url
        .get(`get_popular`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          console.log(err.message);
          reject(false);
        });
    });
  },
  getDetail: (id) => {
    return new Promise((resolve, reject) => {
      url
        .get(`get_detail/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          console.log(err.message);
          reject(false);
        });
    });
  },
  getCasting: (id) => {
    return new Promise((resolve, reject) => {
      url
        .get(`get_casting/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          console.log(err.message);
          reject(false);
        });
    });
  },
};
