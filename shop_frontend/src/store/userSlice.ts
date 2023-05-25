import { createSlice } from "@reduxjs/toolkit";
import { StateProps } from "../utils/types";

const initialState: StateProps = {
  userData: {
    id: "",
    email: "",
    name: "",
    role: 0,
    image: "",
  },
  isAuth: false,
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export default userSlice.reducer;
