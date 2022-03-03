import React, { useState } from "react";
// import { Country, State } from "country-state-city";
import state from "../state.json";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
    /* eslint-disable */

export default function Register() {
  const [Data, setData] = useState({
    school_name: "",
    state: "",
    year: "",
    game_master: "",
    game_master_email: "",
    game_master_phone: "",
  });
  const [loading, setLoading] = useState(0);

  const submitGames = (e) => {
    e.preventDefault();
    setLoading(1);
    axios
      .post("https://unisport-api.herokuapp.com/api/register", Data)
      .then((result) => {
        setLoading(false);
        toast(`Registered as ${result.data.result.school_name} 👍`);
      })
      .catch((err) => {
        setLoading(false);
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
  }

  return (
    <div>
      {loadingFunc()}
      <section id="mu-page-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-page-breadcrumb-area">
                <h2>Register Your School</h2>

                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="active">Registration Form</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End breadcrumb --> */}
      {/* <!-- Start contact  --> */}
      <section id="mu-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-contact-area">
                {/* <!-- start contact content --> */}
                <div className="mu-contact-content">
                  <div className="row">
                    <div className="col-md-4  ">
                      <div className="mu-contact-left">
                        <form className="contactform" onSubmit={submitGames}>
                          <p className="comment-form-author">
                            <label htmlFor="school_name">School Name</label>
                            <input
                              type="text"
                              required="required"
                              name="school_name"
                              className="form-control"
                              onChange={(e) =>
                                setData({
                                  ...Data,
                                  school_name: e.target.value,
                                })
                              }
                            />
                          </p>

                          <p className="comment-form-author">
                            <label htmlFor="state">State</label>
                            <select
                              name="state"
                              id=""
                              className="form-control "
                              onChange={(e) =>
                                setData({ ...Data, state: e.target.value })
                              }
                            >
                              {state.map((item, index) => (
                                <option key={index}>{item}</option>
                              ))}
                            </select>
                          </p>
                          <p className="comment-form-email">
                            <label htmlFor="year">Year Founded</label>
                            <input
                              type="date"
                              required="required"
                              aria-required="true"
                              className="form-control"
                              name="year"
                              onChange={(e) =>
                                setData({ ...Data, year: e.target.value })
                              }
                            />
                          </p>
                          <p className="comment-form-url">
                            <label htmlFor="game_master">Game Master</label>
                            <input
                              type="text"
                              name="game_master"
                              className="form-control"
                              onChange={(e) =>
                                setData({
                                  ...Data,
                                  game_master: e.target.value,
                                })
                              }
                            />
                          </p>
                          <p className="comment-form-comment">
                            <label htmlFor="game_master_email">
                              Game Master Email
                            </label>
                            <input
                              type="text"
                              name="game_master_email"
                              name="email"
                              required="required"
                              className="form-control"
                              onChange={(e) =>
                                setData({
                                  ...Data,
                                  game_master_email: e.target.value,
                                })
                              }
                            />
                          </p>
                          <p className="comment-form-comment">
                            <label htmlFor="game_master_phone">
                              Game Master Phone
                            </label>
                            <input
                              type="text"
                              name="game_master_phone"
                              name="text"
                              required="required"
                              className="form-control"
                              onChange={(e) =>
                                setData({
                                  ...Data,
                                  game_master_phone: e.target.value,
                                })
                              }
                            />
                          </p>

                          <p className="form-submit">
                            <input
                              type="submit"
                              value="Send Message"
                              required="required"
                              className="mu-post-btn shadow btn-primary"
                              name="submit"
                            />
                          </p>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="mu-contact-right">
                        <iframe
                          width="100%"
                          height="400"
                          src="https://www.youtube.com/embed/3rGYCPMTv20"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end contact content --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
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
  );
}
