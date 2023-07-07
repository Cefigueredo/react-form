import React, { useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { POST_DOC_TO_FORM_URL, SERVER } from "../../api/server";
import useFetch from "../../hooks/useFetch";
import { useLoadDataRed } from "../../hooks/useLoadDataRedux";
//Component
export default function OpenFile(props) {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  //It handles the show of the popover when the Open File btn is clicked
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { loadRedux } = useLoadDataRed();
  const { fetchData } = useFetch();
  // It handles the submition sending the file in Basee64 to the entrypoint
  const handleSubmit = (event) => {
    // Close the popover
    event.preventDefault();
    handleClose();
    setIsLoading(true);
    // It loads the data, converts it to base64 and puts it in a dict
    let file64 = "";
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      file64 = reader.result;
      let pureBase64 = file64.split(",")[1];
      let file_object = { file_object: pureBase64 };

      // It sends the request to the URL
      const link = SERVER + POST_DOC_TO_FORM_URL;
      const method = "POST";
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const body = file_object;
      const request_options = {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
      };
      fetch(link, request_options)
        .then((response) => response.json())
        .then((data) => {
          if (data.detail !== undefined) {
            setIsLoading(false);
            NotificationManager.error(data.detail, "Error!", 2000);
            return;
          }
          data.role = null;
          loadRedux(data);
          setIsLoading(false);
          NotificationManager.success(
            "Success in the execution.",
            "Successful!",
            2000
          );
        })
        .catch((error) => {
          setIsLoading(false);
          console.log("error: " + error);
        });
    };
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Button className="btnApp" type="submit" onClick={handleShow}>
            Upload file
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Upload file</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileUpload}
                />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" type="submit" onClick={handleSubmit}>
                Upload
              </Button>
            </Modal.Footer>
          </Modal>
          <NotificationContainer />
        </>
      )}
    </>
  );
}
