import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gulam Yazdani </span>
            from <span className="purple"> Allahabad, India.</span>
            <br />
            I am a former <span className="purple">Software Trainee</span> at <span className="purple">TekGeminus Solutions Pvt. Ltd. Pune.</span>
            <br />
            I have completed <span className="purple">B.Tech</span> with specialization in <span className="purple">Information Technology</span> from <span className="purple">Dr. APJ Abdul Kalam Technical University (AKTU), Lucknow.</span>
            <br />
            <br />
            Outside of work, I indulge in <span className="purple">reading novels</span> playing <span className="purple">cricket,</span> and  <span className="purple">exploring new places,</span> while also refining my photography skills.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "I can and I will !"{" "}
          </p>
          <footer className="blockquote-footer">Gulam Yazdani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
