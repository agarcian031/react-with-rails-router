import React, { Component } from 'react';
import axios from "axios";
import {Form, Header} from 'semantic-ui-react'; 

export class ProductsForm extends Component {
  defaultValues = {
    name: "", 
    price: "", 
    description: "", 
    department: "", 
  };

  state = {...this.defaultValues, }; 


  handleSubmit = (e) => {
    e.preventDefault();  
    axios.post("/api/products", {...this.state,})
    .then(res => {
      // this.props.history.push("/products");
      this.props.history.push("/products")
    })
    this.setState({...this.defaultValues}); 
  };

  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value, });
  };


  render() {
    return (
      <div>
        <Header as="h1" textAlign="center">New Product</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Description"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Department"
              name="department"
              placeholder="Department"
              value={this.state.department}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Price"
              name="price"
              placeholder="Price"
              value={this.state.price}
              onChange={this.handleChange}
              type="number"
            />
          </Form.Group>
          <Form.Button color="blue" fluid>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default ProductsForm;
