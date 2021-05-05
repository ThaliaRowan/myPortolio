import React from "react";
import {Row, Col,Button} from "react-bootstrap";
import Linked from "../linked.jpg";
import Email from "../email.png";
import Github from "../github.png";
import Resume from "../resume.png";
import "../contact.css";

 

function Contact(){
    return(
        <div>
            <Row id="titlerow">
                <h3 id="title">Contact Me!</h3>
            </Row>
            <Row lg={4} id="contactRow">
                <Col className="container">
                <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Linked} alt="Avatar" style={{width: "300px",height:"300px"}} />
                    </div>
                    <div className="flip-card-back">
                    <Button href="https://www.linkedin.com/in/thalia-romany-559b15183" id="linkedIn" variant="secondary" size="lg" target="_blank">
                    LinkedIn
                </Button>
                    </div>
                </div>
                </div>
                </Col>
                <Col className="container">
                <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Email} alt="Avatar" style={{width: "300px",height:"300px"}} />
                    </div>
                    <div className="flip-card-back">
                    <Button href="mailto:thalia.rowan@gmail.com" id="email" variant="secondary" size="lg" target="_blank">
                    Email
                </Button>
                    </div>
                </div>
                </div>
                </Col>
                <Col className="container">
                <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Github} alt="Avatar" style={{width: "300px",height:"300px"}} />
                    </div>
                    <div className="flip-card-back">
                    <Button href="https://github.com/ThaliaRowan" id="github" variant="secondary" size="lg" target="_blank">
                    Github
                </Button>
                    </div>
                </div>
                </div>
                </Col>
                <Col className="container">
                <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Resume} alt="Avatar" style={{width: "300px",height:"300px"}} />
                    </div>
                    <div className="flip-card-back">
                    <Button href="https://docs.google.com/document/d/1X-pGg6C-sY-SJBnC2hwekVeOswi4Xguf0Aa75-TVhbU/export?format=pdf" id="resume" variant="secondary" size="lg" target="_blank">
                    Resume
                </Button>
                    </div>
                </div>
                </div>
                </Col>

            </Row>
      
        </div>
    )

}

export default Contact;