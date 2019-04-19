import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn, ListDuration } from "../Form";

class NewUser extends Component {

  state = {
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    let newUser = {
      name: this.state.name,
      description: this.state.description,
      duration: this.state.duration,
      price: this.state.price,
      specialPrice: this.state.specialPrice,
      cost: this.state.cost,
      images: this.state.images,
      notes: this.state.notes,
    };

    console.log(newUser);

    if (this.state.name && this.state.description && this.state.duration && this.state.price) {
      API.addUser(newUser)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-10">
            <h3>Create a new user</h3>
            <form>
              <Input
                name="name"
                onChange={this.handleInputChange}
                placeholder="User name (required)"
              />
              <TextArea
                name="description"
                onChange={this.handleInputChange}
                placeholder="Description (required)"
              />
              <ListDuration
                name="duration"
                onChange={this.handleInputChange}
                text="Duration (required)"
              />
              <Input
                name="price"
                onChange={this.handleInputChange}
                placeholder="Price (required)"
              />
              <Input
                name="specialPrice"
                onChange={this.handleInputChange}
                placeholder="Special price"
              />
              <Input
                name="cost"
                onChange={this.handleInputChange}
                placeholder="Cost"
              />
              <Input
                name="images"
                onChange={this.handleInputChange}
                placeholder="Path to images"
              />
              <TextArea
                name="notes"
                onChange={this.handleInputChange}
                placeholder="Notes"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.description && this.state.duration && this.state.price)}
                onClick={this.handleFormSubmit}
                color="warning"
              >
                Create new User
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewUser;
