import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  role: "",
  email: "",
  summary: "",
  skills: "",
};

export const basicInfoSlice = createSlice({
  name: "basicInfo",
  initialState,
  reducers: {
    updateBasicInfo: (state, action) => {
      const { name, role, email, summary, skills } = action.payload;
      state.name = name;
      state.role = role;
      state.email = email;
      state.summary = summary;
      state.skills = skills;
    },
    updateRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateBasicInfo, updateRole } = basicInfoSlice.actions;

//Component
export default basicInfoSlice.reducer;
