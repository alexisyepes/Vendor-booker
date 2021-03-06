import React from "react";
import Background from "../components/Background";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
    <Background backgroundImage="http://www.happypawsunleashed.com/wp-content/uploads/2015/11/dog-grooming-453x302.jpg">
    </Background>
  
      <Container size="md-10" style={{ marginTop: 30, background: "#2377be", color: "white", fontSize: "25px", padding: "25px", border: "solid 15px white", textAlign: "justify" }}>
        <Row>
          <Col size="md-12">
            <h1 style={{ textAlign: "center", fontSize: "45px" }}><i class="fas fa-paw"></i> About us <i class="fas fa-paw"></i></h1>
            <hr style={{ background: "white" }}></hr>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            With over 19 years of experience, you can be sure that your dogs and cats are in good hands. 
            Our open concept allows you to watch your dog and/or cat being pampered by looking through our windows at any time. 
            Our environment provides your pets a unique experience where stress from all other pet groomers will simply go away. 
            Your furry members of the family are just as happy coming in, as they are going home.
            </p>
          </Col>
        </Row>
  
      </Container>
    </div>
  );
}

export default About;