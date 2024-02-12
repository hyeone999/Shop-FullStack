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

// 보편적으로는 로그인 시 refreshToken을 발급 받아 accessToken이 만료될 경우 재발급 받는 경우를 선택하지만
// 일단 해당 프로젝트에서는 Auth 확인하는 API를 통해 토큰 만료시 강제 로그아웃 처리

// 토큰 만료시 처리하기
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.data === "jwt expired") {
      window.location.reload();
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
