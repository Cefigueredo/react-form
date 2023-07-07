import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  what: "",
  actionVerb: "",
  whichTechnologies: [],
  forWhom: "",
  tempForWhom: "",
  how: "",
  tempHow: "",
  why: "",
  tempWhy: "",
};

export const bulletGeneratorSlice = createSlice({
  name: "bulletGenerator",
  initialState,
  reducers: {
    updateBulletGenerator: (state, action) => {
      state.what = action.payload.what;
      state.actionVerb = action.payload.actionVerb;
      state.whichTechnologies = action.payload.whichTechnologies;
      state.forWhom = action.payload.forWhom;
      state.how = action.payload.how;
      state.why = action.payload.why;
    },
    updateBGWhat: (state, action) => {
      state.what = action.payload.what;
    },
    updateBGActionVerb: (state, action) => {
      state.actionVerb = action.payload.actionVerb;
    },
    updateBGWhichTechnologies: (state, action) => {
      state.whichTechnologies = action.payload.whichTechnologies;
    },
    updateBGForWhom: (state, action) => {
      state.forWhom = action.payload;
    },
    updateBGTempForWhom: (state, action) => {
      state.tempForWhom = action.payload;
    },
    updateBGHow: (state, action) => {
      state.how = action.payload;
    },
    updateBGTempHow: (state, action) => {
      state.tempHow = action.payload;
    },
    updateBGWhy: (state, action) => {
      state.why = action.payload;
    },
    updateBGTempWhy: (state, action) => {
      state.tempWhy = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateBulletGenerator,
  updateBGWhat,
  updateBGActionVerb,
  updateBGWhichTechnologies,
  updateBGForWhom,
  updateBGTempForWhom,
  updateBGHow,
  updateBGTempHow,
  updateBGWhy,
  updateBGTempWhy,
} = bulletGeneratorSlice.actions;

//Component
export default bulletGeneratorSlice.reducer;
