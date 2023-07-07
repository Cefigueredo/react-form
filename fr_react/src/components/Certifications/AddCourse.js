import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCourse } from "../../features/Courses/courseSlice";
//Component
export default function AddCourse(props) {
  const dispatch = useDispatch();
  function addCert(e) {
    dispatch(addCourse());
  }

  return (
    <div className="addCourseBtn">
      <Button variant="primary" onClick={addCert}>
        Add Course
      </Button>
    </div>
  );
}
