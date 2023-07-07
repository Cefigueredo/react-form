import { configureStore } from "@reduxjs/toolkit";
import basicInfoReducer from "./features/BasicInfo/basicInfoSlice";
import experienceReducer from "./features/Experience/experienceSlice";
import certificationReducer from "./features/Certifications/certificationSlice";
import courseReducer from "./features/Courses/courseSlice";
import projectReducer from "./features/PersonalProjectsAndPublications/projectSlice";
import publicationReducer from "./features/PersonalProjectsAndPublications/publicationSlice";
import educationReducer from "./features/Education/educationSlice";
import bulletGeneratorReducer from "./features/BulletGenerator/BulletGeneratorSlice";

export const store = configureStore({
  reducer: {
    basicInfo: basicInfoReducer,
    experience: experienceReducer,
    certification: certificationReducer,
    course: courseReducer,
    education: educationReducer,
    project: projectReducer,
    publication: publicationReducer,
    bulletGeneratorInfo: bulletGeneratorReducer,
  },
});
