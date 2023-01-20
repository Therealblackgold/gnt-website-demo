import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-5">
      <div className="container">
        <a className="navbar-brand" href="/index.html">
          <span>GNT</span> TECHNOLOGY
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Our Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn button-style py-3 talk-btn">
              Lets Talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
