import React, { Component } from "react";
import Background from "../components/Background";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import "./index.css";

class Home extends Component {
  state = {
    services: [],
  };

  componentDidMount() {
    this.loadServices();
  }

  loadServices = () => {
    API.getServices()
      .then((res) => this.setState({ services: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
    };

    return (
      <div>
        <Background backgroundImage="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/08/16160339/akc-dog-grooming-at-home-729.jpg"></Background>

        <Container
          style={{
            marginTop: 30,
            background: "#2377be",
            padding: "20px",
            border: "solid 15px white",
          }}
        >
          <Row>
            <Col size="md-12">
              <h1
                style={{
                  color: "white",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Our Services Stand Apart
              </h1>
            </Col>
            <hr style={{ background: "white" }}></hr>
          </Row>
          <div className="home-services-wrapper">
            {this.state.services.map((service) => (
              <div className="card-content-home" key={service._id}>
                <Card.Img
                  variant="top"
                  src={service.images}
                  alt="bathing"
                  style={{
                    width: "150px",
                    height: "180px",
                    border: "solid 15px #9bbedb",
                  }}
                />

                <div
                  style={{
                    color: "white",
                    fontSize: "28px",
                  }}
                >
                  {service.name}
                </div>
                <Button variant="info" href="/services">
                  More Info
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}
export default Home;
