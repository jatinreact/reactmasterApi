import React from "react";
import PageBanner from "../../../components/commonComponent/PageBanner/PageBanner";
import { useHistory } from "react-router";
import { Form } from "react-bootstrap";

import "./Services.css";
import SectionTitle from "../../../components/section-title/SectionTitle";

const Services = () => {
  const history = useHistory();
  return (
    <div>
      <PageBanner title="Services" dontShowTitle={true} menu={true} />
      <div className="servicehead">
        {/* <div className="header-name">
          <b className="star"></b> <b>OUR SERVICES</b> <b className="star"></b>
        </div>
      </div>
      <div className="body">
        <p style={{ fontSize: "16px" }}>
          <center>
            A separate template for services page. You can add multiple message
            box blocks, video blocks and services blocks. There can be service
            blocks for single, two, three and four members.
          </center>
        </p> */}
        <SectionTitle
          text={"Our Services"}
          description={
            " A separate template for services page. You can add multiple message box blocks, video blocks and services blocks. There can be service blocks for single, two, three and four members."
          }
        />
      </div>
      <br />

      <div className="main1">
        <div className="Packaging">
          <img
            src="https://cdn.shopify.com/s/files/1/3012/8606/files/packaging_400x400_crop_center.png?v=1624722642"
            alt="Packaging"
            className="img"
          />
          <br />
          <br />

          <center>
            <b style={{ fontSize: "20px", fontFamily: "Oswald" }}>Packaging</b>
          </center>
          <p style={{ fontSize: "15px" }}>
            <center>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </center>
          </p>
        </div>
        <div className="Delivery">
          <img
            src="https://cdn.shopify.com/s/files/1/3012/8606/files/delivery_400x400_crop_center.png?v=1624722642"
            alt="Delivery"
            className="img"
          />
          <br />
          <br />
          <center>
            <b style={{ fontSize: "20px", fontFamily: "Oswald" }}>Delivery</b>
          </center>
          <p style={{ fontSize: "15px" }}>
            <center>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </center>
          </p>
        </div>
        <div className="Support">
          <img
            src="https://cdn.shopify.com/s/files/1/3012/8606/files/support_400x400_crop_center.png?v=1624722642"
            alt="Support"
            className="img"
          />
          <br />
          <br />
          <center>
            <b style={{ fontSize: "20px", fontFamily: "Oswald" }}>Support</b>
          </center>
          <p style={{ fontSize: "15px" }}>
            <center>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </center>
          </p>
        </div>
        <br />
      </div>
      <div className="main2">
        <div className="Storage">
          <img
            src="https://cdn.shopify.com/s/files/1/3012/8606/files/storage_300x300_crop_center.png?v=1624722911"
            alt="Storage"
            className="img"
          />
          <br />
          <br />
          <center>
            <b style={{ fontSize: "20px", fontFamily: "Oswald" }}>Storage</b>
          </center>
          <p style={{ fontSize: "15px" }}>
            <center>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </center>
          </p>
        </div>
        <div className="Manufacture">
          <img
            src="https://cdn.shopify.com/s/files/1/3012/8606/files/manufacture_300x300_crop_center.png?v=1624722642"
            alt="Manufacture"
            className="img"
          />
          <br />
          <br />
          <center>
            <b style={{ fontSize: "20px", fontFamily: "Oswald" }}>
              Manufacture
            </b>
          </center>
          <p style={{ fontSize: "15px" }}>
            <center>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </center>
          </p>
        </div>
        <div className="Showcase">
          <img
            src="https://cdn.shopify.com/s/files/1/3012/8606/files/showcase_300x300_crop_center.png?v=1624723013"
            alt="Showcase"
            className="img"
          />
          <br />
          <br />
          <center>
            <b style={{ fontSize: "20px", fontFamily: "Oswald" }}>Showcase</b>
          </center>
          <p style={{ fontSize: "15px" }}>
            <center>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </center>
          </p>
        </div>
        <div className="Deliver">
          <img
            src="https://cdn.shopify.com/s/files/1/3012/8606/files/support1_300x300_crop_center.png?v=1624722911"
            alt="Deliver"
            className="img"
          />
          <br />
          <br />
          <center>
            <b style={{ fontSize: "20px", fontFamily: "Oswald" }}>Deliver</b>
          </center>
          <p style={{ fontSize: "15px" }}>
            <center>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </center>
          </p>
        </div>
      </div>
      <br />
      <div className="video">
        <iframe
          className="main-video"
          width="1200"
          height="400"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Services;