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
<<<<<<< HEAD
              title="Sample 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum justo et nibh ullamcorper, eget rutrum nisi aliquet. Mauris euismod arcu ac sapien tincidunt, nec mollis nulla consectetur. Sed aliquam ex ac purus tincidunt, at convallis est finibus. Integer commodo tellus id elit efficitur, nec fermentum elit volutpat. Nullam nec purus nec odio bibendum posuere. Vestibulum vel sagittis velit. Nullam a lectus nec enim vehicula eleifend nec sed lorem."
=======
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
>>>>>>> b9af5eda05b2c5138b55d5493a2d1ba7c2b90d17
              ghLink="/"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
<<<<<<< HEAD
              title="Sample 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum justo et nibh ullamcorper, eget rutrum nisi aliquet. Mauris euismod arcu ac sapien tincidunt, nec mollis nulla consectetur. Sed aliquam ex ac purus tincidunt, at convallis est finibus. Integer commodo tellus id elit efficitur, nec fermentum elit volutpat. Nullam nec purus nec odio bibendum posuere. Vestibulum vel sagittis velit. Nullam a lectus nec enim vehicula eleifend nec sed lorem."
=======
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
>>>>>>> b9af5eda05b2c5138b55d5493a2d1ba7c2b90d17
              ghLink="/"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
<<<<<<< HEAD
              title="Sample 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum justo et nibh ullamcorper, eget rutrum nisi aliquet. Mauris euismod arcu ac sapien tincidunt, nec mollis nulla consectetur. Sed aliquam ex ac purus tincidunt, at convallis est finibus. Integer commodo tellus id elit efficitur, nec fermentum elit volutpat. Nullam nec purus nec odio bibendum posuere. Vestibulum vel sagittis velit. Nullam a lectus nec enim vehicula eleifend nec sed lorem."
=======
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
>>>>>>> b9af5eda05b2c5138b55d5493a2d1ba7c2b90d17
              ghLink="/"
              demoLink="/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
<<<<<<< HEAD
              title="Sample 4"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum justo et nibh ullamcorper, eget rutrum nisi aliquet. Mauris euismod arcu ac sapien tincidunt, nec mollis nulla consectetur. Sed aliquam ex ac purus tincidunt, at convallis est finibus. Integer commodo tellus id elit efficitur, nec fermentum elit volutpat. Nullam nec purus nec odio bibendum posuere. Vestibulum vel sagittis velit. Nullam a lectus nec enim vehicula eleifend nec sed lorem."
=======
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
>>>>>>> b9af5eda05b2c5138b55d5493a2d1ba7c2b90d17
              ghLink="/"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
<<<<<<< HEAD
              title="Sample 5"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum justo et nibh ullamcorper, eget rutrum nisi aliquet. Mauris euismod arcu ac sapien tincidunt, nec mollis nulla consectetur. Sed aliquam ex ac purus tincidunt, at convallis est finibus. Integer commodo tellus id elit efficitur, nec fermentum elit volutpat. Nullam nec purus nec odio bibendum posuere. Vestibulum vel sagittis velit. Nullam a lectus nec enim vehicula eleifend nec sed lorem."
=======
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
>>>>>>> b9af5eda05b2c5138b55d5493a2d1ba7c2b90d17
              ghLink="/"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
<<<<<<< HEAD
              title="Sample 6"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum justo et nibh ullamcorper, eget rutrum nisi aliquet. Mauris euismod arcu ac sapien tincidunt, nec mollis nulla consectetur. Sed aliquam ex ac purus tincidunt, at convallis est finibus. Integer commodo tellus id elit efficitur, nec fermentum elit volutpat. Nullam nec purus nec odio bibendum posuere. Vestibulum vel sagittis velit. Nullam a lectus nec enim vehicula eleifend nec sed lorem."
=======
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
>>>>>>> b9af5eda05b2c5138b55d5493a2d1ba7c2b90d17
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
