import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  PUBLICATION_COMPLETE_INFO,
  PUBLICATION_LIGHT_INFO,
} from "../../Constants";
import InfoBtn from "../UI/InfoBtn";
import ItemPublication from "./ItemPublication";

//Component
export default function ListPublications(props) {
  const publications = useSelector((state) => state.publication);

  return (
    <>
      <Form.Group as={Row} className="col-12 mb-1" controlId="textPublication">
        <Form.Label className="text-center" column md={2}>
          Publications{" "}
          <InfoBtn
            titleInfo="Publications"
            bodyInfo={
              <div
                dangerouslySetInnerHTML={{ __html: PUBLICATION_LIGHT_INFO }}
              />
            }
            completeInfo={
              <div
                dangerouslySetInnerHTML={{ __html: PUBLICATION_COMPLETE_INFO }}
              />
            }
          />
        </Form.Label>
        <Col md={10}>
          {publications
            ? publications.map((proj, index) => (
                <ItemPublication key={index} index={index} />
              ))
            : null}
        </Col>
      </Form.Group>
    </>
  );
}
