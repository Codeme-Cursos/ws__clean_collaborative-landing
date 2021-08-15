import React from "react";

const Footer = () => {
  return (
    <div className="text-center">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" className="btn btn-danger mx-4">
          instagram
        </button>
        <button type="button" className="btn btn-warning mx-4">
          Facebook
        </button>
        <button type="button" className="btn btn-success mx-4">
          Email
        </button>
        <button type="button" className="btn btn-success mx-4">
          WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Footer;
