import axios from "axios";
const LOGIN_USER_KEY = "WD_FORUM_LOGIN_USER_KEY";

var baseURL;
if (
  process.env.REACT_APP_ENVIRONMENT &&
  process.env.REACT_APP_ENVIRONMENT === "PRODUCTION"
) {
  baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
  baseURL = "http://127.0.0.1:8000";
}

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
api.interceptors.request.use(
  (config) => {
    if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
      config.headers.common["Authorization"] = JSON.parse(
        localStorage.getItem(LOGIN_USER_KEY)
      ).token;
    }

    return config;
  },
  (err) => {
    console.error(err);
  }
);

export default class API {
  getPosts = async (params) => {
    try {
      const response = await api.get("/posts/", { params });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };
  addPost = async (postBody) => {
    const formData = new FormData();

    for (const key in postBody) {
      formData.append(key, postBody[key]);
    }

    try {
      const response = await api.post("/posts/add/", formData);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };
  deletePost = async (id) => {
    try {
      return await api.delete(`/posts/delete/${id}/`);
    } catch (error) {
      throw new Error(error);
    }
  };

  getItems = async (params) => {
    try {
      let url = "/items/";
      if (params) {
        url = url + "?categories=" + params;
      }
      const response = await api.get(url);
      return response.data.results;
    } catch (error) {
      throw new Error(error);
    }
  };
  writeReview = async (item, name, body, like_count) => {
    const formData = new FormData();
    formData.append("item", item);
    formData.append("name", name);
    formData.append("body", body);
    formData.append("like_count", like_count);
    try {
      let url = "/reviews/add";
      const response = await api.post(url, formData);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };
  getReviews = async (id) => {
    try {
      let url = `/reviews/?item_id=${id}`;
      const response = await api.get(url);
      return response.data.results;
    } catch (error) {
      throw new Error(error);
    }
  };
}
