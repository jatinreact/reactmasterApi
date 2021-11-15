import React from "react";
import PageBanner from  "../../../components/commonComponent/PageBanner/PageBanner.js"
import SectionTitle from "../../../components/section-title/SectionTitle";
import PresidentImage from "../../../images/presidentabout.png";
import Directorone from "../../../images/directorone.png";
import Directortwo from "../../../images/directortwo.png";
import TeamLeadone from "../../../images/teamleadone.png";
import TeamLeadtwo from "../../../images/teamleadtwo.png";
import TeamLeadthree from "../../../images/teamleadthree.png";
import Empone from "../../../images/emonthone.png";
import Emptwo from "../../../images/emonthtwo.png";
import Empthree from "../../../images/emontthree.png";
import Empfour from "../../../images/emonthfour.png";

import "./About.css";
import { Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <PageBanner title="AboutUs" dontShowTitle={true} menu={true} />
      <div className="aboutcontainer">
        <div className="abouthead">
          <SectionTitle
            text={"OUR TEAM"}
            description={
              "A separate template for team/about us page. You can add multiple message box blocks, video blocks and team member blocks. There can be member blocks for single, two, three and four members."
            }
          />
        </div>
        <div className="cowcont">
          <div className="headingcontabout">
            <h4>President</h4>
          </div>
          <div className="bodycontabout">
            <img className="aboutimage" src={PresidentImage} alt="logo" />
            <h5 className="h5walatag">
              Lorem ipsum dolor sit amet, consectetur adipiscing eli
            </h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
          </div>
        </div>
        <div className="cowcont">
          <div className="headingcontabout">
            <h4>Directors</h4>
          </div>
          <div className="bodycontabout">
            <Row>
              <Col>
                <img className="aboutimage" src={Directorone} alt="logo" />
                <h5 className="h5walatag">Director 1</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
              </Col>
              <Col>
                <img className="aboutimage" src={Directortwo} alt="logo" />
                <h5 className="h5walatag">Director 2</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="cowcont">
          <div className="headingcontabout">
            <h4>Team Lead</h4>
          </div>
          <div className="bodycontabout">
            <Row>
              <Col>
                <img className="aboutimage" src={TeamLeadone} alt="logo" />
                <h5 className="h5walatag">Team Lead One</h5>
              </Col>
              <Col>
                <img className="aboutimage" src={TeamLeadtwo} alt="logo" />
                <h5 className="h5walatag">Team Lead Two</h5>
              </Col>
              <Col>
                <img className="aboutimage" src={TeamLeadthree} alt="logo" />
                <h5 className="h5walatag">Team Lead Three</h5>
              </Col>
            </Row>
          </div>
        </div>
        <div className="cowcont">
          <div className="headingcontabout">
            <h4>Employee of the month</h4>
          </div>
          <div className="bodycontabout">
            <Row>
              <Col>
                <img className="aboutimag" src={Empone} alt="logo" />
                <h5 className="h5walatag">One</h5>
              </Col>
              <Col>
                <img className="aboutimag" src={Emptwo} alt="logo" />
                <h5 className="h5walatag">Two</h5>
              </Col>
              <Col>
                <img className="aboutimag" src={Empthree} alt="logo" />
                <h5 className="h5walatag">Three</h5>
              </Col>
              <Col>
                <img className="aboutimag" src={Empfour} alt="logo" />
                <h5 className="h5walatag">Four</h5>
              </Col>
            </Row>
          </div>
        </div>
        <div className="video">
          <iframe
            className="main-video"
            width="1200"
            height="400"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          />
        </div>
      </div>
    </div>
  );
};

export default About;