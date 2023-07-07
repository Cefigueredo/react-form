import React from "react";
import { useSelector } from "react-redux";
import ItemCourse from "./ItemCourse";
//Component
export default function ListCourses(props) {
  const courses = useSelector((state) => state.course);
  return (
    <>
      {courses
        ? courses.map((cert, index) => <ItemCourse key={index} index={index} />)
        : null}
    </>
  );
}
