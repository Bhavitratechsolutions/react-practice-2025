import React from "react";

// router vedio
// https://www.youtube.com/watch?v=DPH6k10bt2M&list=PLCVRCLNdg3_s8jkO-w6x6v6qaxRNJpFHG

const Footer = () =>{
    return(
        <>
        <footer className="bg-light border-top mt-5">
        <div className="container-fluid px-5 py-4">
          <div className="row">
            {/* Brand / About */}
            <div className="col-md-4 mb-3">
              <h5 className="fw-bold">MyApp</h5>
              <p className="text-muted small">
                A modern React + Vite + Bootstrap app with a clean, responsive design.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-3">
              <h6 className="fw-bold">Quick Links</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none text-dark small">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-dark small">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-dark small">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-dark small">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="col-md-4 mb-3">
              <h6 className="fw-bold">Resources</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none text-dark small">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-dark small">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-dark small">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center py-3 border-top small text-muted bg-body-tertiary">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </footer>
        </>
    )
}

export default Footer;