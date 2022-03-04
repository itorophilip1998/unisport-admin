import React, { useState } from "react";  
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
/* eslint-disable */

export default function Login() {
  const [Data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const login = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://unisport-api.herokuapp.com/api/signin", Data)
      .then((result) => {
        setLoading(false);
        toast(`Login Successfully 👍`);
      })
      .catch((err) => {
          setLoading(false);
        toast(`Unauthorize`);
          
      });
  };
  const loadingFunc = () => {
    if (loading) {
      return (
        <div className="loading ">
          <div class="loadinImg text-info ">
            <i class="fas fa-spinner fa-pulse fa-5x "></i>
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <div class="login ">
        {loadingFunc()}

        <div className="row m-0 p-0 h-100">
          <div className="col-md-5 p-lg-5 col-lg-4  ">
            <form onSubmit={login} className="mt-5 pt-3">
              {/* email field */}
              <div className="heading mb-4">
                <h3>
                  <a className="navbar-brand text-dark" href="#">
                    <img src="logo.png" alt="" /> Welcome Back!
                  </a>
                </h3>
              </div>
              <p className="comment-form-author">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  required="required"
                  name="email"
                  className="form-control shadow-sm"
                  onChange={(e) =>
                    setData({
                      ...Data,
                      school_name: e.target.value,
                    })
                  }
                />
              </p>
              {/* password field */}
              <p className="comment-form-author">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  required="required"
                  name="password"
                  className="form-control shadow-sm"
                  onChange={(e) =>
                    setData({
                      ...Data,
                      password: e.target.value,
                    })
                  }
                />
              </p>
              <p className="form-submit mt-4">
                <input
                  type="submit"
                  value="Login"
                  required="required"
                  className="btn shadow btn-primary w-100"
                  name="submit"
                />
              </p>
            </form>
          </div>
          <div className="col-md-8 imgBg p-0 d-none d-md-block">
            <div className="overlay"></div>
          </div>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
}
