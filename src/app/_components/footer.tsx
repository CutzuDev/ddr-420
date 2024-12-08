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
            <i className="fab fa-x"></i>
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
        </div>
      </section>
      <section className="bg-dark mt-o">
        <div className="text-md-start bg-dark container text-center">
          <div className="row pt-4 text-white">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <p className="m-0">Diagnose. <span className="-ml-1 text-base">AI</span></p>
              </h6>
              <p></p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 bg-dark mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Legal links</h6>
              <p>
                <a href="/gdpr-ro" className="text-reset fw-bold text-decoration-none">
                  GDPR
                </a>
              </p>
              <p>
                <a href="/terms-of-use" className="text-reset fw-bold text-decoration-none">
                  Terms of use
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/services" className="text-reset fw-bold text-decoration-none">
                  Services
                </a>
              </p>
              <p>
                <a href="/about" className="text-reset fw-bold text-decoration-none">
                  About
                </a>
              </p>
              <p>
                <a href="/contact" className="text-reset fw-bold text-decoration-none">
                  Help
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mb-md-0 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p className="fw-bold">
                <i className="fas fa-home me-3"></i>  Bucuresti, Calea Victoriei Nr. 12
              </p>
              <p className="fw-bold">
                <i className="fas fa-envelope me-3"></i> legal@diagnose.ai
              </p>
              <p className="fw-bold">
                <i className="fas fa-print me-3"></i> +4071 234 567
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
