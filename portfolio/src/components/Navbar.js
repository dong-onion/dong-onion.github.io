import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
const Navbar = () => {
  return (
    <nav className="bg-light navbar navbar-expand-lg shadow-sm p-4">
      <div className="container-fluid d-sm-flex flex-column flex-lg-row justify-content-center justify-content-lg-between">
        <div className="navbar-brand mb-4 mb-md-0 mb-lg-0">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img
              src={logo}
              alt="logo"
              width="30"
              height="auto"
              className="d-inline-block align-text-top"
            />
            <span
              style={{ color: 'var(--clr-primary-3)' }}
              className="ms-2 fw-bold"
            >
              onion's Portfolio
            </span>
          </Link>
        </div>

        <div className="">
          <NavLink to="/" className="link me-5" style={{ fontSize: 18 }}>
            Home
          </NavLink>
          <NavLink to="/projects" className="link" style={{ fontSize: 18 }}>
            Projects
          </NavLink>
        </div>

        {/* <div>
          <NavLink to="/contact" className="link">
            <button className="mt-5 m-lg-0 btn btn-primary custom-btn fw-bold">
              Contact me
            </button>
          </NavLink>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar
