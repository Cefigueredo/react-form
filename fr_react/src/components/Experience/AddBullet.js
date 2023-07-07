import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addBulletExperience } from "../../features/Experience/experienceSlice";
//Component
export default function AddBullet(props) {
  const dispatch = useDispatch();
  function add() {
    dispatch(addBulletExperience({ experienceIndex: props.experienceIndex }));
  }

  return (
    <div className="addBulletBtn">
      <Button variant="primary" onClick={add}>
        Add Bullet
      </Button>
    </div>
  );
}
