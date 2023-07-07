import { useSelector } from "react-redux";

export default function useInfoRedux() {
  const basicInfo = useSelector((state) => state.basicInfo);
  const experienceInfo = useSelector((state) => state.experience);
  const certificationInfo = useSelector((state) => state.certification);
  const courseInfo = useSelector((state) => state.course);
  const educationInfo = useSelector((state) => state.education);
  const projectInfo = useSelector((state) => state.project);
  const publicationInfo = useSelector((state) => state.publication);

  let newBullets = experienceInfo.map((obj) => {
    if (obj.bullets !== undefined) {
      return obj.bullets.map((bullet) => {
        return bullet.text;
      });
    }
  });

  let newExperiences = experienceInfo.map((obj, index) => {
    var temp = Object.assign({}, obj);
    temp.bullets = newBullets[index];
    return temp;
  });

  const allInfo = {
    ...basicInfo,
    experience: newExperiences,
    certifications: certificationInfo,
    courses: courseInfo,
    education: educationInfo,
    personal_projects: projectInfo,
    publications: publicationInfo,
  };
  return {
    basicInfo,
    experienceInfo,
    certificationInfo,
    courseInfo,
    educationInfo,
    projectInfo,
    publicationInfo,
    allInfo,
  };
}
