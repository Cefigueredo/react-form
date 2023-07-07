import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addThesisProjectEducation } from "../../features/Education/educationSlice";
//Component
export default function AddThesisProject(props) {
  const dispatch = useDispatch();
  function add(e) {
    dispatch(addThesisProjectEducation({ index: props.educationIndex }));
  }

  return (
    <div className="addThesisProjectBtn">
      <Button variant="primary" onClick={add}>
        Add ThesisProject
      </Button>
    </div>
  );
}
