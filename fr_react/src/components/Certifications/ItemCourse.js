import React, { useState } from "react";
import { Form, Col, Button, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, updateCourse } from "../../features/Courses/courseSlice";
//Component
export default function ItemCourse(props) {
  const dispatch = useDispatch();
  const course_institution = useSelector(
    (state) => state.course[props.index].course_institution
  );
  const course_title = useSelector(
    (state) => state.course[props.index].course_title
  );

  let description = {
    course_institution: course_institution,
    course_title: course_title,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "course_institution":
        description.course_institution = value;
        break;
      case "course_title":
        description.course_title = value;
        break;
    }

    dispatch(updateCourse({ ...description, index: props.index }));
  };

  const deleteCert = () => {
    dispatch(deleteCourse({ index: props.index }));
  };
  return (
    <>
      <InputGroup className="mb-2">
        <Form.Control
          required
          type="title"
          name="course_title"
          value={description.course_title}
          onChange={handleChange}
          placeholder="Title"
        />

        <Form.Control
          required
          type="institution"
          name="course_institution"
          value={description.course_institution}
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
