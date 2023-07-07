import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { PROJECT_COMPLETE_INFO, PROJECT_LIGHT_INFO } from "../../Constants";
import InfoBtn from "../UI/InfoBtn";
import ItemProject from "./ItemProject";

//Component
export default function ListProjects(props) {
  const projects = useSelector((state) => state.project);

  return (
    <>
      <Form.Group as={Row} className="col-12 mb-1" controlId="textProject">
        <Form.Label className="text-center" column md={2}>
          Projects{" "}
          <InfoBtn
            titleInfo="Projects"
            bodyInfo={
              <div dangerouslySetInnerHTML={{ __html: PROJECT_LIGHT_INFO }} />
            }
            completeInfo={
              <div
                dangerouslySetInnerHTML={{ __html: PROJECT_COMPLETE_INFO }}
              />
            }
          />
        </Form.Label>
        <Col md={10}>
          {projects
            ? projects.map((proj, index) => (
                <ItemProject key={index} index={index} />
              ))
            : null}
        </Col>
      </Form.Group>
    </>
  );
}
