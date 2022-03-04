import React from "react"; 
// import {  Link } from "react-router-dom";
    /* eslint-disable */

export default function Dashboard() {

  return (
    <>
      <div class="container pt-5">
        <div className="row m-0">
          {/* users */}
          <div className="col-md-4 my-2 p-3 ">
            <div className="cards text-white  bg-success rounded-x shadow p-3 py-5 row m-0">
              <div className="col-5">
                <div className="heads ">
                  <h4>Users</h4>
                </div>
                <div className="body">
                  <h6>22</h6>
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
                  <h6>400</h6>
                </div>
              </div>
              <div className="col-6 text-right">
                <i class="fa fa-table fa-3x " aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="fix-match bg-primary text-white shadow  p-3">
          +
        </div>
      </div>
    </>
  );
}
