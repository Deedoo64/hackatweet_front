import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const tweetSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    addTweet: (state, action) => {
      state.value.push(action.payload);
      console.log("In reducer : add tweet ", action.payload);
    },
  },
});

export const { addTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
