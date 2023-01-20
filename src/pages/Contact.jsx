import React from "react";

const Contact = () => {
  return (
    <section className="contact-background">
      <div className="container">
        <div className="row mx-0 contact-container">
          <div className="col-md-6 col-sm-12 sm-screen-margin">
            <h1 className="fw-bold">Lets Chat.</h1>
            <h1>Tell us about your project.</h1>
            <h4 style={{ color: "#db7c2e" }}>
              Let's create something together
            </h4>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row mb-3">
              <div className="col-2">
                <i className="bi bi-envelope-at contact-icons bg-light py-2 px-3 rounded" />
              </div>
              <div className="col">
                <h4 className="mt-2 mb-4">gnt.technologyza@gmail.com</h4>
              </div>
            </div>
            {/* End email Item */}
            <div className="row mb-3">
              <div className="col-2">
                <i className="bi bi-telephone-forward contact-icons bg-light py-2 px-3 rounded" />
              </div>
              <div className="col">
                <h4 className="mt-2 mb-4">073 821 2456</h4>
              </div>
            </div>
            {/* End contact Item */}
            <div className="row mb-3">
              <div className="col-2">
                <i className="bi bi-telephone-forward contact-icons bg-light py-2 px-3 rounded" />
              </div>
              <div className="col">
                <h4 className="mt-2">065 892 6219</h4>
              </div>
            </div>
            {/* End contact Item */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
