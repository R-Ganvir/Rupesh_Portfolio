import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiDotnet,
  DiReact,
  DiNodejs,
  DiGit,
  DiHtml5,
  DiCss3,
  DiMsqlServer,
  DiAngularSimple
} from "react-icons/di";
import { SiTailwindcss, SiRedux, SiMui } from "react-icons/si";

const techStack = [
  { icon: <DiDotnet />, tooltip: ".NET" },
  { icon: <DiReact />, tooltip: "React" },
  { icon: <DiJavascript1 />, tooltip: "JavaScript" },
  { icon: <DiMsqlServer />, tooltip: "SQL Server" },
  { icon: <DiHtml5 />, tooltip: "HTML5" },
  { icon: <DiCss3 />, tooltip: "CSS3" },
  { icon: <DiAngularSimple />, tooltip: "Angular" },
  { icon: <DiGit />, tooltip: "Git" },
  { icon: <DiNodejs />, tooltip: "Node.js" },
  { icon: <SiRedux />, tooltip: "Redux" },
  { icon: <SiTailwindcss />, tooltip: "Tailwind CSS" },
  { icon: <SiMui />, tooltip: "Material-UI" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tech.tooltip}</Tooltip>}
          >
            <div>{tech.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
