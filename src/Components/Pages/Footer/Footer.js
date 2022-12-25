import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Img/Click-medic.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerBackground p-5">
        <div className="container">
          <div className="row">
            <div className="container col-md-4 col-lg-4 col-sm-12">
              <img width="190px" className="logo shadow" src={logo} alt="" />
              {/* <p className="text-start mt-2 ">
                Click Medic (known globally as BIMA) uses mobile technology to
                deliver affordable insurance and health products to underserved
                consumers and their families in emerging markets.
              </p> */}
            </div>
            <div className="col-md-4  col-lg-4 text-start col-sm-12 footerContact">
              <h5 className="footerAlert mt-3 mb-4 shadow">biz bilan Aloqa</h5>
              <small>online tashxis</small> <br />
              <small>Email: soburjon@icloud.com</small> <br />
              {/* <small>Address: AMBON Complex (12th Floor), </small> <br />  */}
              {/* <small>
                99 Bir Uttam AK Khandakar Road, Mohakhali C/A, Dhaka-1212.
              </small>{" "} */}
              <small>Phone Soburjon: +998974545686 </small> <br />
              <small> Phone Davron: +998998290833 </small> <br />
              <small>Phone Islom: +998998005034</small> <br />
            </div>
            <div className="col-md-4 col-lg-4 text-start col-sm-12 footerContact">
              <h5 className="footerAlert mt-3 mb-4 shadow">kampaniya</h5>
              <Link to="/">Uy</Link> <br />
              <Link to="/about-us">Haqida </Link> <br />
              <Link to="/">Doctors</Link> <br />
              <Link to="/">Karyera</Link> <br />
              <Link to="/faq">FAQ</Link> <br />
              <Link to="/">Registratsiya</Link> <br />
            </div>
            {/* <div className="col-md-3 col-lg-3 col-sm-12 text-start">
              <div className="row">
                <h3 className="footerAlert mt-3 mb-4 shadow text-start">
                  Follow us on
                </h3>
                <div className="col-md-7 col-lg-7 col-12">
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src="https://milvikbd.com/_next/image?url=%2Ffb.svg&w=32&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        src="https://milvikbd.com/_next/image?url=%2Flinkedin.svg&w=32&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        src="https://milvikbd.com/_next/image?url=%2Ftwitter.svg&w=32&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3">
                      <img
                        src="https://milvikbd.com/_next/image?url=%2Finsta.svg&w=32&q=75"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-5 col-12"></div>
              </div>
              <div className="row mt-3">
                <h5 className="alert alert-danger fw-bold mt-3">We Accept</h5>
                <div className="col-md-12 col-lg-12">
                  <div className="row">
                    <div className="col-md-3 col-lg-3 mb-3">
                      <img
                        width="40px"
                        src="https://milvikbd.com/_next/image?url=%2FUpay.png&w=128&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 mb-3">
                      <img
                        width="60px"
                        src="https://milvikbd.com/_next/image?url=%2FBKash.png&w=384&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 mb-3">
                      <img
                        width="70px"
                        src="https://milvikbd.com/_next/image?url=%2FNagad.png&w=256&q=75"
                        alt=""
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 mb-3">
                      <img
                        width="50px"
                        src="https://milvikbd.com/_next/image?url=%2Fdutch-bangla-rocket-logo.png&w=256&q=75"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="bg-primary p-3 text-white">
        &copy; All copyright Terms & conditions are reserved by Click Medic
      </div> */}
    </>
  );
};

export default Footer;
