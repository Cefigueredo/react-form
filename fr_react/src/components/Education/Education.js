import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../styles/Education.css";
import AddEducation from "./AddEducation";
import ItemEducation from "./ItemEducation";
//Component
export default function Education(props) {
  const educations = useSelector((state) => state.education);
  return (
    <>
      {educations
        ? educations.map((education, index) => (
            <ItemEducation key={index} index={index} />
          ))
        : null}
      <AddEducation />
    </>
  );
}
