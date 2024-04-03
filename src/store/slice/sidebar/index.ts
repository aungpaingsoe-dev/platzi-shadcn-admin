import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  isOpen: boolean;
};

const initialState: InitialStateType = {
  isOpen: false,
};

export const sidebar = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggle: (state: InitialStateType) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = sidebar.actions;
export default sidebar.reducer;
