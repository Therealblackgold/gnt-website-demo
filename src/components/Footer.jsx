import React from "react";
import LOGO from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row mx-0 sm-screen-margin">
          <div className="col-md-4 col-sm-12">
            <img className="center-hero" src={LOGO} alt="" />
          </div>
          <div className="col-md-4 col-sm-12 d-flex align-items-center sm-screen-margin">
            <div>
              <p className="text-white fw-bold">Navigate.</p>
              <p className="text-white">Home</p>
              <p className="text-white">Our Work</p>
              <p className="text-white">Services</p>
              <p className="text-white">About Us</p>
              <p className="text-white">Contact Us</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 d-flex align-items-center">
            <div>
              <p className="text-white fw-bold">Services.</p>
              <p className="text-white">Web Development</p>
              <p className="text-white">E-commerce</p>
              <p className="text-white">Software</p>
              <p className="text-white">Maintenance</p>
              <p className="text-white" style={{ textDecoration: "underline" }}>
                more
              </p>
            </div>
          </div>
        </div>
        <center>
          <p className="text-white">
            @2023 GTN TECHNOLOGY . All Rights Reserved.
          </p>
        </center>
      </div>
    </footer>
  );
};

export default Footer;
