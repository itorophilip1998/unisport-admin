import React from 'react';
    /* eslint-disable */

export default function Footer() {
  return (
    <>
      {/* <!-- Start footer --> */}
      <footer id="mu-footer">
        {/* <!-- start footer top --> */}
        <div className="mu-footer-top">
          <div className="container">
            <div className="mu-footer-top-area">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="mu-footer-widget">
                    <h4>Information</h4>
                    <ul>
                      <li>
                        <a href="javascript:void(0)">About Us</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Features</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Course</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Event</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Sitemap</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Term Of Use</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="mu-footer-widget">
                    <h4>Student Help</h4>
                    <ul>
                      <li>
                        <a href="javascript:void(0)">Get Started</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">My Questions</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Download Files</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Latest Course</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Academic News</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="mu-footer-widget">
                    <h4>News letter</h4>
                    <p>Get latest update, news & academic offers</p>
                    <form className="mu-subscribe-form">
                      <input type="email" placeholder="Type your Email" />
                      <button className="mu-subscribe-btn" type="submit">
                        Subscribe!
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="mu-footer-widget">
                    <h4>Contact</h4>
                    <address>
                      <p>Unisport</p>
                      <p>Phone:09024195493 </p>
                      <p>Website: www.unisport.io</p>
                      <p>Email: inisport@email.com</p>
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end footer top --> */}
        {/* <!-- start footer bottom --> */}
        <div className="mu-footer-bottom">
          <div className="container">
            <div className="mu-footer-bottom-area">
              <p>&copy; All Right Reserved. Designed by{"Itoro Philip"}</p>
            </div>
          </div>
        </div>
        {/* <!-- end footer bottom --> */}
      </footer>
      {/* <!-- End footer --> */}
    </>
  );
}
