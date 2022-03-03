import React from 'react'
import "../scss/style.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      {/* <!--START SCROLL TOP BUTTON --> */}
      <a className="scrollToTop" href="javascripts:void(0)">
        <i className="fa fa-angle-up"></i>
      </a>

      {/* <header id="mu-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="mu-header-area">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <div className="mu-header-top-left">
                      <div className="mu-top-email">
                        <i className="fa fa-envelope"></i>
                        <span>unisport@email.com</span>
                      </div>
                      <div className="mu-top-phone">
                        <i className="fa fa-phone"></i>
                        <span>09024195493</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <div className="mu-header-top-right">
                      <nav>
                        <ul className="mu-top-social-nav">
                          <li>
                            <a href="https://web.facebook.com/?_rdc=1&_rdr">
                              <span className="fa fa-facebook"></span>
                            </a>
                          </li>

                          <li>
                            <a href="https://www.linkedin.com/in/itoro-philip-1b2182225/">
                              <span className="fa fa-linkedin"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://web.whatsapp.com/">
                              <span className="fa fa-whatsapp"></span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      {/* <!-- Start menu --> */}
      <section id="mu-menu">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container">
            <div className="navbar-header">
              {/* <!-- FOR MOBILE VIEW COLLAPSED BUTTON --> */}
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              {/* <!-- LOGO -->               */}
              {/* <!-- TEXT BASED LOGO --> */}
              {/* <a className="navbar-brand" href="/">
                <i className="fa fa-university"></i>
                <span>Unisport</span>
              </a> */}
              {/* <!-- IMG BASED LOGO  --> */}
              <a className="navlogo d-sm-block d-md-none" href="/">
                <img src="logo.png" alt="logo" /> UNISPORT
              </a>
              <div id="navbar" className="navbar-collapse  collapse">
                <ul  id="top-menu"   className="nav navbar-nav navbar-left  main-nav"     >
                  <a className="navbar-brand d-sm-none " href="/">
                    <img src="logo.png" alt="logo" /> UNISPORT
                  </a>
                  <li  >
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>

                  <li>
                    <Link
                      to={{
                        pathname: "/",
                        hash: "#contact",
                      }}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/",
                        hash: "#about",
                      }}
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!--/.nav-collapse -->         */}
            </div>
          </div>
        </nav>
      </section>

      {/* search */}
      <div id="mu-search">
        <div className="mu-search-area">
          <button className="mu-search-close">
            <span className="fa fa-close"></span>
          </button>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <form className="mu-search-form">
                  <input
                    type="search"
                    placeholder="Type Your Keyword(s) & Hit Enter"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
