import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import "../../styles/Experience.css";
import AddExperience from "./AddExperience";
import ItemExperience from "./ItemExperience";
//Component
export default function Experience() {
  // Applying redux-toolkit
  const experiences = useSelector((state) => state.experience);

  return (
    <>
      {experiences
        ? experiences.map((infoExperience, index) => (
            <ItemExperience key={index} index={index} />
          ))
        : null}
      <AddExperience />
    </>
  );
}
