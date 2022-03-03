import React from "react";
// import { Header } from "../layouts/Header";
import {  Link } from "react-router-dom";

export default function home() {
  return (
    <>
      {/* <!-- End search box -->
  <!-- Start Slider --> */}
      <section id="mu-slider">
        {/* <!-- Start single slider item --> */}
        <div className="mu-slider-single">
          <div className="mu-slider-img">
            <figure>
              <img src="assets/img/slider/bg1.jpg" alt="img" />
               
            </figure>
          </div>
          <div className="mu-slider-content">
            <h4>Welcome To Unisport</h4>
            <span></span>
            <h2>Make Sport Fun</h2>
            <p>
              For sports fans, sports are the epitome of hard work and
              dedication. To get to the pinnacle of their sport, even the most
              naturally gifted athletes have to give it their all.
            </p>
            <Link to="/register" className="mu-read-more-btn rounded-x">
              Register Now
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- End Slider -->
  <!-- Start service  --> */}
      <section id="mu-service">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="mu-service-area">
                {/* <!-- Start single service --> */}
                <div className="mu-service-single">
                  <span className="fa fa-baseball-ball"></span>
                  <h3>FootBall</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima officiis, deleniti dolorem exercitationem
                    praesentium, est!
                  </p>
                </div>
                {/* <!-- Start single service -->
            <!-- Start single service --> */}
                <div className="mu-service-single">
                  <span className="fas fa-football-ball "></span>

                  <h3>Rugby</h3> 
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima officiis, deleniti dolorem exercitationem
                    praesentium, est!
                  </p>
                </div>
                {/* <!-- Start single service -->
            <!-- Start single service --> */}
                <div className="mu-service-single">
                  <span className="fa fa-table"></span>
                  <h3>BaseBall</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima officiis, deleniti dolorem exercitationem
                    praesentium, est!
                  </p>
                </div>
                {/* <!-- Start single service --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End service  --> */}

      {/* <!-- Start about us --> */}
      <section id="mu-about-us">
        <div className="container" id="about">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-about-us-area">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="mu-about-us-left">
                      {/* <!-- Start Title --> */}
                      <div className="mu-title">
                        <h2>About Us</h2>
                      </div>
                      {/* <!-- End Title --> */}
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Rerum pariatur fuga eveniet soluta aspernatur rem,
                        nam voluptatibus voluptate voluptates sapiente,
                        inventore. Voluptatem, maiores esse molestiae.
                      </p>
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </li>
                        <li>Saepe a minima quod iste libero rerum dicta!</li>
                        <li>
                          Voluptas obcaecati, iste porro fugit soluta
                          consequuntur. Veritatis?
                        </li>
                        <li>
                          Ipsam deserunt numquam ad error rem unde, omnis.
                        </li>
                        <li>
                          Repellat assumenda adipisci pariatur ipsam eos
                          similique, explicabo.
                        </li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Perspiciatis quaerat harum facilis excepturi et?
                        Mollitia!
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mu-about-us-right">
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
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End about us --> */}

      {/* <!-- Start testimonial --> */}
      <section id="mu-testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-testimonial-area">
                <div
                  id="mu-testimonial-slide"
                  className="mu-testimonial-content"
                >
                  
                  {/* <!-- end testimonial single item --> */}
                  {/* <!-- start testimonial single item --> */}
                  <div className="mu-testimonial-item">
                    <div className="mu-testimonial-quote">
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Voluptatem rerum soluta aperiam blanditiis
                          obcaecati eveniet aliquam consequatur nobis eaque id.
                        </p>
                      </blockquote>
                    </div>
                    <div className="mu-testimonial-img">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="img"
                      />
                    </div>
                    <div className="mu-testimonial-info">
                      <h4>Rebaca Michel</h4>
                      <span>Happy Parent</span>
                    </div>
                  </div>
                  {/* <!-- end testimonial single item --> */} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End testimonial --> */}
    </>
  );
}
