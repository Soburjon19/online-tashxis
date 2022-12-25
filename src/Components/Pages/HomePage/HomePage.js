import React from "react";
import "../Footer/Footer.css";
import Services from "../Services/Services";
import Benifites from "./Benifites/Benifites";
import ClickMedicProdcuts from "./ClickMedicProducts/ClickMedicProdcuts";
import ConsumerSatisfaction from "./ConsumerSatisfacton/ConsumerSatisfaction";
import "./Home.css";
import ViewDetails from "./ViewDetails/ViewDetails";

const HomePage = () => {
  return (
    <div>
      <div className="bannerBg">
        <div className="row">
          <div
            className="col-md-6 col-lg-6 col-12"
            style={{ textAlign: "left" }}
          >
            <p className="fw-bold contact-heading contactTag">
            Tezda o'z tashxisingizni bilib oling

            </p>
            <p
              className="text-white contact-heading"
              style={{ textAlign: "left", marginTop: "-10px" }}
            >
              Sog'lig'ingiz haqida qayg'uring!
            </p>
            <button className="contact-btn btn btn-outline-dark text-white mb-3">
              Ko'proq bilish
              <i className="ms-2 fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-12"></div>
          <div className="col-md-4 col-lg-4 col-sm-12 mt-5">
            <img
              className="img-fluid"
              src="https://i.pinimg.com/originals/50/18/58/50185886dd0bfd2c8fc231044423e30f.gif"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-0 col-md-6 col-sm-12 col-lg-12">
            <div className="row mt-2">
              <div className="col-md-12 col-lg-12 col-sm-12">
                <img
                  className="productImg img-fluid bg-white px-2 rounded"
                  src="https://milvikbd.com/_next/image?url=%2FUnderwriter-logo.png&w=384&q=75"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="afterbanner">
        <div className="row text-start p-5">
          <div className="col-md-5  col-lg-5 col-sm-12 ">
            <h2 className="fw-bold primarycolor">
              Har bir oyla o'z salomatligini saqlashga javobgardir
              <br />
              Biz bunda ko'makchimiz
            </h2>
          </div>
          <div className="col-md-7 col-lg-7  col-sm-12 text-dark fs-6">
            <p className="afterbannePText">
            Biz  sog'liqni saqlash sohasida yetakchimiz. Biz  barchaga oilaviy sog'liqni saqlash xizmatlarini taklif etamiz. Ortiqcha vaqtni tejagan holda raqamli sog'liqni saqlash  taqdim etish uchun web texnologiyalardan foydalangan holda xizmat ko'rsatmoqdamiz.
            </p>
            <br />
            <br />
            <div style={{ marginTop: "-18px" }}>
              <button className="btn-warning btn me-2 fw-bold text-dark">
                Ko'proq biling
              </button>
              <button className="btn-danger btn fw-bold">Kirib ko'ring</button>
            </div>
          </div>
        </div>
      </div>

      <div className="productCM">
        <div className="container p-5">
          <ClickMedicProdcuts></ClickMedicProdcuts>
        </div>
      </div>
      {/* <div className="afterbanner py-4">
        <Services></Services>
      </div> */}
      <div className="my-5 container">
        <ConsumerSatisfaction></ConsumerSatisfaction>
      </div>
      <div className="my-5 container">
        <Benifites></Benifites>
      </div>
      <div className="my-5 container">
        <ViewDetails></ViewDetails>
      </div>
    </div>
  );
};

export default HomePage;
