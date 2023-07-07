import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCertification } from "../../features/Certifications/certificationSlice";
//Component
export default function AddCertification(props) {
  const dispatch = useDispatch();
  function addCert(e) {
    dispatch(addCertification());
  }

  return (
    <div className="addCertificationBtn">
      <Button variant="primary" onClick={addCert}>
        Add Certification
      </Button>
    </div>
  );
}
