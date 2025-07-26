import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/R_logo.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "3em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p
              className="home-about-body"
              style={{ fontSize: "1.2em", lineHeight: "1.6" }}
              data-aos="fade-up"
            >
              <br />
              I am a passionate <i className="primary-header">Front-End Developer</i> and <i className="primary-header">.NET Full Stack Developer</i> specializing in building responsive and engaging web and enterprise applications. I leverage modern technologies such as <i className="primary-header">React.js</i> and <i className="primary-header">.NET Core</i> to deliver scalable and efficient solutions.
              <br />
              <br />
              My expertise includes <i className="primary-header">state management</i>, <i className="primary-header">performance optimization</i>, and robust <i className="primary-header">backend/API development with .NET Core</i>. I collaborate closely with UI/UX designers to create intuitive and user-friendly interfaces, ensuring seamless integration between front-end and back-end systems.
              <br />
              <br />
              I am always eager to embrace new technologies and best practices to innovate and enhance user experiences continuously.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid avatar-circle"
                alt="avatar"
              />
            </Tilt>
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/R-Ganvir"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:rupeshnganvir@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rupeshganvir"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
