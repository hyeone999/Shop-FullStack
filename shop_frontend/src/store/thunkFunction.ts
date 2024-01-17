import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";
import { AxiosError } from "axios";
import { AuthProps } from "../utils/types";

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
