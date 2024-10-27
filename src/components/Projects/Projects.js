import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import friendly_bot from "../../Assets/Projects/friend.png";
import botproof from "../../Assets/Projects/bot_proof.png";
import quant_game from "../../Assets/Projects/quant_game.png";
import studyHub from "../../Assets/Projects/studyHub.png";
import collab from "../../Assets/Projects/collab.png";
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
              imgPath={friendly_bot}
              isBlog={false}
              title="friendly-chat-bot"
              description="A conversational chatbot built with the Gemini API for real-time responses, React for a dynamic frontend, and Node.js with MongoDB for secure authentication. It features an engaging, user-friendly interface and saves chat histories, allowing users to reference previous conversations for a more personalized experience. This functionality enhances interaction continuity and user satisfaction."
              ghLink="https://github.com/Dhruv460/my_bot"
              demoLink="https://friendly-chat-bot.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={botproof}
              isBlog={false}
              title="BotProof"
              description="BotProof is a team project that refines CAPTCHA verification by using a machine learning model to detect human users through real-time mouse movement analysis. We leverage WebSockets to send live data to a Flask backend, allowing genuine users to bypass CAPTCHAs while bots are prompted to complete them."
              ghLink="https://github.com/Dhruv460/sih_bot"
              demoLink="https://botproof.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quant_game}
              isBlog={false}
              title="Quantum-Squares"
              description="Quantum Squares is a turn-based strategy game built with Phaser.js, played on a 5x5 grid. Players take turns placing quantum particles to control squares, triggering collapses that redistribute particles and create chain reactions. The game ends when a player controls 10 squares or when no moves are left, with the player holding the most points declared the winner."
              ghLink="https://github.com/Dhruv460/quantum_game-"
              demoLink="https://dhruv460.github.io/quantum_game-/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studyHub}
              isBlog={false}
              title="StudyHub"
              description="Study Hub is an interactive platform for students to share knowledge and resources. Built with HTML, CSS, and JavaScript, and powered by Firebase, it allows users to ask questions, engage with peers, and access a repository of study materials. This project marks the beginning of my development journey, showcasing my dedication to enhancing academic collaboration."
              ghLink="https://github.com/Dhruv460/studyHub"
              demoLink="https://dhruv27005.github.io/study-hub-/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={collab}
              isBlog={false}
              title="project-Collab"
              description="Project Collab is a MERN-based platform that connects creators and innovators to collaborate on projects. It offers tools for project management, networking, and resource sharing, enabling users to showcase their work and access learning opportunities. Our mission is to foster creativity through meaningful partnerships, empowering users to turn ideas into impactful solutions."
              ghLink="https://github.com/Dhruv460/project-collab-"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={f}
              isBlog={false}
              title=""
              description=""
              ghLink=""
               demoLink=""   
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
