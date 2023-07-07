import React, { useState } from "react";
import {
  Row,
  Col,
  FloatingLabel,
  InputGroup,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import { ReactComponent as RemoveIcon } from "../../assets/trash.svg";
import DropdownList from "../UI/DropdownList";
import ListThesisProjects from "./ListThesisProjects";
import "../../Constants";
import { DEGREE_STATUS, DEGREE_TYPES } from "../../Constants";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEducation,
  updateEducation,
} from "../../features/Education/educationSlice";
//Component
export default function ItemEducation(props) {
  const dispatch = useDispatch();
  const institution = useSelector(
    (state) => state.education[props.index].institution
  );
  const degree_type = useSelector(
    (state) => state.education[props.index].degree_type
  );
  const degree_name = useSelector(
    (state) => state.education[props.index].degree_name
  );
  const education_status = useSelector(
    (state) => state.education[props.index].education_status
  );
  const degree_year = useSelector(
    (state) => state.education[props.index].degree_year
  );
  const education_projects = useSelector(
    (state) => state.education[props.index].education_projects
  );

  let education = {
    institution: institution,
    degree_type: degree_type,
    degree_name: degree_name,
    education_status: education_status,
    degree_year: degree_year,
    education_projects: education_projects,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "institution":
        education.institution = value;
        break;
      case "degree_type":
        education.degree_type = value;
        break;
      case "degree_name":
        education.degree_name = value;
        break;
      case "education_status":
        education.education_status = value;
        break;
      case "degree_year":
        education.degree_year = value;
        break;
      default:
        break;
    }
    dispatch(updateEducation({ ...education, index: props.index }));
  };
  // Shows the open file pop over
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  // It handles what happens when shows the pop over
  const handleShow = () => {
    setShow(true);
  };

  const handleClickItem = (content, id) => {
    if (id === "degree_type") {
      education.degree_type = content;
    } else {
      education.education_status = content;
    }
    dispatch(updateEducation({ ...education, index: props.index }));
  };

  function deleteThisEducation(e) {
    handleClose();
    e.preventDefault();
    dispatch(deleteEducation({ index: props.index }));
  }
  return (
    <div className="education">
      <Row>
        <Col className="col-12 col-md-3">
          <FloatingLabel
            controlId="floatingInputInstitution"
            label="Institution"
            className="mb-3 col-12"
          >
            <Form.Control
              required
              type="institution"
              name="institution"
              value={education.institution}
              onChange={handleChange}
              placeholder="Institution"
            />
          </FloatingLabel>
        </Col>
        <Col className="col-12 col-md-4">
          <InputGroup className="mb-3">
            <InputGroup.Text>Degree</InputGroup.Text>
            <DropdownList
              defaultText={degree_type ? degree_type : "Select"}
              items={DEGREE_TYPES}
              handleClickItem={handleClickItem}
              index="degree_type"
            />
            <Form.Control
              required
              aria-label="degree"
              name="degree_name"
              value={education.degree_name}
              onChange={handleChange}
              placeholder="Name"
            />
          </InputGroup>
        </Col>
        <Col className="col-12 col-md-5">
          <InputGroup className="mb-3">
            <InputGroup.Text>Status</InputGroup.Text>
            <DropdownList
              defaultText={education_status ? education_status : "Select"}
              items={DEGREE_STATUS}
              handleClickItem={handleClickItem}
              index="status"
            />
            <InputGroup.Text>Year</InputGroup.Text>
            <Form.Control
              required
              className="col-3"
              aria-label="year"
              name="degree_year"
              type="number"
              value={education.degree_year}
              onChange={handleChange}
              placeholder="Year"
            />
          </InputGroup>
        </Col>
      </Row>
      <ListThesisProjects educationIndex={props.index} />
      <div className="deleteBtn">
        <Button variant="outline-secondary" onClick={handleShow}>
          <RemoveIcon />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Delete education?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
            {/* TODO Make Open functional */}
            <Button variant="primary" onClick={deleteThisEducation}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
