import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addExperience } from "../../features/Experience/experienceSlice";
//Component
export default function AddExperience(props) {
  let dataExperience = {
    company: "",
    title: "",
    start_month: 0,
    start_year: 0,
    end_month: 0,
    end_year: 0,
    bullets: [""],
  };

  const dispatch = useDispatch();
  function add() {
    dispatch(addExperience(dataExperience));
  }

  return (
    <div className="addExperienceBtn">
      <Button variant="primary" data-testid="addExp" onClick={add}>
        Add Experience
      </Button>
    </div>
  );
}
