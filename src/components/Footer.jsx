import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer className="py-5 noteFooter fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; SDTIP team 2 Website 2021
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
