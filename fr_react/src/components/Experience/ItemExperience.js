import dayjs from "dayjs";
import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as RemoveIcon } from "../../assets/trash.svg";
import {
  Row,
  Form,
  Col,
  FloatingLabel,
  Button,
  InputGroup,
  FormGroup,
  FormControl,
  Modal,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MONTHS } from "../../Constants";
import {
  deleteExperience,
  updateExperience,
} from "../../features/Experience/experienceSlice";
import DropdownList from "../UI/DropdownList";
import ListBullets from "./ListBullets";
import AddBullet from "./AddBullet";
//Component
export default function ItemExperience(props) {
  // Selectors ----------------------------------------------
  const company = useSelector((state) => state.experience[props.index].company);
  const title = useSelector((state) => state.experience[props.index].title);
  const start_month = useSelector(
    (state) => state.experience[props.index].start_month
  );
  const start_year = useSelector(
    (state) => state.experience[props.index].start_year
  );
  const end_month = useSelector(
    (state) => state.experience[props.index].end_month
  );
  const end_year = useSelector(
    (state) => state.experience[props.index].end_year
  );
  const bullets = useSelector((state) => state.experience[props.index].bullets);
  const dispatch = useDispatch();
  //--------------------------------------------------------

  // It creates a pointer to every selector and the month
  let dataExperience = {
    company: company,
    title: title,
    start_month: start_month,
    start_year: start_year,
    end_month: end_month,
    end_year: end_year,
    bullets: bullets,
  };

  const maxYear = dayjs().year();
  const minYear = maxYear - 200;
  // Shows the open file pop over
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  // It handles what happens when shows the pop over
  const handleShow = () => {
    setShow(true);
  };

  // It handles the change in every field of the experience section
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "company":
        dataExperience.company = value;
        break;
      case "title":
        dataExperience.title = value;
        break;
      case "start_year":
        dataExperience.start_year = value;
        break;
      case "end_year":
        dataExperience.end_year = value;
        break;
      default:
        break;
    }

    dispatch(updateExperience({ ...dataExperience, index: props.index }));
  };
  // It deletes the respective experience
  const deleteExp = () => {
    handleClose();
    dispatch(deleteExperience({ index: props.index }));
  };

  // TODO Verify that end date is later than start date
  // It handles the dropdown list for the months
  const handleMonth = (month, id) => {
    if (id === "end_month") {
      dataExperience.end_month = month;
    } else if (id === "start_month") {
      dataExperience.start_month = month;
    }
    dispatch(updateExperience({ ...dataExperience, index: props.index }));
  };

  return (
    <div className="experience">
      <Row className="firstRow">
        <FloatingLabel
          controlId="floatingInputCompany"
          label="Company"
          className="mb-3 col-12 col-md-3"
        >
          <Form.Control
            required
            type="company"
            name="company"
            value={dataExperience.company}
            onChange={handleChange}
            placeholder="Company"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInputTitle"
          label="Title"
          className="mb-3 col-12 col-md-3"
        >
          <Form.Control
            required
            type="title"
            name="title"
            value={dataExperience.title}
            onChange={handleChange}
            placeholder="Title"
          />
        </FloatingLabel>

        <Col className="col-12 col-md-3 mb-3">
          <InputGroup className="mb-3">
            <InputGroup.Text>Start</InputGroup.Text>
            <DropdownList
              items={MONTHS.map((e) => e.month)}
              defaultText={start_month ? start_month : "Month"}
              handleClickItem={handleMonth}
              index="start_month"
            />
            <FormGroup>
              <FormControl
                type="number"
                name="start_year"
                value={dataExperience.start_year}
                onChange={handleChange}
                min={minYear}
                max={maxYear}
                required
                placeholder="Year"
              />
            </FormGroup>
          </InputGroup>
        </Col>
        <Col className="col-12 col-md-3">
          <InputGroup className="mb-3">
            <InputGroup.Text>End</InputGroup.Text>
            <DropdownList
              items={MONTHS.map((e) => e.month)}
              defaultText={end_month ? end_month : "Month"}
              handleClickItem={handleMonth}
              index="end_month"
            />
            <FormGroup>
              <FormControl
                type="number"
                name="end_year"
                value={dataExperience.end_year}
                onChange={handleChange}
                min={minYear}
                max={maxYear}
                required
                placeholder="Year"
              />
            </FormGroup>
          </InputGroup>
        </Col>
      </Row>

      <Form.Group as={Row} className="col-12 " controlId={"Exp-" + props.index}>
        <Form.Label className="text-center" column md={1}>
          Bullets
        </Form.Label>
        <Col md={11}>
          <ListBullets experienceIndex={props.index} />
        </Col>
      </Form.Group>
      <AddBullet experienceIndex={props.index} />
      <div className="deleteBtn">
        <Button variant="outline-secondary" onClick={handleShow}>
          <RemoveIcon />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Delete experience?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
            {/* TODO Make Open functional */}
            <Button variant="primary" onClick={deleteExp}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
