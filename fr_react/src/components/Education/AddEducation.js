import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addEducation } from "../../features/Education/educationSlice";
//Component
export default function AddEducation(props) {
  const dispatch = useDispatch();
  function add(e) {
    dispatch(addEducation());
  }

  return (
    <div className="addEducationBtn">
      <Button variant="primary" onClick={add}>
        Add Education
      </Button>
    </div>
  );
}
