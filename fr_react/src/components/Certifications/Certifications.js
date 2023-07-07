import React, { useState } from "react";
import "../../styles/Certifications.css";
import AddCertification from "./AddCertification";
import AddCourse from "./AddCourse";
import ListCertifications from "./ListCertifications";
import ListCourses from "./ListCourses";
import { Row, Form, Col } from "react-bootstrap";
//Component
export default function Certifications(props) {
  return (
    <div className="certifications">
      <Form.Group
        as={Row}
        className="col-12"
        controlId={"Cert-" + props.certifications}
      >
        <Form.Label className="text-center" column sm={2}>
          Certifications
        </Form.Label>
        <Col sm={10}>
          <ListCertifications />
        </Col>
      </Form.Group>
      <AddCertification />
      <Form.Group
        as={Row}
        className="col-12"
        controlId={"Course-" + props.courses}
      >
        <Form.Label className="text-center" column sm={2}>
          Courses
        </Form.Label>
        <Col sm={10}>
          <ListCourses />
        </Col>
      </Form.Group>
      <AddCourse />
    </div>
  );
}
