import React, { useState } from "react";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import { IconButton } from "@mui/material";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Modal, Button } from "react-bootstrap";
//Component
export default function InfoBtn(props) {
  const { titleInfo, bodyInfo, completeInfo } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (completeInfo === undefined) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <>
      <OverlayTrigger
        key="right"
        placement="right"
        overlay={<Tooltip id={`tooltip-right`}>{bodyInfo}</Tooltip>}
      >
        <IconButton aria-label="Example" onClick={handleShow} style={props.style? props.style : undefined}>
          <InfoSharpIcon />
        </IconButton>
      </OverlayTrigger>
      <Modal size="lg" className="pop-over" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{titleInfo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{completeInfo}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
