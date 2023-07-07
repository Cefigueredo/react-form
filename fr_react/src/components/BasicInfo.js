import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  SKILLS_COMPLETE_INFO,
  SKILLS_LIGHT_INFO,
  SUMMARY_COMPLETE_INFO,
  SUMMAY_LIGHT_INFO,
} from "../Constants";
import { updateBasicInfo } from "../features/BasicInfo/basicInfoSlice";
import "../styles/BasicInfo.css";
import RoleAutocomplete from "./RoleAutocomplete";
import InfoBtn from "./UI/InfoBtn";
//Component
export default function BasicInfo(props) {
  //--- Implementing Redux-toolkit -----

  const name = useSelector((state) => state.basicInfo.name);
  const role = useSelector((state) => state.basicInfo.role);
  const roles = [
    "Software Engineer",
    "Analytics Engineer",
    "Data Engineer",
    "Data Analyst",
    "MLOps",
    "Machine Learning Engineer",
    "Data Scientist",
  ];
  const email = useSelector((state) => state.basicInfo.email);
  const summary = useSelector((state) => state.basicInfo.summary);
  const skills = useSelector((state) => state.basicInfo.skills);
  const dispatch = useDispatch();
  let basicInfo = {
    name: name,
    role: role,
    email: email,
    summary: summary,
    skills: skills,
  };

  //-------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        basicInfo.name = value;
        break;
      case "role":
        basicInfo.role = value;
        break;
      case "email":
        basicInfo.email = value;
        break;
      case "summary":
        basicInfo.summary = value;
        break;
      case "skills":
        basicInfo.skills = value;
        break;
    }
    dispatch(updateBasicInfo(basicInfo));
  };
  return (
    <div className="basicInfo">
      <Row className="mb-3">
        <Form.Group
          as={Row}
          className="col-12 col-md-4 mb-2"
          controlId="textName"
        >
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              required
              type="name"
              name="name"
              value={basicInfo.name}
              placeholder="Enter your full name"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="col-12 col-md-4 mb-2"
          controlId="textRole"
        >
          <Form.Label column sm={2}>
            Role
          </Form.Label>
          <Col sm={8}>
            <div className="autocomplete">
              <RoleAutocomplete roles={roles} />
            </div>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="col-12 col-md-4 mb-2"
          controlId="textEmail"
        >
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              required
              type="email"
              name="email"
              value={basicInfo.email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
      </Row>
      <Form.Group
        required
        as={Row}
        className="col-12 mb-3"
        controlId="textSummary"
      >
        <Form.Label column sm={2}>
          Summary
          <InfoBtn
            titleInfo="Summary"
            bodyInfo={
              <div dangerouslySetInnerHTML={{ __html: SUMMAY_LIGHT_INFO }} />
            }
            completeInfo={
              <div
                dangerouslySetInnerHTML={{ __html: SUMMARY_COMPLETE_INFO }}
              />
            }
          />
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            required
            type="summary"
            name="summary"
            value={basicInfo.summary}
            placeholder="Enter your resume summary"
            as="textarea"
            onChange={handleChange}
            rows={3}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="col-12 mb-3" controlId="textSkills">
        <Form.Label column sm={2}>
          Skills
          <InfoBtn
            titleInfo="Skills"
            bodyInfo={
              <div dangerouslySetInnerHTML={{ __html: SKILLS_LIGHT_INFO }} />
            }
            completeInfo={
              <div dangerouslySetInnerHTML={{ __html: SKILLS_COMPLETE_INFO }} />
            }
          />
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            required
            type="skills"
            name="skills"
            value={basicInfo.skills}
            placeholder="Enter your skills"
            as="textarea"
            onChange={handleChange}
            rows={3}
          />
        </Col>
      </Form.Group>
    </div>
  );
}
