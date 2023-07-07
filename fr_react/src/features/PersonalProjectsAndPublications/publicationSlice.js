import { createSlice } from "@reduxjs/toolkit";

const initialState = [""];

export const publicationSlice = createSlice({
  name: "publication",
  initialState,
  reducers: {
    updatePublication: (state, action) => {
      state[action.payload.index] = action.payload.description;
    },
    addPublication: (state, action) => {
      state.push(initialState[0]);
    },
    deletePublication: (state, action) => {
      state.splice(action.payload.index, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updatePublication, addPublication, deletePublication } =
  publicationSlice.actions;

//Component
export default publicationSlice.reducer;
