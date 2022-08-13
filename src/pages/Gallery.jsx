import React from "react";
import MainLayout from "../layout/MainLayout";
import abtImage from "../../src/assets/images/abtBG.jpeg";

export default function Gallery() {
  return (
    <MainLayout>
      <div className="single-page portfolio">
        <div
          className="page-header"
          style={{
            background: `linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)),url(${abtImage})`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Our Gallery</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-wrap">
          <div className="container">
            <div className="row portfolio-container">
              <div className="visible">
                <div className="portfolio-cont">
                  <a href="#">
                    <img src="images/gala-1.jpg" alt="" />
                  </a>
                  <h3 className="entry-title">
                    <a href="#">2017 commemoration of desertification day</a>
                  </h3>
                  <h4>2017 Causes</h4>
                </div>
              </div>

              <div className=" visible">
                <div className="portfolio-cont">
                  <a href="#">
                    <img src="images/gala-2.jpg" alt="" />
                  </a>
                  <h3 className="entry-title">
                    <a href="#">Toys for Children Campaign</a>
                  </h3>
                  <h4>2018 Causes</h4>
                </div>
              </div>

              <div className=" visible">
                <div className="portfolio-cont">
                  <a href="#">
                    <img src="images/gala-3.jpg" alt="" />
                  </a>
                  <h3 className="entry-title">
                    <a href="#"> Student wing of our organisation</a>
                  </h3>
                  <h4>2017 Causes</h4>
                </div>
              </div>

              <div className=" visible">
                <div className="portfolio-cont">
                  <a href="#">
                    <img src="images/gala-4.jpg" alt="" />
                  </a>
                  <h3 className="entry-title">
                    <a href="#">
                      Sensitising people about the effects of Corona Virus
                      (Covid-19) March 2020
                    </a>
                  </h3>
                  <h4>2020 Causes</h4>
                </div>
              </div>

              <div className=" visible">
                <div className="portfolio-cont">
                  <a href="#">
                    <img src="images/gala-5.jpg" alt="" />
                  </a>
                  <h3 className="entry-title">
                    <a href="#">
                      {" "}
                      Our team of delegation with Japanese Government
                      representative deliberating on sustainability
                    </a>
                  </h3>
                  <h4>2018 Causes</h4>
                </div>
              </div>

              <div className=" visible">
                <div className="portfolio-cont">
                  <a href="#">
                    <img src="images/gala-9.jpg" alt="" />
                  </a>
                  <h3 className="entry-title">
                    <a href="#">Toys for Children Campaign</a>
                  </h3>
                  <h4>2018 Causes</h4>
                </div>
              </div>

              <div className=" visible">
                <div className="portfolio-cont">
                  <a href="#">
                    <img src="images/gala-10.jpg" alt="" />
                  </a>
                  <h3 className="entry-title">
                    <a href="#">Toys for Children Campaign</a>
                  </h3>
                  <h4>2018 Causes</h4>
                </div>
              </div>

              <div className=" visible">
                <div className="portfolio-cont">
                  <a href="#">
                    <img src="images/gala-11.jpg" alt="" />
                  </a>
                  <h3 className="entry-title">
                    <a href="#">
                      {" "}
                      Sensitising people about the effects of Corona Virus
                      (Covid-19) March 2020
                    </a>
                  </h3>
                  <h4>2020 Causes</h4>
                </div>
              </div>

              <div className=" visible">
                <div className="portfolio-cont">
                  <a href="#">
                    <img src="images/gala-12.jpg" alt="" />
                  </a>
                  <h3 className="entry-title">
                    <a href="#">Water for Children AID</a>
                  </h3>
                  <h4>2018 Causes</h4>
                </div>
              </div>

              <div className=" visible">
                <div className="portfolio-cont">
                  <a href="#">
                    <img src="images/gala-13.jpg" alt="" />
                  </a>
                  <h3 className="entry-title">
                    <a href="#">Water for Children AID</a>
                  </h3>
                  <h4>2017 Causes</h4>
                </div>
              </div>

              <div className=" visible">
                <div className="portfolio-cont">
                  <a href="#">
                    <img src="images/gala-14.jpg" alt="" />
                  </a>
                  <h3 className="entry-title">
                    <a href="#">Toys for Children Campaign</a>
                  </h3>
                  <h4>2017 Causes</h4>
                </div>
              </div>

              <div className=" visible">
                <div className="portfolio-cont">
                  <a href="#">
                    <img src="images/gala-15.jpg" alt="" />
                  </a>
                  <h3 className="entry-title">
                    <a href="#">Toys for Children Campaign</a>
                  </h3>
                  <h4>2018 Causes</h4>
                </div>
              </div>

              <div className=" visible">
                <div className="portfolio-cont">
                  <a href="#">
                    <img src="images/gala-17.jpg" alt="" />
                  </a>
                  <h3 className="entry-title">
                    <a href="#">Toys for Children Campaign</a>
                  </h3>
                  <h4>2018 Causes</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
