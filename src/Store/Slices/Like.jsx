import { createSlice } from "@reduxjs/toolkit";

export const like = createSlice({
  name: "Likes",
  initialState: [],
  reducers: {
    addLike: (state, action) => {
      state.push(action.payload);
      console.log(state.length);
    },
  },
});

export const { addLike } = like.actions;

export default like.reducer;
