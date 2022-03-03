import React from 'react'
import "../scss/style.scss";
import { Link } from "react-router-dom";
    /* eslint-disable */

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-sm">
        <a className="navbar-brand" href="#">
          <img src="logo.png" alt="" /> Unisp<i class="fa fa-circle text-muted" aria-hidden="true"></i>rt
        </a>
        <button
          className="navbar-toggler d-sm-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 d-sm-none mt-lg-0">
            <li className="nav-item ">
              <Link className="nav-link" to="/">
                Dashboard
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/set-match">
                Match
              </Link> 
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/view-users">
                Users
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
          <form className="form-inline  float-right my-2 my-lg-0 "> 
            <i class="fa fa-search searchBox text-muted" aria-hidden="true"></i>
            <input
              className="form-control mr-sm-2 pl-4 rounded-pill shadow-sm"
              type="text"
              placeholder=" Search... "
            />
            {/* <button className="btn btn-outline-primary my-2 my-sm-0 rounded-pill" type="submit"> Search</button> */}
          </form>
        </div>
      </nav>
    </>
  );
}
