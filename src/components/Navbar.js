import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-lg">
        <Link class="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <Link class="nav-link" to="/explore">
                Explore Jobs
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/hire">
                Hire Now
              </Link>
            </li>
          </ul>
          <div className="navv">
            <ul className="navbar-nav">
              <li class="nav-item">
                <Link to="/contact" className="nav-link mr-10">
                  Contact Us
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/sign-in" className="nav-link mr-10">
                  Sign-In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
