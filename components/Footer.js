import React from "react";
import Link from "next/link";
import {
  LinkedinFilled,
  FacebookFilled,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";
function Footer() {
  return (
    <>
      <div className="bg-secondary mt-5 d-flex justify-content-evenly footer p-3">
        <h1>UBA</h1>
        <ul className="nav">
          <Link href="/about">
            <a className="text-dark nav-link animate__zoomIn animate__animated  fs-5">
              projects
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-dark nav-link animate__fadeInUp animate__animated  fs-5">
              Contact Us
            </a>
          </Link>
        </ul>
      </div>
      <div className="social-links d-flex justify-content-center">
        <LinkedinFilled
          style={{ fontSize: "2rem", color: "#08c" }}
          theme="outlined"
          className="p-3"
        />
        <FacebookFilled
          style={{ fontSize: "2rem", color: "#08c" }}
          theme="outlined"
          className="p-3"
        />
        <TwitterSquareFilled
          style={{ fontSize: "2rem", color: "#08c" }}
          theme="outlined"
          className="p-3"
        />
        <YoutubeFilled
          style={{ fontSize: "2rem", color: "#08c" }}
          theme="outlined"
          className="p-3"
        />
      </div>
    </>
  );
}

export default Footer;
