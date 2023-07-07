import React, { useState } from "react";
import Cookies from "universal-cookie";
import "./../styles/Auth.css";

const cookies = new Cookies();

// eslint-disable-next-line import/no-anonymous-default-export
export default function Auth(props) {
  let [authMode, setAuthMode] = useState("signin");
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const logIn = async () => {
    if (
      formValues.email === "form@react.ai" &&
      formValues.password === "react2023"
    ) {
      alert(`Hello, nice to see you!`);
      cookies.set("email", formValues.email, { path: "/" });
      cookies.set("password", formValues.password, { path: "/" });
      props.handleLog();
    } else if (formValues.email === "" || formValues.password === "") {
      alert("Missing email or password, please fill the form");
    } else {
      alert("The email or password is not correct, please try again");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    logIn();
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.email) {
      errors.email = "Email required";
    } else if (regex.test(values.email.value)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "Password required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 20) {
      errors.password = "Password can not be more than 20 characters";
    }
    return errors;
  };

  if (authMode === "signin") {
    // Conditional return in signin ----------------------------------------------------------------
    return (
      <div className="mainContainer">
        <div className="myImage">
          <img
            alt=""
            src="../logo192.png"
            width="100"
            height="100"
            className="d-inline-block align-top"
          />{" "}
        </div>
        <div className="Auth-form-container">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">Signed in succesfully</div>
          ) : (
            <div></div>
          )}
          <form className="Auth-form" onSubmit={handleSubmit}>
            <div className="Auth-form-content ui form">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3 field">
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control mt-1"
                  value={formValues.email}
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </div>
              <p style={{ color: "red", fontSize: 12 }}>{formErrors.email}</p>
              <div className="form-group mt-3 field">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control mt-1"
                  value={formValues.password}
                  placeholder="Enter password"
                  onChange={handleChange}
                />
              </div>
              <p style={{ color: "red", fontSize: 12 }}>
                {formErrors.password}
              </p>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="/">password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
  // Conditional return in signup ----------------------------------------------------------------
  return (
    <div className="mainContainer">
      <div className="myImage">
        <img
          alt=""
          src="../logo192.png"
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{" "}
      </div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
              />
            </div>
            <div className="form-group mt-3">
              <label>Position</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Position"
              />
            </div>
            <div className="form-group mt-3">
              <label>Skills</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Skills"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="/">password?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
