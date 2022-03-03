import React from "react";
import "../scss/style.scss";
import { Link } from "react-router-dom";

/* eslint-disable */

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <ul className="p-0 py-1">
          <li className="list-item ">
            <Link className="list-link" to="/">
              <i class="fa fa-dashboard" aria-hidden="true"></i> Dashboard
            </Link>
          </li>
          <li className="list-item ">
            <Link className="list-link" to="/set-match">
              <i class="fa fa-table" aria-hidden="true"></i> Fix Match
            </Link>
          </li>
          <li className="list-item ">
            <Link className="list-link" to="/view-users">
              <i class="fa fa-users" aria-hidden="true"></i> View Users
            </Link>
          </li>
          <li className="list-item ">
            <Link className="list-link" to="/login">
              <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
