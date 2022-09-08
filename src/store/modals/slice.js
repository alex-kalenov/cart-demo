import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "modals",
  initialState: {
    opened_modal: "",
  },
  reducers: {
    open(state, action) {
      state.opened_modal = action.payload;
    },
    close(state, action) {
      state.opened_modal = "";
    },
  },
});

export const actions = slice.actions;

export default slice;
