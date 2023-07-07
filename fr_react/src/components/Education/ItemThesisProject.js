import React from "react";
import { Row, Col, InputGroup, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteThesisProjectEducation,
  updateThesisProjectEducation,
} from "../../features/Education/educationSlice";
import DropdownList from "../UI/DropdownList";
//Component
export default function ItemThesisProject(props) {
  const dispatch = useDispatch();
  const project_description = useSelector(
    (state) =>
      state.education[props.educationIndex].education_projects[props.index]
        .project_description
  );
  const project_title = useSelector(
    (state) =>
      state.education[props.educationIndex].education_projects[props.index]
        .project_title
  );
  const project_type = useSelector(
    (state) =>
      state.education[props.educationIndex].education_projects[props.index]
        .project_type
  );

  let thesisProject = {
    project_description: project_description,
    project_title: project_title,
    project_type: project_type,
  };
  let textType = project_type;

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "project_description":
        thesisProject.project_description = value;
        break;
      case "project_title":
        thesisProject.project_title = value;
        break;
      default:
        break;
    }
    dispatch(
      updateThesisProjectEducation({
        thesisProject,
        thesisProjectIndex: props.index,
        educationIndex: props.educationIndex,
      })
    );
  };

  const handleClickItem = (content, id) => {
    thesisProject.project_type = content;
    dispatch(
      updateThesisProjectEducation({
        thesisProject,
        thesisProjectIndex: props.index,
        educationIndex: props.educationIndex,
      })
    );
  };

  const deleteThesisProject = (e) => {
    e.preventDefault();
    dispatch(
      deleteThesisProjectEducation({
        thesisProjectIndex: props.index,
        educationIndex: props.educationIndex,
      })
    );
  };
  return (
    <>
      <Row className="mb-1">
        <InputGroup className="mb">
          <DropdownList
            defaultText={textType ? textType : "Type"}
            items={["Thesis", "Project"]}
            handleClickItem={handleClickItem}
            index="Type"
          />
          <Form.Control
            required
            aria-label="degree"
            name="project_title"
            value={thesisProject.project_title}
            onChange={handleChange}
            placeholder="Title"
          />
          <Button variant="secondary" onClick={deleteThesisProject}>
            X
          </Button>
        </InputGroup>
      </Row>
      <Row>
        <Col sm={12}>
          <Form.Control
            className="mb-1"
            required
            type="summary"
            name="project_description"
            value={thesisProject.project_description}
            onChange={handleChange}
            placeholder="Description"
            as="textarea"
            rows={3}
          />
        </Col>
      </Row>
    </>
  );
}
