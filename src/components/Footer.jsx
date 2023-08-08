/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#102C57" }}
    >
      <div className="container p-4 pb-0">
        <section className="">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Guitar Music Theory
              </h6>
              <p>
                Free website to learn about guitar music theory.
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a className="text-white">Acoustic Guitar</a>
              </p>
              <p>
                <a className="text-white">Electric Guitar</a>
              </p>
              <p>
                <a className="text-white">Classical guitar</a>
              </p>
              <p>
                <a className="text-white">Bass guitar</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a className="text-white">Your Account</a>
              </p>
              <p>
                <a className="text-white">Become an Affiliate</a>
              </p>
              <p>
                <a className="text-white">Shipping Rates</a>
              </p>
              <p>
                <a className="text-white">Help</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fas fa-home mr-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> info@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </section>

        <hr className="my-3" />
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3 text-white">
                © 2023 Copyright:
                <a className="text-white" href="https://musictheory-tau.vercel.app/">
                  https://musictheory-tau.vercel.app
                </a>
              </div>
            </div>

            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
