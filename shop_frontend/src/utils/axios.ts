import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? "" : "http://localhost:4000",
});

// 헤더에 토큰 넣어서 API 요청
axiosInstance.interceptors.request.use(
  function (config) {
    config.headers.Authorization =
      "Bearer " + localStorage.getItem("accessToken");

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
