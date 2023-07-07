import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProject } from "../../features/PersonalProjectsAndPublications/projectSlice";
//Component
export default function AddProject(props) {
  const dispatch = useDispatch();
  const add = (e) => {
    dispatch(addProject());
  };
  return (
    <div className="addPersonalBtn">
      <Button variant="primary" onClick={add}>
        Add personal project
      </Button>
    </div>
  );
}
