import { createSlice } from "@reduxjs/toolkit";

export const feeds = createSlice({
  name: "feeds",
  initialState: {
    items: [],
  },
  reducers: {
    getFeeds: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { getFeeds } = feeds.actions;
export default feeds.reducer;
