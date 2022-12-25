import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../Img/Click-medic.png";
import "./ContactUs.css";

const ContactUs = () => {
  const {
    googleSignIn,
    githubSignIn,
    handleLoadingPage,
    handleEmail,
    handlePassword,
    error,
    handleName,
    user,
    setUserName,
    email,
    password,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home_page";
  const handleLocationByGoogle = () => {
    googleSignIn().then((result) => {
      history.push(redirect_url);
    });
  };
  const handleLocationByGithub = () => {
    githubSignIn().then((result) => {
      history.push(redirect_url);
    });
  };
  const handleContactuse = (e) => {
    e.preventDefault();
    if (email.length === 0 && password.length === 0) {
      alert("please enter a valid email and set a Strong password");
      return;
    }
    if (password.length < 8) {
      alert("Password should be at least 8 characters");
      return;
    }
    handleLoadingPage().then((result) => {
      setUserName();
      history.push(redirect_url);
    });
  };
  return (
    <>
      {/* <div className="bannerBg">
        <div className="row">
          <div
            className="col-md-6 col-lg-6 col-12"
            style={{ textAlign: "left" }}
          >
            {user.displayName ? (
              <p className=" fw-bold contact-heading pe-4 contactTag">
                Welcome Back ,{" "}
                <span className="text-warning">{user.displayName}</span>
              </p>
            ) : (
              <p className=" fw-bold contact-heading pe-4 contactTag">
                Please fill the below information
              </p>
            )}
            <p
              className="text-white contact-heading"
              style={{ textAlign: "left", marginTop: "-10px" }}
            >
              This will help us to show the the perfect package you are looking
              for
            </p>
          </div>
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-4 col-lg-4 col-sm-8">
            <img
              className="img-fluid"
              src="https://static.wixstatic.com/media/4575f6_ec4b613c4b6c4e9b89ad9c530b51c52a~mv2.gif"
              alt=""
            />
          </div>
        </div>
      </div> */}

      <div className="container contact-form alert alert-primary">
        <img
          width="150px"
          className="alert alert-primary rounded shadow"
          src={logo}
          alt=""
        />
        <form>
          <div className="form-floating mb-3">
            {user.displayName ? (
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder={user.displayName}
                disabled
              />
            ) : (
              <input
                onBlur={handleName}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="First Name"
                required
              />
            )}
            {user.displayName ? (
              <label htmlFor="floatingInput">{user.displayName}</label>
            ) : (
              <label htmlFor="floatingInput">First Name</label>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              onBlur={handleEmail}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>{" "}
          <div className="form-floating mb-3">
            <input
              onBlur={handlePassword}
              type="password"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Password</label>
          </div>
          <div className="form-floating">
            <input
              onClick={handlePassword}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Retype Password</label>
          </div>
          <p>
            <small>{error}</small>
          </p>
          <div></div>
          <button
            onClick={handleContactuse}
            type="submit"
            className="btn btn-primary mt-3 py-3"
            style={{ paddingLeft: "80px", paddingRight: "80px" }}>
            Yaratish
          </button>
          <div className="mt-3">
            {" "}
            <small>
              Menda akaunt bor<Link to="/login">Kirish</Link>
            </small>
          </div>
        </form>
        {/* <div className="my-3">___________or___________</div>
        <div>
          <button
            onClick={handleLocationByGoogle}
            className="m-2 btn px-5 py-2 btn-success"
          >
            <i className="fab fa-google"></i>
          </button>
          <button
            onClick={handleLocationByGithub}
            className="m-2 btn px-5 py-2 btn-dark"
          >
            <i className="fab fa-github"></i>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default ContactUs;
