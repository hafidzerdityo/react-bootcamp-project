import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Navbar = ({ brand }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand text-light text-capitalize">
            <h2>{brand}</h2>
          </Link>
          <h1>bkabka</h1>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navTogg"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navTogg">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="bootcampDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  to="/bootcamp"
                >
                  Bootcamp
                </Link>

                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="bootcampDropdown"
                >
                  <li>
                    <Link class="dropdown-item" to="/immersivejs">
                      Fullstack Javascript Immersive
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/flexjs">
                      Fullstack Javascript Flex
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/datascience">
                      Data Science
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="coursesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  to="/courses"
                >
                  Courses
                </Link>

                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="coursesDropdown"
                >
                  <li>
                    <Link class="dropdown-item" to="/x">
                      React & React Native
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/x">
                      Python for Data Science
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  brand: PropTypes.string.isRequired,
};

export default Navbar;
