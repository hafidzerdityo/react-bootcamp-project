import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row p-3 d-flex justify-content-around">
          <div className="col-md-2 ">
            <div className="link-title">Coding Bootcamp</div>
            <ul className="footer-nav">
              <li>
                <Link
                  to="/immersivejs"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Full Stack Javascript Immersive
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  to="/flexjs"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Full Stack Javascript Flex
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  to="/datascience"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Datascience
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 ">
            <div className="link-title">Courses</div>
            <ul className="footer-nav">
              <li>
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  React & React Native Basic
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  Python for Data Science
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 ">
            <div className="link-title">About</div>
            <ul className="footer-nav">
              <li>
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  Admission Info
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  Financial Partner
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-2 ">
            <div className="link-title">Contact</div>
            <ul className="footer-nav contact-person">
              <li>
                <span>hafidze15@gmail.com</span>
              </li>

              <li>
                <span>082118674613</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-5 container">
        <div className="row align-items-center justify-content-between px-5">
          <div className="col-md-auto col-12 text-start">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h2 className="footer-brand">Void8</h2>
            </Link>
          </div>
          <div className="soc col-md-auto col-12 ">
            <ul className="row g-3">
              <li className="col-auto">
                <a href="https://twitter.com/erdityoh">
                  <i className="bi-twitter"></i>
                </a>
              </li>
              <li className="col-auto">
                <a href="https://www.instagram.com/hafidzerdityo/">
                  <i className="bi-instagram"></i>
                </a>
              </li>
              <li className="col-auto">
                <a href="https://github.com/hafidzerdityo">
                  <i className="bi-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
