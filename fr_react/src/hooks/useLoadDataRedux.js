import { useDispatch } from "react-redux";
import { updateBasicInfo } from "../features/BasicInfo/basicInfoSlice";
import {
  addCertification,
  deleteCertification,
  updateCertification,
} from "../features/Certifications/certificationSlice";
import {
  addCourse,
  deleteCourse,
  updateCourse,
} from "../features/Courses/courseSlice";
import {
  addEducation,
  deleteEducation,
  updateEducation,
} from "../features/Education/educationSlice";
import {
  addExperience,
  deleteExperience,
  updateExperience,
} from "../features/Experience/experienceSlice";
import {
  addProject,
  deleteProject,
  updateProject,
} from "../features/PersonalProjectsAndPublications/projectSlice";
import {
  addPublication,
  deletePublication,
  updatePublication,
} from "../features/PersonalProjectsAndPublications/publicationSlice";
import useInfoRedux from "./useInfoRedux";

export const useLoadDataRed = () => {
  // Calling redux data to make operations on them
  const {
    experienceInfo,
    certificationInfo,
    courseInfo,
    educationInfo,
    projectInfo,
    publicationInfo,
  } = useInfoRedux();

  const dispatch = useDispatch();

  const loadRedux = (response) => {
    dispatch(updateBasicInfo(response));

    // Cleaning experiences
    let ward = experienceInfo.length;
    while (ward > 0) {
      dispatch(deleteExperience({ index: 0 }));
      ward--;
    }
    // Updating experiences

    let arrExp = response.experience;
    if (arrExp) {
      arrExp.map((obj, i) => {
        dispatch(addExperience());
        dispatch(updateExperience({ ...obj, index: i }));
        return obj;
      });
    }

    // Cleaning certifications
    ward = certificationInfo.length;
    while (ward > 0) {
      dispatch(deleteCertification({ index: 0 }));
      ward--;
    }
    // Updating certifications
    let arrCert = response.certifications;
    if (arrCert) {
      arrCert.map((obj, i) => {
        dispatch(addCertification());
        dispatch(updateCertification({ ...obj, index: i }));
        return obj;
      });
    }

    // Cleaning courses
    ward = courseInfo.length;
    while (ward > 0) {
      dispatch(deleteCourse({ index: 0 }));
      ward--;
    }
    // Updating courses
    let arrCourses = response.courses;
    if (arrCourses) {
      arrCourses.map((obj, i) => {
        dispatch(addCourse());
        dispatch(updateCourse({ ...obj, index: i }));
        return obj;
      });
    }

    // Cleaning education
    ward = educationInfo.length;
    while (ward > 0) {
      dispatch(deleteEducation({ index: 0 }));
      ward--;
    }
    // Updating education
    let arrEducation = response.education;
    if (arrEducation) {
      arrEducation.map((obj, i) => {
        dispatch(addEducation());
        dispatch(updateEducation({ ...obj, index: i }));
        return obj;
      });
    }

    // Cleaning projects
    if (projectInfo) {
      ward = projectInfo.length;
    }
    while (ward > 0) {
      dispatch(deleteProject({ index: 0 }));
      ward--;
    }
    // Updating projects
    let arrProjects = response.personal_projects;
    if (arrProjects) {
      arrProjects.map((obj, i) => {
        dispatch(addProject());
        dispatch(updateProject({ description: obj, index: i }));
        return obj;
      });
    }

    // Cleaning publications
    if (publicationInfo) {
      ward = publicationInfo.length;
    }
    while (ward > 0) {
      dispatch(deletePublication({ index: 0 }));
      ward--;
    }
    // Updating publications
    let arrPublications = response.publications;
    if (arrPublications) {
      arrPublications.map((obj, i) => {
        dispatch(addPublication());
        dispatch(updatePublication({ description: obj, index: i }));
        return obj;
      });
    }
  };

  return {
    loadRedux,
  };
};
