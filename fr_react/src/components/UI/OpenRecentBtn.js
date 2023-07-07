import React, { useState } from "react";
import { Button, Modal, Dropdown, DropdownButton } from "react-bootstrap";
import { SERVER, GET_DOC, GET_LIST_DOCS } from "../../api/server";
import useFetch from "../../hooks/useFetch";
import { useLoadDataRed } from "../../hooks/useLoadDataRedux";
import InfoBtn from "./InfoBtn";
//Component
export default function OpenRecentBtn(props) {
  const [dataList, setDataList] = useState([]);
  const [selected, setSelected] = useState("Name");
  // Shows the open file pop over
  const [show, setShow] = useState(false);

  // It handles the click in close button of the pop over
  const handleClose = () => setShow(false);
  const { loadRedux } = useLoadDataRed();

  // Custom hook to fetch data
  const { fetchData } = useFetch();
  // It handles what happens when shows the pop over
  const handleShow = async () => {
    setShow(true);
    const link = SERVER + GET_LIST_DOCS;
    const method = "GET";
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    Promise.any([fetchData(link, method, headers)])
      .then((r) => setDataList(r.resume_keys))
      .catch((err) => console.log(err));
  };

  // It handles the item that was clicked in the dropdown list
  const handleClick = (e) => {
    setSelected(e.target.innerHTML);
  };

  // It handles the click in the Open button
  const handleSubmit = () => {
    handleClose();
    const link = SERVER + GET_DOC + "?resume_key=" + selected;
    const method = "GET";
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    Promise.any([fetchData(link, method, headers)])
      .then((r) => loadRedux(r.resume))
      .catch((err) => console.log(err));
  };

  /** Render */
  return (
    <>
      <Button className="btnApp" type="submit" onClick={handleShow}>
        Open recent
      </Button>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Open recent forms</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DropdownButton
            variant="outline-secondary"
            title={selected}
            id="input-group-dropdown-1"
          >
            {dataList
              ? dataList.map((e, i) => (
                  <Dropdown.Item key={i} href="#" onClick={handleClick}>
                    {e}
                  </Dropdown.Item>
                ))
              : null}
          </DropdownButton>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* TODO Make Open functional */}
          <Button variant="primary" onClick={handleSubmit}>
            Open
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
