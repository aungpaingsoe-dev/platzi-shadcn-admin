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

const { saveData, removeData } = useCookieStorage();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUserInfo: (state: InitialStateType, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      saveData("token", token);
      saveData("user", user);
    },
    removeUserInfo: (state : InitialStateType) => {
      state.user = null,
      state.token = "",
      removeData("user");
      removeData("token");
    }
  },
});

export const token = (state: InitialStateType) => state.token;
export const { saveUserInfo, removeUserInfo } = authSlice.actions;
export default authSlice.reducer;
