import { useEffect, useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import Cookies from "universal-cookie";
import { POST_FORM_2_DOC, SERVER } from "../api/server";
import "../Constants.js";
import {
  CERT_LIGHT_INFO,
  EDUCATION_COMPLETE_INFO,
  EDUCATION_LIGHT_INFO,
  EXPERIENCE_COMPLETE_INFO,
  EXPERIENCE_LIGHT_INFO,
} from "../Constants.js";
import useFetch from "../hooks/useFetch";
import useInfoRedux from "../hooks/useInfoRedux";
import "../styles/App.css";
import Auth from "./Auth";
import BasicInfo from "./BasicInfo";
import Certifications from "./Certifications/Certifications";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Navbar from "./Navbar";
import Personal from "./PersonalProjectsAndPublications/Personal";
import InfoBtn from "./UI/InfoBtn";
import OpenFile from "./UI/Openfile";
import OpenRecentBtn from "./UI/OpenRecentBtn";
import SaveBtn from "./UI/SaveBtn";
//Component
export default function MyForm() {
  // Login

  const email = "form@react.ai";
  const password = "react2023";
  const cookies = new Cookies();
  const [logStatus, setLogStatus] = useState(false);

  useEffect(() => {
    if (
      cookies.get("email") === email &&
      cookies.get("password") === password
    ) {
      setLogStatus(true);
    }
  }, [logStatus]);

  const handleLog = () => {
    setLogStatus(true);
  };

  //--------------------------------------------------
  const [loading, setLoading] = useState(false);
  const { allInfo } = useInfoRedux();
  const { fetchData } = useFetch();
  const handleClick = (e) => {
    setLoading(true);
    // Verify role
    let lackOfRole = false;
    if (allInfo.role === null || allInfo.role === "") {
      NotificationManager.error("Please verify the role", "Error", 3000);
      lackOfRole = true;
    }
    let lackOfMonth = false;
    // Verify months
    allInfo.experience.map((obj, ind) => {
      if (
        obj.start_month === undefined ||
        obj.start_month === null ||
        obj.end_month === undefined ||
        obj.end_month === null
      ) {
        let numberExp = ind + 1;
        NotificationManager.error(
          "Please verify the month in the experience number " + numberExp,
          "Error",
          3000
        );
        lackOfMonth = true;
      }
    });

    let lackEducation = false;
    // Verify education
    allInfo.education.map((obj, ind) => {
      if (
        obj.degree_year === null ||
        obj.degree_year === undefined ||
        obj.education_status === null ||
        obj.education_status === undefined
      ) {
        NotificationManager.error("Please verify the education", "Error", 3000);
        lackEducation = true;
      }
    });

    const link = SERVER + POST_FORM_2_DOC;
    const method = "POST";
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const body = allInfo;
    // Send it to the API
    if (!lackOfMonth && !lackEducation && !lackOfRole) {
      Promise.any([fetchData(link, method, headers, body)])
        .then((d) => {
          if (d.detail !== undefined) {
            setLoading(false);
            // Get type of d.detail
            if (typeof d.detail === "string") {
              NotificationManager.error(d.detail, "Error!", 3000);
            } else {
              // d.detail can be an array
              NotificationManager.error(
                "Please verify the fields",
                "Error!",
                3000
              );
            }
            return;
          }
          setLoading(false);
          NotificationManager.success(
            "Click to see the doc.",
            "Successful!",
            5000,
            () => window.open(d.document_url)
          );
        })
        .catch((err) => {
          setLoading(false);
          NotificationManager.error("Error", "Internal server error", 3000);
          console.log(err);
        });
    } else {
      setLoading(false);
    }
  };

  // Validation of the form
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();
      handleClick(event);
    } else {
      NotificationManager.error("Fill the required fields", "Error", 2000);
    }
  };

  return (
    <>
      {logStatus ? (
        <div>
          <Navbar />
          <Container className="container">
            <div className="mb-2 top-btns">
              <SaveBtn />
              <OpenRecentBtn />
              <OpenFile />
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <div className="form-content">
                <BasicInfo />
              </div>

              <h3 className="titleText">
                {" "}
                Experience{" "}
                <InfoBtn
                  titleInfo="Experience"
                  bodyInfo={
                    <div
                      dangerouslySetInnerHTML={{
                        __html: EXPERIENCE_LIGHT_INFO,
                      }}
                    />
                  }
                  completeInfo={
                    <div
                      dangerouslySetInnerHTML={{
                        __html: EXPERIENCE_COMPLETE_INFO,
                      }}
                    />
                  }
                />
              </h3>
              <Experience />

              <h3 className="titleText">
                {" "}
                Certifications & Courses{" "}
                <InfoBtn
                  titleInfo="Certifications & Courses"
                  bodyInfo={
                    <div
                      dangerouslySetInnerHTML={{ __html: CERT_LIGHT_INFO }}
                    />
                  }
                />
              </h3>
              <Certifications />

              <h3 className="titleText">
                {" "}
                Education{" "}
                <InfoBtn
                  titleInfo="Education"
                  bodyInfo={EDUCATION_LIGHT_INFO}
                  completeInfo={
                    <div
                      dangerouslySetInnerHTML={{
                        __html: EDUCATION_COMPLETE_INFO,
                      }}
                    />
                  }
                />
              </h3>
              <Education />

              <h3 className="titleText"> Personal Projects And Publications</h3>
              <Personal />
              <div className="successBtn">
                {loading ? (
                  <Spinner />
                ) : (
                  <Button
                    className="successBtn"
                    variant="success"
                    type="submit"
                  >
                    Submit
                  </Button>
                )}
              </div>
              <NotificationContainer />
            </Form>
          </Container>
        </div>
      ) : (
        <Auth handleLog={handleLog} />
      )}
    </>
  );
}
