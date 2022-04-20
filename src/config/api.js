import axios from "axios";
import Notify from "../components/Atom/Notify";

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
          Notify.succes(response.data.message);
          resolve(true);
        })
        .catch((err) => {
          console.log(err.response.data.message);
          Notify.error(err.response.data.message);
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
  // get my list

  createMyList: (data, userId, page) => {
    return new Promise((resolve, reject) => {
      url
        .post(`create_mylist`, {
          moviesId: data.moviesId,
          image: data.image,
          userId: userId,
          title: data.title,
          // genre: data.genre,
          overview: data.overview,
          date: data.date,
          rating: 3,
          isMyList: true,
        })
        .then(() => {
          url.get(`/get_one_mylist?moviesId=${data.moviesId}`).then((ress) => {
            console.log(ress.data);
            resolve(ress.data);
          });
        })
        .catch((err) => {
          console.log(err.message);
          reject(false);
        });
    });
  },
  deleteMyList: (page, listId) => {
    return new Promise((resolve, reject) => {
      url
        .delete(`delete_mylist/${listId}`)
        .then(() => {
          url.get(`/get_all?page=${page}&size=5`).then((ress) => {
            console.log(ress.data);
            resolve(ress.data);
          });
        })
        .catch((err) => {
          console.log(err.message);
          reject(false);
        });
    });
  },
  getAllMyList: (page) => {
    return new Promise((resolve, reject) => {
      url
        .get(`/get_all?page=${page || 0}&size=5`)
        .then((ress) => {
          console.log(ress.data);
          resolve(ress.data);
        })
        .catch((err) => {
          console.log(err.message);
          reject(false);
        });
    });
  },
  getOneMyList: (id) => {
    return new Promise((resolve, reject) => {
      url
        .get(`/get_one_mylist?moviesId=${id}`)
        .then((ress) => {
          resolve(ress.data);
        })
        .catch((err) => {
          console.log(err.message);
          reject(false);
        });
    });
  },

  // get comment

  createComment: (data, idMovies, title, text) => {
    return new Promise((resolve, reject) => {
      url
        .post(`create_comment`, {
          image: data.image,
          nama: data.fullName,
          filmId: idMovies,
          title: title,
          text_comment: text,
          rating: 3,
        })
        .then((response) => {
          url.get(`getAllComment`).then((ress) => {
            console.log(ress.data);
            resolve(ress.data);
          });
        })
        .catch((err) => {
          console.log(err.message);
          reject(false);
        });
    });
  },

  getAllComment: () => {
    return new Promise((resolve, reject) => {
      url
        .get(`getAllComment`)
        .then((ress) => {
          // console.log(ress.data);
          resolve(ress.data);
        })
        .catch((err) => {
          console.log(err.response.data.message);
          reject(false);
        });
    });
  },

  // get movies
  getMovies: (genreId, page) => {
    return new Promise((resolve, reject) => {
      url
        .get(`get_movies/${genreId}/${page}`)
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
  getTop: () => {
    return new Promise((resolve, reject) => {
      url
        .get(`get_top`)
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
  getOneTv: (id) => {
    return new Promise((resolve, reject) => {
      url
        .get(`get_one_tv/${id}`)
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
  getTrailer: (id) => {
    return new Promise((resolve, reject) => {
      url
        .get(`get_trailer/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          console.log(err.message);
          reject(false);
        });
    });
  },
  getSearch: (query) => {
    return new Promise((resolve, reject) => {
      url
        .get(`get_search/${query}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          console.log(err.message);
          reject(false);
        });
    });
  },
  getTvSeries: (page) => {
    return new Promise((resolve, reject) => {
      url
        .get(`get_tvSeries/${page}`)
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
