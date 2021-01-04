import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Pic from '../assets/myPic.JPG';

function About() {
  return (
<div> 
    <Container>
    <Row id="aboutMe"> 
        <Col lg="6">
            <h2>ABOUT ME</h2>
            <article>
                Hi, My name is Thalia Romany.<br/>

                I love building and creating new things. My interest in this field raised during highschool, where I began researhing more on the job titles<br />

                I attended the Uconn coding bootcamp to begin my journey in learning the skills needed to achieve my goals.

                You can reach me on: <br/>          

                  <Row>
                    <Col sm="3">
                    <a href="https://www.linkedin.com/in/thalia-romany-559b15183"> LinkedIn
                </a><br/>     
                    </Col>
                   
                  <Col sm="3">
                  <a href="https://github.com/ThaliaRowan"> Github</a><br/>
                  </Col>
                   
                  <Col sm="3">
                  <a href="https://docs.google.com/document/d/1X-pGg6C-sY-SJBnC2hwekVeOswi4Xguf0Aa75-TVhbU/edit?usp=sharing">Resume</a><br/>
                  </Col>
                
                  <Col sm="3">
                  <a href="mailto:thalia.rowan@gmail.com">email</a><br/>
                  </Col>
                  </Row>
               
                        
            </article>
        </Col> 
        <Col lg="6">
        <img  src={Pic}   style={{width: "20rem"}} id="myPic" alt="A pic of me" />      
        </Col>
         
  
        </Row>
    </Container>
</div>

        
  );
}


export default About;
