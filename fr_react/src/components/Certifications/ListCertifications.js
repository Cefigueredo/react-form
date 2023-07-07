import React from "react";
import { useSelector } from "react-redux";
import ItemCertification from "./ItemCertification";
//Component
export default function ListCertifications(props) {
  const certifications = useSelector((state) => state.certification);
  return (
    <>
      {certifications
        ? certifications.map((cert, index) => (
            <ItemCertification key={index} index={index} />
          ))
        : null}
    </>
  );
}
