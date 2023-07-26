import { configureStore } from "@reduxjs/toolkit";
import feedsReducer from "./listFeeds";

export default configureStore({
  reducer: {
    feeds: feedsReducer,
  },
});
