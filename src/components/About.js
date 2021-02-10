import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Pic from '../assets/myPic.JPG';
import "./about.css";

function About() {
  return (
      <div> 
        <div className="jumbotron" id="overlay">
          <h1 className="display-4" id="title">Thalia Romany</h1>
          <p className="lead">Full-stack Developer</p>
        </div> 
        <Row>
          <Col md="12">
            <h2 className="me">About Me</h2>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
          <img src={Pic} style={{width: "20rem", padding: "20px"}} className="center-block" />
          </Col>
        </Row>
        <Col md="12">
        <article style={{textAlign: "center"}}>
        Hey! I am a Full-Stack developer with a passion for building things! <br/> I recently graduated from the University of Connecticut Coding bootcamp and I am eager to learn more and expand my knowledge by contributing to real-world projects.

           </article>
        </Col>
        <Row>
        </Row>
        <Row>
          <Col md="12">
            <h2 className="skills">Skills and Technologies</h2>
          </Col>
        </Row>
        <Row>
          <Col  sm="12" lg="4">
          <div className="card" style={{width: "18rem"}} className="c1">
          <h5 className="card-header">Front-End</h5>
            <div className="card-body">
              <p>HTML/CSS</p>
              <p>JavaScript</p>
              <p>JQuery</p>
              <p>React</p>
            </div>
          </div>
          </Col>
          <Col sm="12" lg="4">
          <div className="card" style={{width: "18rem"}} className="c2">
          <h5 className="card-header">Database</h5>
            <div className="card-body">
              <p>MySql</p>
              <p>MongoDB</p>
              <br />
              <br />
              <br />
            </div>
          </div>
          </Col>
          <Col sm="12" lg="4">
          <div className="card" style={{width: "18rem" }} className="c3">
          <h5 className="card-header">Server</h5>
            <div className="card-body" >
              <p>Express</p>
              <p>Node.js</p>
              <br />
              <br />
              <br />
            </div>
          </div>
          </Col>
        </Row>
      </div>     
  );
}


export default About;
