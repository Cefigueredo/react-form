import React, { useState } from "react";
import { Row, Form, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import AddThesisProject from "./AddThesisProject";
import ItemThesisProject from "./ItemThesisProject";
//Component
export default function ListThesisProjects(props) {
  const thesisProjects = useSelector(
    (state) => state.education[props.educationIndex].education_projects
  );
  return (
    <>
      <Form.Group as={Row} className="col-12" controlId={"ThesisProject-List"}>
        <Form.Label className="text-center" column sm={2}>
          Thesis/Projects
        </Form.Label>
        <Col sm={10}>
          {thesisProjects
            ? thesisProjects.map((thesisProject, index) => (
                <ItemThesisProject
                  key={index}
                  index={index}
                  educationIndex={props.educationIndex}
                />
              ))
            : null}
        </Col>
      </Form.Group>
      <AddThesisProject educationIndex={props.educationIndex} />
    </>
  );
}
