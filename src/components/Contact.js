import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Contact(){
    return (
        <div>
      <Container>
      <Row>
        <Col md="6" id="myform">
          <div className="card  mb-3" style={{maxWidth: "60rem"}}>
            <div className="card-header">Contact</div>
            <div className="card-body">
              <form>
                <Row className="form-row">
                  <Col className="form-group ">
                    <label form="validationDefault01">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </Col>
                </Row>
                <Row className="form-row">
                  <Col className="form-group">
                    <label for="inputEmail4">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="inputEmail4"
                    />
                  </Col>
                </Row>
                <Row className="form-row">
                  <Col className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Message"
                      rows="3"
                    ></textarea>
                  </Col>
                </Row>
                <button type="submit" id="conBtn" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
        </div>
    );
}

export default Contact;