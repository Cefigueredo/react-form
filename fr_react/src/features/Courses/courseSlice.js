import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    course_title: "",
    course_institution: "",
  },
];

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    updateCourse: (state, action) => {
      const { course_title, course_institution } = action.payload;

      const found_course = state.find((state, i) => i === action.payload.index);
      if (found_course) {
        found_course.course_title = course_title;
        found_course.course_institution = course_institution;
      }
    },
    addCourse: (state, action) => {
      state.push(initialState[0]);
    },
    deleteCourse: (state, action) => {
      const found_course = state.find((state, i) => i === action.payload.index);
      if (found_course) {
        state.splice(state.indexOf(found_course), 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCourse, addCourse, deleteCourse } = courseSlice.actions;

//Component
export default courseSlice.reducer;
