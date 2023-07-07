import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { SERVER, PUT_SAVE_DOC } from "../../api/server";
import useInfoRedux from "../../hooks/useInfoRedux";
//Component
export default function SaveBtn(props) {
  const { allInfo } = useInfoRedux();
  const [data, setData] = useState([]);
  const isFirstRender = useRef(true);

  // Send query to Save endpoint in the API
  function handleSave(e) {
    e.preventDefault();
    //Print
    if (allInfo.name === "" || allInfo.role === "" || allInfo.email === "") {
      NotificationManager.warning(
        "Please fill at least name, role and email",
        "Error",
        2000
      );
    } else {
      // Send it to the API
      fetch(
        SERVER +
          PUT_SAVE_DOC +
          "?resume_key=" +
          allInfo.name +
          "-" +
          allInfo.email,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(allInfo),
        }
      )
        .then((response) => response.json())
        .then((d) => {
          NotificationManager.success("Form Saved", "Save status", 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 👈️ return early if initial render
    }
    // Add the data to local when is already in state
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <Button
        id="save-btn"
        data-testid="test-save-btn"
        className="btnApp"
        type="save"
        onClick={handleSave}
      >
        Save
      </Button>
      <NotificationContainer />
    </>
  );
}
