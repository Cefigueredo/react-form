import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPublication } from "../../features/PersonalProjectsAndPublications/publicationSlice";
//Component
export default function AddProject(props) {
  const dispatch = useDispatch();
  const add = (e) => {
    dispatch(addPublication());
  };
  return (
    <div className="addPublicationBtn">
      <Button variant="primary" onClick={add}>
        Add publication
      </Button>
    </div>
  );
}
