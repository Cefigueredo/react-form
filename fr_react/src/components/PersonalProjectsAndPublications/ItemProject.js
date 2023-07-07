import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProject,
  updateProject,
} from "../../features/PersonalProjectsAndPublications/projectSlice";
//Component
export default function ItemProject(props) {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project[props.index]);

  let thisProject = project;
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateProject({
        description: value,
        index: props.index,
      })
    );
    thisProject = value;
  };

  function deleteThisProject(e) {
    e.preventDefault();
    dispatch(
      deleteProject({
        index: props.index,
      })
    );
  }
  return (
    <>
      <InputGroup className="mb-1">
        <Form.Control
          required
          type="project"
          name="project"
          value={thisProject}
          onChange={handleChange}
          placeholder="Description"
          as="textarea"
          rows={3}
        />
        <Button variant="secondary" onClick={deleteThisProject}>
          X
        </Button>
      </InputGroup>
    </>
  );
}
