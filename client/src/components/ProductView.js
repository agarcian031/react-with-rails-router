import React, {Component}from "react";
import axios from "axios";
import { Button, Header, Segment, Divider } from "semantic-ui-react";

class ProductView extends Component {
  // will take an empty object and fill it with the product information 
  state = { product: {}, };


  // will match the picked id with the current id of the item
  componentDidMount() {
    const {id, }  = this.props.match.params;
    axios.get(`/api/products/${id}`)
      .then( res => {
        this.setState({ product: res.data, });
      })
  }

  render() {
    const { name, description, price, department, } = this.state.product;

    return (
      <div>
        <Segment raised>
          <Header as="h1">{ name }</Header>
          <Divider/>
          <Header as="h3">{ department }</Header>
          <Header as="h5" color="grey">${ price }</Header>
          <p>{ description }</p>
        </Segment>
        <br />
        <br />
        <Button 
          color="black" 
          onClick={this.props.history.goBack}
        >
          {/* will go back to the previous route */}
          Back
        </Button>
      </div>
    )
  }
}

export default ProductView;