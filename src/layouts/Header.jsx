import React from "react";
import viteLogo from "/vite.svg";
import { NavLink, Link } from "react-router";

const Header = () =>{
    return(
        <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-uppercase" href="#">
            <img
              src={viteLogo}
              alt="Vite"
              width="30"
              height="30"
              className="d-inline-block align-text-top me-2"
            />
            MyApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active fw-semibold" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <NavLink to="/about"   className="nav-link fw-semibold" href="#">
                  About
                </NavLink>
               
              </li>

              
                
                <li className="nav-item">
                <NavLink to="/contact" className="nav-link fw-semibold" href="#">
                  Contact
                </NavLink>
             
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link fw-semibold" href="#">
                  Services
                </Link>
              </li>

               <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                   Crud  Operation
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <NavLink to="/crud" className="dropdown-item" >
                      React Crud
                    </NavLink>
                  </li>
                   <hr className="dropdown-divider" />
                   <li>
                    <NavLink to="/redux-crud" className="dropdown-item" >
                      Redux Crud
                    </NavLink>
                  </li>
                  
                </ul>
              </li>

               <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Custome Hooks
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                     Debouncing
                    </a>
                  </li>
                   <hr className="dropdown-divider" />
                  <li>
                    <a className="dropdown-item" href="#">
                     Throttling
                    </a>
                  </li>
                  
                    <hr className="dropdown-divider" />
                  
                  <li>
                    <a className="dropdown-item" href="#">
                       Use Callback
                    </a>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hooks
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <NavLink to="/use-effect" className="dropdown-item">
                     Use Effect
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/use-state" className="dropdown-item" >
                     Use State
                    </NavLink>
                  </li>
                   <hr className="dropdown-divider" />
                  <li>
                    <NavLink  to="/use-memo" className="dropdown-item" >
                      Use Memo
                    </NavLink>
                  </li>
                  
                    <hr className="dropdown-divider" />
                  
                  <li>
                    <NavLink  to="/use-callback" className="dropdown-item" >
                       Use Callback
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex ms-lg-3 mt-3 mt-lg-0" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
        </>
    )
}

export default Header;