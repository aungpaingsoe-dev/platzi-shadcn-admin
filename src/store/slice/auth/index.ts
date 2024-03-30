import useCookieStorage from "@/hooks/useCookieStorage";
import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  user: Object | null | undefined;
  token: string;
};

const initialState: InitialStateType = {
  user: null,
  token: "",
};

const { saveData } = useCookieStorage();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUserInfo: (state: InitialStateType, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      saveData("token", token);
      saveData("user",user);
    },
  },
});

export const token = (state: InitialStateType) => state.token;
export const { saveUserInfo } = authSlice.actions;
export default authSlice.reducer;
