import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBulletExperience,
  updateBulletExperience,
} from "../../features/Experience/experienceSlice";
//Component
export default function ItemBullet(props) {
  const dispatch = useDispatch();
  const bullet = useSelector(
    (state) => state.experience[props.experienceIndex].bullets[props.index]
  );

  let thisBullet = bullet
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateBulletExperience({
        bullet: value,
        bulletIndex: bullet.index,
        experienceIndex: props.experienceIndex,
      })
    );
  };

  function deleteBullet(e) {
    e.preventDefault();
    dispatch(
      deleteBulletExperience({
        bulletIndex: bullet.index,
        experienceIndex: props.experienceIndex,
      })
    );
  }
  return (
    <>
      <InputGroup className="mb-1">
        <Form.Control
          required
          type="bullet"
          name="bullet"
          value={thisBullet ? thisBullet.text : undefined}
          placeholder="Enter something relevant that you worked on during this experience"
          as="textarea"
          rows={3}
          onChange={handleChange}
        />
        <Button variant="secondary" type="submit" onClick={deleteBullet}>
          X
        </Button>
      </InputGroup>
    </>
  );
}
