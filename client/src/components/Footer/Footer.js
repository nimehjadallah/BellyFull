import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid" id="footer">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="icons">
            <a
              href="https://www.facebook.com/BellyFull-505753420167138"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-3x pr-5" />
            </a>
            <a
              href="https://www.instagram.com/bellyfullrichmondva/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-3x" />
            </a>
            <a
              href="https://github.com/Mosbycr/bellyFull"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-3x pl-5" />
            </a>
          </div>
          <p className="copyright">copyright &copy; 2019 BellyFull, Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
