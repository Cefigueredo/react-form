import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    certification_title: "",
    certification_institution: "",
  },
];

export const certificationSlice = createSlice({
  name: "certification",
  initialState,
  reducers: {
    updateCertification: (state, action) => {
      const { certification_title, certification_institution } = action.payload;

      const found_certification = state.find(
        (state, i) => i === action.payload.index
      );
      if (found_certification) {
        found_certification.certification_title = certification_title;
        found_certification.certification_institution =
          certification_institution;
      }
    },
    addCertification: (state, action) => {
      state.push(initialState[0]);
    },
    deleteCertification: (state, action) => {
      const found_certification = state.find(
        (state, i) => i === action.payload.index
      );
      if (found_certification) {
        state.splice(state.indexOf(found_certification), 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCertification, addCertification, deleteCertification } =
  certificationSlice.actions;

//Component
export default certificationSlice.reducer;
