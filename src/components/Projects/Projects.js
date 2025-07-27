import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
// import Dashboard from "../../Assets/Projects/Dashboard_1.png";
import Portfolio from "../../Assets/Projects/Rup_portfolio.png";
// import Shopping_Karo from "../../Assets/Projects/Shopping_Karo.png";
import login from "../../Assets/Projects/login_page.jpg";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            {/* <ProjectCard
              imgPath={Shopping_Karo}
              title="Shopping_Karo"
              description={
                <ul>
                  <li>
                    Developed a full-fledged e-commerce platform with user
                    authentication, product management, shopping cart, and
                    payment integration using Stripe.
                  </li>
                  <li>
                    Implemented complex state management using Redux to handle
                    user sessions, cart updates, and product filtering, ensuring
                    smooth user experience.
                  </li>
                </ul>
              }
              ghLink=
              demoLink=
            /> */}
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Rupesh Portfolio"
              description={
                <ul>
                  <li>
                    Developed a responsive personal portfolio website showcasing
                    projects, skills, and contact information, featuring smooth
                    animations & supports both dark and light mode.
                  </li>
                  <li>
                    Deployed using Netlify, ensuring fast loading times and
                    seamless navigation across devices.
                  </li>
                </ul>
              }
              ghLink="https://github.com/R-Ganvir/Rupesh_Portfolio"
              demoLink="https://rupesh-ganvir-portfolio.netlify.app"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            {/* <ProjectCard
              imgPath={Dashboard}
              title="Performance Monitoring Dashboard"
              description={
                <ul>
                  <li>
                    This dashboard is typically used for managing and monitoring
                    business operations, especially for a restaurant,
                    e-commerce, or delivery service.
                  </li>
                  <li>
                    It allows stakeholders to track key metrics, visualize data
                    trends, and gain insights into business performance,
                    customer behavior, and financial health.
                  </li>
                </ul>
              }
              ghLink=""
              demoLink=""
            /> */}
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={login}
              title="Login Page"
              description={
                <ul>
                  <li> Created my first website using only HTML and CSS, focusing on clean and semantic markup. 
                  </li> 
                  <li> Designed and implemented responsive layouts and visually appealing styles without using JavaScript or external frameworks. 
                  </li>
                </ul>
              }
              ghLink="https://github.com/R-Ganvir/login"
              demoLink="https://r-ganvir.github.io/login/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
