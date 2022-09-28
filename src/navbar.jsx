import React from "react";
import { Link, NavLink } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img src="/assets/logo.png" alt="" id="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link"  to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact US
            </NavLink>
          </div>
          <span className="fa-layers fa-fw fa-xl m-2">
            <Link className="nav-link" title="View shopping cart" to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <span className="fa-layers-counter fa-layers-top-right">
              <span className="badge count badge-primary">
                <h1>{props.productsCount()}</h1>
              </span>
            </span>
          </span>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
