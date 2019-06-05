import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { connect } from "react-redux";
import { createUser } from "../../actions/userActions";
import { Redirect } from "react-router-dom"

class RegisterComponent extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    if(this.state.password !== this.state.confirmPassword){
      console.log("Password and Confirmation Password are different!");
    }

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    this.props.createUser(newUser);
    
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="registerUsername" hidden>Username</Label>
            <Input type="text" name="username" id="registerUsername" onChange={this.onChange} placeholder="Username" />
          </FormGroup>
          <FormGroup>
            <Label for="registerEmail" hidden>Email</Label>
            <Input type="email" name="email" id="registerEmail" onChange={this.onChange} placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="registerPassword" hidden>Password</Label>
            <Input type="password" name="password" id="registerPassword" onChange={this.onChange} placeholder="Password" />
          </FormGroup>
          <FormGroup>
            <Label for="confirmPassword" hidden>Confirm Password</Label>
            <Input type="password" name="confirmPassword" id="confirmPassword" onChange={this.onChange} placeholder="Confirm Password" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, { createUser })(RegisterComponent);