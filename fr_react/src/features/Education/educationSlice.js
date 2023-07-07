import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = [
  {
    institution: "",
    degree_type: "",
    degree_name: "",
    education_status: "",
    degree_year: dayjs().year(),
    education_projects: [
      {
        project_type: "",
        project_title: "",
        project_description: "",
      },
    ],
  },
];

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    updateEducation: (state, action) => {
      const {
        institution,
        degree_type,
        degree_name,
        education_status,
        degree_year,
        education_projects,
      } = action.payload;

      const found_education = state.find(
        (state, i) => i === action.payload.index
      );
      if (found_education) {
        found_education.institution = institution;
        found_education.degree_type = degree_type;
        found_education.degree_name = degree_name;
        found_education.education_status = education_status;
        found_education.degree_year = +degree_year;
        if (education_projects) {
          found_education.education_projects = education_projects;
        } else {
          found_education.education_projects = [];
        }
      }
    },
    addEducation: (state, action) => {
      state.push(initialState[0]);
    },
    deleteEducation: (state, action) => {
      const found_education = state.find(
        (state, i) => i === action.payload.index
      );
      if (found_education) {
        state.splice(state.indexOf(found_education), 1);
      }
    },
    updateThesisProjectEducation: (state, action) => {
      const found_education = state.find(
        (state, i) => i === action.payload.educationIndex
      );
      if (found_education) {
        found_education.education_projects =
          found_education.education_projects.map((state, i) => {
            if (i === action.payload.thesisProjectIndex) {
              return action.payload.thesisProject;
            } else {
              return state;
            }
          });
      }
    },
    addThesisProjectEducation: (state, action) => {
      const found_education = state.find(
        (state, i) => i === action.payload.index
      );
      if (found_education) {
        found_education.education_projects.push({
          project_type: "",
          project_title: "",
          project_description: "",
        });
      } else {
        console.log(
          "There is no education with index: " + action.payload.index
        );
      }
    },
    deleteThesisProjectEducation: (state, action) => {
      const found_education = state.find(
        (state, i) => i === action.payload.educationIndex
      );
      if (found_education) {
        found_education.education_projects.splice(
          action.payload.thesisProjectIndex,
          1
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateEducation,
  addEducation,
  deleteEducation,
  updateThesisProjectEducation,
  addThesisProjectEducation,
  deleteThesisProjectEducation,
} = educationSlice.actions;

//Component
export default educationSlice.reducer;
