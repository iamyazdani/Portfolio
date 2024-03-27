import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Sample 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum justo et nibh ullamcorper, eget rutrum nisi aliquet. Mauris euismod arcu ac sapien tincidunt, nec mollis nulla consectetur. Sed aliquam ex ac purus tincidunt, at convallis est finibus. Integer commodo tellus id elit efficitur, nec fermentum elit volutpat. Nullam nec purus nec odio bibendum posuere. Vestibulum vel sagittis velit. Nullam a lectus nec enim vehicula eleifend nec sed lorem."
              ghLink="/"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sample 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum justo et nibh ullamcorper, eget rutrum nisi aliquet. Mauris euismod arcu ac sapien tincidunt, nec mollis nulla consectetur. Sed aliquam ex ac purus tincidunt, at convallis est finibus. Integer commodo tellus id elit efficitur, nec fermentum elit volutpat. Nullam nec purus nec odio bibendum posuere. Vestibulum vel sagittis velit. Nullam a lectus nec enim vehicula eleifend nec sed lorem."
              ghLink="/"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sample 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum justo et nibh ullamcorper, eget rutrum nisi aliquet. Mauris euismod arcu ac sapien tincidunt, nec mollis nulla consectetur. Sed aliquam ex ac purus tincidunt, at convallis est finibus. Integer commodo tellus id elit efficitur, nec fermentum elit volutpat. Nullam nec purus nec odio bibendum posuere. Vestibulum vel sagittis velit. Nullam a lectus nec enim vehicula eleifend nec sed lorem."
              ghLink="/"
              demoLink="/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Sample 4"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum justo et nibh ullamcorper, eget rutrum nisi aliquet. Mauris euismod arcu ac sapien tincidunt, nec mollis nulla consectetur. Sed aliquam ex ac purus tincidunt, at convallis est finibus. Integer commodo tellus id elit efficitur, nec fermentum elit volutpat. Nullam nec purus nec odio bibendum posuere. Vestibulum vel sagittis velit. Nullam a lectus nec enim vehicula eleifend nec sed lorem."
              ghLink="/"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Sample 5"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum justo et nibh ullamcorper, eget rutrum nisi aliquet. Mauris euismod arcu ac sapien tincidunt, nec mollis nulla consectetur. Sed aliquam ex ac purus tincidunt, at convallis est finibus. Integer commodo tellus id elit efficitur, nec fermentum elit volutpat. Nullam nec purus nec odio bibendum posuere. Vestibulum vel sagittis velit. Nullam a lectus nec enim vehicula eleifend nec sed lorem."
              ghLink="/"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Sample 6"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum justo et nibh ullamcorper, eget rutrum nisi aliquet. Mauris euismod arcu ac sapien tincidunt, nec mollis nulla consectetur. Sed aliquam ex ac purus tincidunt, at convallis est finibus. Integer commodo tellus id elit efficitur, nec fermentum elit volutpat. Nullam nec purus nec odio bibendum posuere. Vestibulum vel sagittis velit. Nullam a lectus nec enim vehicula eleifend nec sed lorem."
              ghLink="/"
              demoLink="/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
