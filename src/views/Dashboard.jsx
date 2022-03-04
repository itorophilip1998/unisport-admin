import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/* eslint-disable */

export default function Dashboard() {
  const [games, setGames] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const get = async () => {
      try {
        await axios
          .get("https://unisport-api.herokuapp.com/api/view-match")
          .then((res) => {
            setGames(res.data.games);
            setMatches(res.data.matches);
          });
      } catch (error) {}
    };
    get();
  }, []);

  if (localStorage.getItem("token")) {
    location.href = "/login";
  }

  return (
    <>
      <div class="container pt-5">
        <div className="row m-0">
          {/* users */}
          <div className="col-md-4 my-2 p-3 ">
            <div className="cards text-white  bg-success rounded-x shadow p-3 py-5 row m-0">
              <div className="col-5">
                <div className="heads ">
                  <h4>Schools</h4>
                </div>
                <div className="body">
                  <h6>{games.length}</h6>
                </div>
              </div>
              <div className="col-6 text-right">
                <i class="fa fa-users fa-3x " aria-hidden="true"></i>
              </div>
            </div>
          </div>

          {/* available matches */}
          <div className="col-md-4 my-2 p-3">
            <div className="cards text-white  bg-danger rounded-x py-5 p-3 shadow row m-0">
              <div className="col-5">
                <div className="heads">
                  <h4>Trophies</h4>
                </div>
                <div className="body">
                  <h6>14</h6>
                </div>
              </div>
              <div className="col-6 text-right">
                <i class="fa fa-trophy fa-3x " aria-hidden="true"></i>
              </div>
            </div>
          </div>

          {/* match */}
          <div className="col-md-4 my-2 p-3">
            <div className="cards text-white  bg-primary rounded-x py-5 shadow p-3 row m-0">
              <div className="col-5">
                <div className="heads">
                  <h4>Matches</h4>
                </div>
                <div className="body">
                  <h6> 0 </h6>
                </div>
              </div>
              <div className="col-6 text-right">
                <i class="fa fa-table fa-3x " aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="users mt-4 row m-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbPb9dJ2sfWtx7Hr7vykG3wyTYLN4poEME6Q&usqp=CAU"
            alt=""
            className="col-lg-5"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEcm74u-tkvf_et4UeViEwFLgGmdC08Q6UxQ&usqp=CAU"
            alt="col-lg-5"
          />
          <div className="col-lg-2 text-muted">
            <h6>
              <i class="fa fa-user-circle" aria-hidden="true"></i> Admin
            </h6>
            <p className="mt-4">Unipsort@admin.com</p>
          </div>
        </div>

        <div className="fix-match bg-primary text-white shadow  p-3">
          <Link to="/set-match" className="text-white ">
            +
          </Link>
        </div>
      </div>
    </>
  );
}
