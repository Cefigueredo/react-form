import React, { useState } from "react";
import { Form, Col, Button, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCertification,
  updateCertification,
} from "../../features/Certifications/certificationSlice";
//Component
export default function ItemCertification(props) {
  const dispatch = useDispatch();
  const certification_institution = useSelector(
    (state) => state.certification[props.index].certification_institution
  );
  const certification_title = useSelector(
    (state) => state.certification[props.index].certification_title
  );

  let description = {
    certification_institution: certification_institution,
    certification_title: certification_title,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "certification_institution":
        description.certification_institution = value;
        break;
      case "certification_title":
        description.certification_title = value;
        break;
    }

    dispatch(updateCertification({ ...description, index: props.index }));
  };

  const deleteCert = () => {
    dispatch(deleteCertification({ index: props.index }));
  };
  return (
    <>
      <InputGroup className="mb-2">
        <Form.Control
          required
          type="title"
          name="certification_title"
          value={description.certification_title}
          onChange={handleChange}
          placeholder="Title"
        />

        <Form.Control
          required
          type="institution"
          name="certification_institution"
          value={description.certification_institution}
          onChange={handleChange}
          placeholder="Institution"
        />

        <Button variant="secondary" onClick={deleteCert}>
          X
        </Button>
      </InputGroup>
    </>
  );
}
