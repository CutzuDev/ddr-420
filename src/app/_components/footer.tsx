import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-lg-start bg-body-dark text-center">
      <section className="d-flex justify-content-center justify-content-lg-between border-bottom bg-dark p-4">
        <div className="d-none d-lg-block me-5 text-white">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="/facebook" className="me-4 text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/twitter" className="me-4 text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/google" className="me-4 text-white">
            <i className="fab fa-google"></i>
          </a>
          <a href="/instagram" className="me-4 text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="linkedin" className="me-4 text-white">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/github" className="me-4 text-white">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      <section className="bg-dark mt-o">
        <div className="text-md-start bg-dark container text-center">
          <div className="row pt-4 text-white">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <a href="/">
                  <img
                    src="https://atelierulviselor.ro/includes/logo.png"
                    alt="Logo"
                    width="50"
                    height="50"
                    className="d-inline-block mb-2 ms-4 align-text-top"
                  />
                </a>

                <p className="m-0">My Medic.ai</p>
              </h6>
              <p></p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 bg-dark mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Legal</h6>
              <p>
                <a href="/pricing-personal" className="text-reset">
                  GDPR
                </a>
              </p>
              <p>
                <a href="/pricing-enterprise" className="text-reset">
                  Terms of use
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/pricing" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mb-md-0 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@spheranote.com
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
