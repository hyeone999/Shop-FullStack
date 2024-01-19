import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";
import { AxiosError } from "axios";
import { AuthProps } from "../utils/types";

// 회원가입 API
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (body: AuthProps, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/users/register", body);

      return response.data; // payload
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log(error);

      return thunkAPI.rejectWithValue(
        axiosError.response?.data || axiosError.message
      );
    }
  }
);

// 로그인 API
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (body: AuthProps, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/users/login", body);

      return response.data; // payload
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log(error);

      return thunkAPI.rejectWithValue(
        axiosError.response?.data || axiosError.message
      );
    }
  }
);

// 인증 API
export const authUser = createAsyncThunk(
  "user/authUser",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/users/auth");

      return response.data; // payload
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log(error);

      return thunkAPI.rejectWithValue(
        axiosError.response?.data || axiosError.message
      );
    }
  }
);
