import React, { useState,useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* eslint-disable */

export default function SetMatch() {
  const [Data, setData] = useState({
    home: "",
    away: "",
  });
    const [games, setGames] = useState([])
 const token= localStorage.getItem('token');
  const [loading, setLoading] = useState(false);
  const login = async (e) => {
      e.preventDefault();
      const config = {
          "Authorization": `Bearer ${token}`,
          "Content-type":"application/json"
      };
    await axios
      .post("https://unisport-api.herokuapp.com/api/set-match", Data,{config})
      .then((res) => { 
        location.href = "/dashboard";
        setLoading(false);
        toast(`created Successfully 👍`);
      })
      .catch((err) => {
        console.log(err);
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
    
  useEffect(() => {
    const get = async () => {
      try {
        await axios
          .get("https://unisport-api.herokuapp.com/api/view-match")
          .then((res) => {
            setGames(res.data.games);
          });
      } catch (error) {}
    };
    get();
  }, []); 
  return (
    <>
      <div class="app col-md-8 col-lg-5 mx-auto text-center">
        {loadingFunc()}
        <form onSubmit={login} className="mt-5 pt-3">
          <p className="comment-form-author">
            <label htmlFor="away">Home</label>
            <select
              type="text"
              required="required"
              name="home"
              className="form-control shadow-sm "
              onChange={(e) =>
                setData({
                  ...Data,
                  home: e.target.value,
                })
              }
            >
              {games.map((item, index) => (
                  <option key={index}>{item.school_name}</option>
              ))}
            </select>
          </p>
          {/* {games.} */}

          <p className="my-4">
            <h2>Versus</h2>
          </p>
          {/* away field */}
          <p className="comment-form-author">
            <label htmlFor="away">Away</label>
            <select
              type="text"
              required="required"
              name="away"
              className="form-control shadow-sm "
              onChange={(e) =>
                setData({
                  ...Data,
                  away: e.target.value,
                })
              }
                      >
                        {games.map((item, index) => (
                  <option key={index}>{item.school_name}</option>
              ))}
            </select>
          </p>
          <p className="form-submit mt-4">
            <input
              type="submit"
              value="Fix"
              required="required"
              className="btn shadow btn-primary w-100"
              name="submit"
            />
          </p>
        </form>
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
