import { createSlice } from "@reduxjs/toolkit";

const initialState = [""];

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    updateProject: (state, action) => {
      state[action.payload.index] = action.payload.description;
    },
    addProject: (state, action) => {
      state.push(initialState[0]);
    },
    deleteProject: (state, action) => {
      state.splice(action.payload.index, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateProject, addProject, deleteProject } =
  projectSlice.actions;

//Component
export default projectSlice.reducer;
