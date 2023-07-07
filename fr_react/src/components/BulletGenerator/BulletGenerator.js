import React, { useEffect, useState } from "react";
import {
  Accordion,
  Button,
  Col,
  Form,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ContentCopyIcon } from "../../assets/content_copy.svg";
import {
  updateBGForWhom,
  updateBGHow,
  updateBGTempForWhom,
  updateBGTempHow,
  updateBGTempWhy,
  updateBGWhichTechnologies,
  updateBGWhy,
  updateBulletGenerator,
} from "../../features/BulletGenerator/BulletGeneratorSlice";
import "../../styles/BulletGenerator.css";
import AutocompleteField from "./AutocompleteField";
import MultiSelect from "./MultiSelect";

export default function BulletGenerator() {
  const dispatch = useDispatch();

  // Selectors ----------------------------------------------------
  const bulletGen = useSelector((state) => state.bulletGeneratorInfo);
  const what = useSelector((state) => state.bulletGeneratorInfo.what);
  const actionVerb = useSelector(
    (state) => state.bulletGeneratorInfo.actionVerb
  );
  const whichTechnologies = useSelector(
    (state) => state.bulletGeneratorInfo.whichTechnologies
  );
  const forWhom = useSelector((state) => state.bulletGeneratorInfo.forWhom);
  const tempForWhom = useSelector(
    (state) => state.bulletGeneratorInfo.tempForWhom
  );
  const how = useSelector((state) => state.bulletGeneratorInfo.how);
  const tempHow = useSelector((state) => state.bulletGeneratorInfo.tempHow);
  const why = useSelector((state) => state.bulletGeneratorInfo.why);
  const tempWhy = useSelector((state) => state.bulletGeneratorInfo.tempWhy);

  // Shallow copy to Redux bullet generator info
  let bulletGenerator = {
    what: what,
    actionVerb: actionVerb,
    whichTechnologies: whichTechnologies,
    forWhom: forWhom,
    how: how,
    why: why,
  };

  // Fetching data
  const [whatsFetched, setWhatsFetched] = useState({ whats: [] });
  const [verbsFetched, setVerbsFetched] = useState({ verbs: [] });
  const [skillsFetched, setSkillsFetched] = useState({
    whichTechnologies: [""],
  });
  const [whysFetched, setWhysFetched] = useState({ whys: [] });

  // First fetch to get the list of "whats"
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://34.238.180.233:8000/whats", requestOptions)
      .then((response) => {
        if (response.status === 200) {
          return response.text();
        } else if (response.status !== 200) {
          console.log("SOMETHING WENT WRONG");
          this.setState({ requestFailed: true });
        }
      })
      .then((result) => {
        setWhatsFetched(JSON.parse(result));
      })
      .catch((error) => console.log("error", error.message));
  }, []);
  let dictOfWhats = whatsFetched.whats.map((item) => {
    return { title: item };
  });

  // Second fetch to get the list of "verbs"
  useEffect(() => {
    bulletGenerator.actionVerb = "";
    dispatch(updateBulletGenerator(bulletGenerator));
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://34.238.180.233:8000/verbs?what=" + what, requestOptions)
      .then((response) => {
        if (response.status === 200) {
          return response.text();
        } else if (response.status !== 200) {
          console.log("SOMETHING WENT WRONG");
          this.setState({ requestFailed: true });
        }
      })
      .then((result) => {
        setVerbsFetched(JSON.parse(result));
      })
      .catch((error) => console.log("error", error.message));
  }, [what]);
  let dictOfVerbs = { title: "" };
  if (verbsFetched.verbs !== undefined) {
    dictOfVerbs = verbsFetched.verbs.map((item) => {
      return { title: item };
    });
  }

  let tempList = [];
  const [listOfDictOfSkills, setListOfDictOfSkills] = useState([{ title: "" }]);
  // Third fetch to get the list of "skills"
  useEffect(() => {
    bulletGenerator.whichTechnologies = [];
    dispatch(updateBGWhichTechnologies(bulletGenerator.whichTechnologies));
    setListOfDictOfSkills([{ title: "" }]);
    if (what !== "" && actionVerb !== "") {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        "http://34.238.180.233:8000/skills?what=" +
          what +
          "&verb=" +
          actionVerb,
        requestOptions
      )
        .then((response) => {
          if (response.status === 200) {
            return response.text();
          } else if (response.status !== 200) {
            console.log("SOMETHING WENT WRONG");
            this.setState({ requestFailed: true });
          }
        })
        .then((result) => {
          setSkillsFetched(JSON.parse(result));
        })
        .catch((error) => console.log("error", error.message));
    }
  }, [actionVerb]);

  const [isFormFilled, setFormFilled] = useState(false);
  // Check if the form is filled
  useEffect(() => {
    if (what !== "" && actionVerb !== "" && forWhom !== "" && why !== "") {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  }, [what, actionVerb, forWhom, why]);

  // Fourth fetch to get the list of "whys"
  useEffect(() => {
    if (skillsFetched.skills !== undefined) {
      skillsFetched.skills.map((item) => {
        tempList.push({ title: item });
      });
      setListOfDictOfSkills(tempList);
    }
  }, [skillsFetched]);

  // Handle change of the open fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "forWhom":
        dispatch(updateBGTempForWhom(value));
        break;
      case "how":
        dispatch(updateBGTempHow(value));
        break;
      case "why":
        dispatch(updateBGTempWhy(value));
        break;
      default:
        break;
    }
  };

  const [isLoadingWhys, setIsLoadingWhys] = useState(false);
  const [forWhomEnterClicked, setForWhomEnterClicked] = useState(false);
  const [howEnterClicked, setHowEnterClicked] = useState(false);
  const [whyEnterClicked, setWhyEnterClicked] = useState(false);

  const handleClickForWhom = () => {
    dispatch(updateBGForWhom(tempForWhom));
  };

  const handleClickHow = () => {
    dispatch(updateBGHow(tempHow));
  };

  const handleClickWhy = () => {
    dispatch(updateBGWhy(tempWhy));
  };

  const Suggestions = () => {
    return whysFetched.whys.length !== 0 ? (
      whysFetched.whys.map((obj, index) => <li key={index}>{obj}</li>)
    ) : (
      <li style={{ color: "gray" }}>
        Define what, action and for whom to get suggestions
      </li>
    );
  };

  const formatSkills = () => {
    let ans = "";
    if (whichTechnologies !== undefined) {
      if (whichTechnologies.length !== 0) {
        ans += " using ";
        for (let i = 0; i < whichTechnologies.length; i++) {
          if (i === 0) {
            ans += whichTechnologies[i];
          } else if (i === whichTechnologies.length - 1) {
            ans += " and " + whichTechnologies[i];
          } else {
            ans += ", " + whichTechnologies[i];
          }
        }
      }
    }

    return ans;
  };

  // Feature: Preview of the bullet
  let previewOfSkills = formatSkills();
  let previewOfForWhom = forWhom !== "" ? " for " + forWhom : " ";
  let previewOfHow = how !== "" ? " leveraging on " + how : " ";
  let textOfPreview =
    actionVerb +
    " " +
    what +
    " " +
    previewOfSkills +
    previewOfHow +
    " " +
    why +
    " " +
    previewOfForWhom;

  // Feature: Copy to clipboard
  function unsecuredCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
  }

  const handleCopyPreview = () => {
    if (window.isSecureContext && navigator.clipboard) {
      navigator.clipboard.writeText(textOfPreview);
    } else {
      unsecuredCopyToClipboard(textOfPreview);
    }
    setRecentlyCopiedPreview(true);
    setTimeout(() => {
      setRecentlyCopiedPreview(false);
    }, 2000);
  };

  const clickToCopyPreview = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {!recentlyCopiedPreview ? "Click to copy" : "Copied!"}
    </Tooltip>
  );

  const [recentlyCopiedPreview, setRecentlyCopiedPreview] = useState(false);
  const ElementCopyPreview = () => {
    return (
      <div className="copy">
        <OverlayTrigger
          placement="right"
          delay={{ show: 10, hide: 400 }}
          overlay={clickToCopyPreview}
        >
          <Button
            variant="outline-secondary"
            onClick={!recentlyCopiedPreview ? handleCopyPreview : undefined}
          >
            <ContentCopyIcon className="copy-icon" />
          </Button>
        </OverlayTrigger>
      </div>
    );
  };

  // Feature: Get suggestions for why
  const handleClickHere = () => {
    if (what !== "" && actionVerb !== "" && forWhom !== "") {
      setIsLoadingWhys(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        headers: myHeaders,
        method: "POST",
        redirect: "follow",
        body: JSON.stringify(whichTechnologies),
      };
      fetch(
        "http://34.238.180.233:8000/why?what=" +
          what +
          "&verb=" +
          actionVerb +
          "&whom=" +
          forWhom,
        requestOptions
      )
        .then((response) => {
          if (response.status === 200) {
            return response.text();
          } else if (response.status !== 200) {
            console.log("SOMETHING WENT WRONG");
            this.setState({ requestFailed: true });
          }
        })
        .then((result) => {
          setWhysFetched(JSON.parse(result));
          setIsLoadingWhys(false);
        })
        .catch((error) => {
          console.log("error", error.message);
          setIsLoadingWhys(false);
        });
    }
  };

  // Feature: Correct grammar
  const [loadCorrectGrammar, setLoadCorrectGrammar] = useState(false);
  const [textOfCorrectGrammar, setTextOfCorrectGrammar] = useState("");
  const handleCorrectGrammar = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      headers: myHeaders,
      method: "POST",
      redirect: "follow",
    };
    setLoadCorrectGrammar(true);
    fetch(
      "http://34.238.180.233:8000/correct_final_bullet?bullet=" + textOfPreview,
      requestOptions
    )
      .then((response) => {
        if (response.status === 200) {
          return response.text();
        } else if (response.status !== 200) {
          console.log("SOMETHING WENT WRONG");
          this.setState({ requestFailed: true });
        }
      })
      .then((result) => {
        setLoadCorrectGrammar(false);
        setTextOfCorrectGrammar(JSON.parse(result));
      })
      .catch((error) => {
        console.log("error", error.message);
        setLoadCorrectGrammar(false);
      });
  };

  const handleCopyCorrectGrammar = () => {
    if (window.isSecureContext && navigator.clipboard) {
      navigator.clipboard.writeText(textOfCorrectGrammar);
    } else {
      unsecuredCopyToClipboard(textOfCorrectGrammar);
    }
    setRecentlyCopiedCorrectGrammar(true);
    setTimeout(() => {
      setRecentlyCopiedCorrectGrammar(false);
    }, 2000);
  };

  const clickToCopyCorrectGrammar = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {!recentlyCopiedCorrectGrammar ? "Click to copy" : "Copied!"}
    </Tooltip>
  );

  const [recentlyCopiedCorrectGrammar, setRecentlyCopiedCorrectGrammar] =
    useState(false);
  const ElementCopyCorrectGrammar = () => {
    return (
      <div className="copy">
        <OverlayTrigger
          placement="right"
          delay={{ show: 10, hide: 400 }}
          overlay={clickToCopyCorrectGrammar}
        >
          <Button
            variant="outline-secondary"
            onClick={
              !recentlyCopiedCorrectGrammar
                ? handleCopyCorrectGrammar
                : undefined
            }
          >
            <ContentCopyIcon className="copy-icon" />
          </Button>
        </OverlayTrigger>
      </div>
    );
  };
  return (
    <div className="div-bullet-generator">
      <Form>
        <h1 className="bullet-gen-title">Bullet Generator</h1>

        <p style={{ color: "gray", fontSize: "12px" }}>Required field (*)</p>
        <hr />
        <Row>
          <Col className="dropdown-options">
            <div className="autocomplete">
              <AutocompleteField
                optionsProps={dictOfWhats}
                index="what"
                labelProps="What did you do? *"
              />
            </div>
            <div className="example-text">(e.g. KPIs dashboard)</div>
            <br />
            <div className="input-field autocomplete">
              <AutocompleteField
                optionsProps={dictOfVerbs}
                index="actionVerb"
                labelProps="Action (past-tense) *"
              />
            </div>

            <br />
            <div
              className="input-field autocomplete-multiple-selector"
              style={{ marginBottom: "0px" }}
            >
              <MultiSelect
                options={listOfDictOfSkills.map((e) => e.title)}
                labelName="Skills *"
              />
            </div>
            <div className="example-text" style={{ marginBottom: "20px" }}>
              (e.g. tableau, looker, dbt)
            </div>
          </Col>
          <Col>
            <h3>Preview</h3>
            <p style={{ textAlign: "justify" }}>{textOfPreview}</p>
            <ElementCopyPreview />
            <div className="correct-grammar">
              <Button
                variant="outline-secondary"
                onClick={handleCorrectGrammar}
              >
                Correct grammar
              </Button>
            </div>

            {loadCorrectGrammar ? (
              <div className="spinner">
                <Spinner />
              </div>
            ) : (
              <p style={{ textAlign: "justify" }}>{textOfCorrectGrammar}</p>
            )}

            {textOfCorrectGrammar === "" ? undefined : (
              <ElementCopyCorrectGrammar />
            )}
          </Col>
        </Row>
        <div className="input-field">
          <p className="text-description">
            For whom *{" "}
            <span style={{ color: "gray", fontStyle: "italic" }}>
              {" "}
              (e.g. one of the biggest fintech companies in the US)
            </span>
          </p>
          <div className="input-field-control">
            <div className="input-field-control-inside">
              <InputGroup>
                <Form.Control
                  required
                  name="forWhom"
                  placeholder="Which company/entity was this done for?"
                  onChange={handleChange}
                />
                <Button variant="secondary" onClick={handleClickForWhom}>
                  Enter
                </Button>
              </InputGroup>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "10px", fontSize: "13px" }}>
          Do you want to get suggestions for the why field? Click{" "}
          <span className="link-here" onClick={handleClickHere}>
            here
          </span>
        </div>
        <div className="input-field">
          <p className="text-description">
            Why? *
            <span style={{ color: "gray", fontStyle: "italic" }}>
              {" "}
              (e.g. To generate actionable insights to C-level stakeholders)
            </span>
          </p>
          <div className="input-field-control">
            <div className="input-field-control-inside">
              <InputGroup>
                <Form.Control
                  required
                  name="why"
                  placeholder="What was the purpose?"
                  onChange={handleChange}
                />
                <Button variant="secondary" onClick={handleClickWhy}>
                  Enter
                </Button>
              </InputGroup>
            </div>
          </div>
        </div>

        <div className="input-field">
          <div className="text-description">
            How? (Techniques)<span style={{ color: "gray" }}> (optional)</span>
            <span style={{ color: "gray", fontStyle: "italic" }}>
              {" "}
              (e.g. DBT's semantic layer to generate business logic around raw
              figures)
            </span>
          </div>
          <div className="input-field-control">
            <div className="input-field-control-inside">
              <InputGroup>
                <Form.Control
                  required
                  name="how"
                  placeholder="Did you apply any specific techniques (p.e. statistical, ml related, etc.)? "
                  onChange={handleChange}
                />
                <Button variant="secondary" onClick={handleClickHow}>
                  Enter
                </Button>
              </InputGroup>
            </div>
          </div>
        </div>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Suggestions for the why field</Accordion.Header>
            <Accordion.Body>
              {isLoadingWhys ? (
                <div className="spinner">
                  <Spinner />
                </div>
              ) : (
                <ul>
                  <Suggestions />
                </ul>
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <hr />
      </Form>
    </div>
  );
}
