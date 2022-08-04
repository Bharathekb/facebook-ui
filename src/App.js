import React, { useState } from "react";
import "./index.css";
import $ from "jquery";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";

const app = () => {
  const func = (e) => {
    let email = document.myform.email.value;
    let pass = document.myform.password.value;

    if (email === "" && pass === "") {
      document.getElementById("demo").innerHTML =
        "Email And Password Should Not Be Empty";
      document.getElementById("demo").style.display = "block";
      e.preventDefault();
    } else if (email === "") {
      document.getElementById("demo").innerHTML =
        "Please Enter Email Or Mobile Number";
      document.getElementById("demo").style.display = "block";
      e.preventDefault();
    } else if (pass === "") {
      document.getElementById("demo").innerHTML = "Please Enter Password";
      document.getElementById("demo").style.display = "block";
      e.preventDefault();
    } else if (email.length < 7 || pass.length < 7) {
      document.getElementById("demo").innerHTML =
        "Email Or Password Must Be 7 charecters";
      document.getElementById("demo").style.display = "block";
      e.preventDefault();
    } else {
      document.getElementById("demo").style.display = "none";
      handleShow();
      e.preventDefault();
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState(true);

  return (
    <>
      <Alert show={data} variant="danger" id="alert">
        <Alert.Heading style={{ fontFamily: "serif" }}>
          Welcome {}
        </Alert.Heading>
        <p style={{ fontSize: "18px" }}>Login To Facebook</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => setData(false)}
            variant="outline-success"
            id="close"
          >
            Close
          </Button>
        </div>
      </Alert>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-sm-12 col-md-5 col-lg-5 fb">
            <h1>facebook</h1>
            <p>
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="shadow container rounded cont1">
              <h5 id="demo"></h5>
              <form
                action="/action_page.php"
                method="post"
                onSubmit={func}
                name="myform"
              >
                <div className="form-group p-2">
                  <input
                    type="text"
                    placeholder="Email address or phone number"
                    className="form-control"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="form-group p-2">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="form-control"
                    id="pwd"
                  />
                </div>
                <div className="d-grid p-2">
                  <button
                    type="submit"
                    variant="primary"
                    data-bs-target="#signupModal"
                    className="btn btn-primary btn-block"
                  >
                    Log in
                  </button>
                </div>
                <div className="btn1">
                  <a href="#" type="button">
                    Forgotten password?
                  </a>
                </div>
                <div>
                  <hr />
                </div>
                <div className="btn2">
                  <a href="" className="btn btn-lg create">
                    Create new account
                  </a>
                </div>
              </form>
            </div>
            <div className="btn3">
              <a href="" className="btn">
                Create a Page
              </a>

              <p>for a celebrity, brand or business.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid cont2">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-lg-10 col-md-10 btn4">
            <small>English(UK)</small>
            <a href="" className="btn btn-sm">
              हिन्दी
            </a>
            <a href="#" className="btn btn-sm">
              اردو
            </a>
            <a href="#" className="btn btn-sm">
              தமிழ்
            </a>
            <a href="#" className="btn btn-sm">
              বাংলা
            </a>
            <a href="#" className="btn btn-sm">
              मराठी
            </a>
            <a href="#" className="btn btn-sm">
              తెలుగు
            </a>
            <a href="#" className="btn btn-sm">
              ગુજરાતી
            </a>
            <a href="#" className="btn btn-sm">
              ಕನ್ನಡ
            </a>
            <a href="#" className="btn btn-sm">
              മലയാളം
            </a>
            <a href="#" className="btn btn-sm">
              Español
            </a>
            <a href="" className="fa">
              <b>+</b>
            </a>

            <hr id="horizontal" />
          </div>
          <div className="container cont3">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-sm-12 col-lg-10 col-md-10 col2">
                <a href="" className="btn btn-sm">
                  Sign Up
                </a>
                <a href="" className="btn btn-sm">
                  Log in
                </a>
                <a href="" className="btn btn-sm">
                  Messenger
                </a>
                <a href="" className="btn btn-sm">
                  Facebook Lite
                </a>
                <a href="" className="btn btn-sm">
                  Watch
                </a>
                <a href="" className="btn btn-sm">
                  Places
                </a>
                <a href="" className="btn btn-sm">
                  Games
                </a>
                <a href="" className="btn btn-sm">
                  Marketplace
                </a>
                <a href="" className="btn btn-sm">
                  Facebook Pay
                </a>
                <a href="" className="btn btn-sm">
                  Oculus
                </a>
                <a href="" className="btn btn-sm">
                  Portal
                </a>
                <a href="" className="btn btn-sm">
                  Instagram
                </a>
                <a href="" className="btn btn-sm">
                  Bulletin
                </a>
                <a href="" className="btn btn-sm">
                  Local
                </a>
                <a href="" className="btn btn-sm">
                  Fundraisers
                </a>
                <a href="" className="btn btn-sm">
                  Services
                </a>
                <a href="" className="btn btn-sm">
                  Voting Information Centre
                </a>
                <a href="" className="btn btn-sm">
                  Groups
                </a>
                <a href="" className="btn btn-sm">
                  About
                </a>
                <a href="" className="btn btn-sm">
                  Create ad
                </a>
                <a href="" className="btn btn-sm">
                  Create Page
                </a>
                <a href="" className="btn btn-sm">
                  Developers
                </a>
                <a href="" className="btn btn-sm">
                  Careers
                </a>
                <a href="" className="btn btn-sm">
                  Privacy
                </a>
                <a href="" className="btn btn-sm">
                  Cookies
                </a>
                <a href="" className="btn btn-sm">
                  AdChoices
                </a>
                <a href="" className="btn btn-sm">
                  Terms
                </a>
                <a href="" className="btn btn-sm">
                  Help
                </a>
              </div>
            </div>
            <div className="footer">
              <div className="continer"></div>
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-sm-12 col-md-10 col-lg-10">
                  <p className="para">
                    <small>meta©2022</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} id="signupModal">
        <Modal.Header closeButton>
          <Modal.Title>Welcome</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "green", fontWeight: "600" }}>
          Login Success!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default app;
