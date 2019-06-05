import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { connect } from "react-redux";
import { createItem } from "../../actions/itemActions";

class CreateItem extends React.Component {
  state = {
    name: "",
    image: "",
    size: "",
    description: "",
    price: 0,
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      image: this.state.image,
      size: this.state.size,
      description: this.state.description,
      price: this.state.price,
    }

    this.props.createItem(newItem);
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" onChange={this.onChange} placeholder="Name of product"/>
          </FormGroup>
          <FormGroup>
            <Label for="image">Image Link</Label>
            <Input type="text" name="image" id="image" onChange={this.onChange} placeholder="Link to Image"/>
          </FormGroup>
          <FormGroup>
            <Label for="size">Item Size</Label>
            <Input type="text" name="size" id="size" onChange={this.onChange} placeholder="Size"/>
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input type="number" name="price" id="price" onChange={this.onChange} placeholder="Price"/>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" name="description" id="description" onChange={this.onChange} placeholder="Description"/>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(mapStateToProps, { createItem })(CreateItem);