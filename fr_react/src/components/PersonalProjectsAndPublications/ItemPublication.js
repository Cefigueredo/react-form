import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePublication,
  updatePublication,
} from "../../features/PersonalProjectsAndPublications/publicationSlice";
//Component
export default function ItemPublication(props) {
  const dispatch = useDispatch();
  const publication = useSelector((state) => state.publication[props.index]);

  let thisPublication = publication;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updatePublication({
        description: value,
        index: props.index,
      })
    );
    thisPublication = value;
  };

  function deleteThisPublication(e) {
    e.preventDefault();
    dispatch(
      deletePublication({
        index: props.index,
      })
    );
  }
  return (
    <>
      <InputGroup className="mb-1">
        <Form.Control
          required
          type="publication"
          name="publication"
          value={thisPublication}
          onChange={handleChange}
          placeholder="Description"
          as="textarea"
          rows={3}
        />
        <Button variant="secondary" onClick={deleteThisPublication}>
          X
        </Button>
      </InputGroup>
    </>
  );
}
