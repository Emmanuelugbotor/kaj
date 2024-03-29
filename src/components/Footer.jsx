import React from "react";
import CallIcon from "@mui/icons-material/Call";
import NearMeIcon from "@mui/icons-material/NearMe";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { WhatsApp } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer class="site-footer">
      <div class="footer-widgets">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-3">
              <div class="foot-about">
                <h2>
                  <a
                    class="foot-logo"
                    href="#"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src="images/loger.jpeg"
                      alt=""
                    />
                  </a>
                </h2>
                <p>
                  The organization was formed in 2005 with brilliant ideas of
                  getting The Youth and The young people together as to really
                  be the engine room of the society whilist they are useful to
                  themselves and contributing the social changes and development
                  to the society at large.
                </p>
                <ul class="d-flex flex-wrap align-items-center">
                  <li>
                    <a
                      href="https://www.facebook.com/Kejibaus"
                      target={"_blank"}
                    >
                      <FacebookIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/2348094396178" target={"_blank"}>
                      <WhatsApp />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/kejibaus-youth-development-initiative-48ba18240"
                      target="_blank"
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
              <h2>Useful Links</h2>
              <ul>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <a href="/#our-causes">Causes</a>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/partners">Partners</Link>
                </li>
                <li>
                  <Link to="/teams">Our Team</Link>
                </li>

                <li>
                  <a href="/#Contact">Contact</a>
                </li>
              </ul>
            </div>

            <div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
              <div class="foot-latest-news"></div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
              <div class="foot-contact">
                <h2>Contact</h2>
                <ul>
                  <li>
                    <CallIcon className="address" />
                    <span>
                      <a href="tel:+2348094396178">(+234) 809 439 6178</a>
                    </span>
                  </li>
                  <li>
                    <MailIcon className="address" />
                    <span>
                      <a href="mailto:kejibaus@yahoo.com">kejibaus@yahoo.com</a>
                    </span>
                  </li>
                  <li>
                    <NearMeIcon className="address" />
                    <span>
                      NO.15 Alakure Street, Akure. Ondo State. Nigeria
                    </span>
                  </li>
                </ul>
              </div>
              <div class="subscribe-form">
                <form class="d-flex flex-wrap align-items-center">
                  <input type="email" placeholder="Your email" />
                  <input type="submit" value="send" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bar">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <p class="m-0">
                Copyright &copy; 2022 All rights reserved | Kejiraus Enterprise
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
