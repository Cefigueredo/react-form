import React, { useState } from "react";
import "../../styles/Personal.css";
import AddProject from "./AddProject";
import AddPublication from "./AddPublication";
import ListProjects from "./ListProjects";
import ListPublications from "./ListPublications";
//Component
export default function Personal(props) {
  return (
    <div className="personal">
      <ListProjects />
      <AddProject />
      <ListPublications />
      <AddPublication />
    </div>
  );
}
