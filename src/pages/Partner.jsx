import React from "react";
import MainLayout from "../layout/MainLayout";
import DoneIcon from "@mui/icons-material/Done";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import abtImage from "../../src/assets/images/abtBG.jpeg";

export default function Partner() {
  return (
    <MainLayout>
      <div className="about-page">
        <div
          class="about-page-header"
          style={{
            background: `linear-gradient(to right, rgba(0,0,0,.8), rgba(0,0,0,.5)),url(${abtImage})`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h1>Our Partners </h1>
              </div>
            </div>
          </div>
        </div>

        <div class="welcome-wrap">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-6 order-2 order-lg-2 pmxh">
                <h1>INTERNATIONAL AFFILIATED ORGANIZATIONS</h1>
                <ul>
                  <li>
                    {" "}
                    <DoneIcon className="done" /> IFY Climate Change Foundation
                    Canada – 2019
                  </li>

                  <li>
                    <DoneIcon className="done" /> The Global Energy
                    Interconnection Development and Cooperation Organization,
                    GEIDCO – 2018
                  </li>
                  <li>
                    <DoneIcon className="done" /> United Nations Convection to
                    Combat Desertification, UNCCD – 2017
                  </li>

                  <li>
                    {" "}
                    <DoneIcon className="done" /> Canadian International Global
                    Partner – 2017
                  </li>
                  <li>
                    {" "}
                    <DoneIcon className="done" /> Africa Development Bank CSO –
                    2015
                  </li>
                  <li>
                    <DoneIcon className="done" /> The Global Network of Civil
                    Society Organisations for Disaster Reduction - 2015
                  </li>
                  <li>
                    <DoneIcon className="done" />
                    United Nations Framework Convention on Climate Change,
                    UNFCCC – 2013
                  </li>
                  <li>
                    {" "}
                    <DoneIcon className="done" /> World Bank Civil Society –
                    2012
                  </li>
                  <li>
                    {" "}
                    <DoneIcon className="done" /> United Nations Economic and
                    social Council - 2012
                  </li>
                </ul>
              </div>

              <div class="col-12 col-lg-6 order-1 order-lg-1 pmxh">
                <h1>LOCAL AFFILIATED ORGANIZATION​S</h1>
                <ul>
                  <li>
                    <DoneIcon className="done" /> Akure North Local Government -
                    2021
                  </li>
                  <li>
                    <DoneIcon className="done" /> Tinws Medical Diagnostics and
                    Research Laboratories, EbeLab – 2020
                  </li>
                  <li>
                    {" "}
                    <DoneIcon className="done" /> Heorg International – 2019
                  </li>
                  <li>
                    {" "}
                    <DoneIcon className="done" />
                    Akure South Local Government - 2019
                  </li>
                  <li>
                    {" "}
                    <DoneIcon className="done" />
                    Akoko South East Local Government - 2019
                  </li>
                  <li>
                    {" "}
                    <DoneIcon className="done" /> Federal Ministry of
                    Environment, Nigeria – 2017
                  </li>
                  <li>
                    {" "}
                    <DoneIcon className="done" /> Diamond Youth Team - 2017
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="help-us">
        <div class="container">
          <div class="row">
            <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">
              <h2>Help us so we can help others</h2>
              <a class="btn orange-border" href="#">
                Donate now
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
