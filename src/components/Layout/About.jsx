import React, { Fragment } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "../Header/Header";

import profile from "../icons/dp.svg";
import proj from "../icons/project.svg";
import "./about.css";

const About = () => {
  return (
    <Fragment>
      <CssBaseline>
        <div className="about-section background-img">
          <Header />
          <div className="row first-row">
            <img
              src={profile}
              alt="profile"
              className="about-profile col-lg-12 col-sm-12 "
            />

            <div className="container about-heading col-lg-12 col-sm-12">
              <h1>
                Hi, I'm <span className="highlight">Juvie. </span>I build &
                design apps and sites just like this one.
              </h1>
            </div>
          </div>

          <div className="container about-app">
            <div className="row proj-about-row">
              <div className="col-sm-12">
                <img src={proj} alt="project drawing" className="proj-about " />
              </div>

              <div className="col-sm-12 proj-content text-center">
                <h1>
                  {" "}
                  <span className="highlight">My Daily Guide App </span>
                  is a web travel application using Google Maps.With
                  Geolocation, Google Maps API. Fetching restaurants, hotels and
                  attractions based on location from specialized Rapid APIs,
                  data filtering and much more.{" "}
                </h1>
              </div>
            </div>
          </div>

          <div className="container row socials">
            <div className="col-lg-4 col-sm-1">
              <a href="https://github.com/juvielone">
                <i className="fab fa-github fa-3x sicon"></i>
              </a>
            </div>

            <div className="col-lg-4 col-sm-1">
              <a href="www.linkedin.com/in/joshualagos">
                <i class="fab fa-linkedin fa-3x sicon"></i>
              </a>
            </div>

            <div className="col-lg-4 col-sm-1">
              <a href="mailto: juvielonelagos27@gmail.com">
                <i class="far fa-envelope fa-3x sicon"></i>
              </a>
            </div>
          </div>
        </div>
      </CssBaseline>
    </Fragment>
  );
};

export default About;
