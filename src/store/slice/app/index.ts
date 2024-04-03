import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  isSideBarOpen: boolean;
  breadCrumbs: Object[];
};

const initialState: InitialStateType = {
  isSideBarOpen: true,
  breadCrumbs: [],
};

export const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSideBarOpen: (state: InitialStateType) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    setBreadCrumb: (state: InitialStateType, action) => {
      state.breadCrumbs = action.payload;
    },
  },
});

export const { toggleSideBarOpen, setBreadCrumb } = app.actions;
export default app.reducer;
