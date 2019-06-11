import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Card, Header, Divider, Button, Icon} from 'semantic-ui-react';

const Products = (props) => {
  // array destructuring to return two things: returns value of state and a function that will allow you to update the state. 
  const [products, setProducts] = useState([]); 


// useEffect to make the call to fetch the data from our database 
  useEffect( () => {
    // TODO Make a GET with axios to get products 
    // TODO Update state 
    axios.get("/api/products")
    .then( res => {
      setProducts(res.data);
      // will update the products component with data from the res data. 
    });
  }, []); 
  // passing it in a second argument of an empty array with stop it from updating in an infinite loop and will treat it as a componentDidMount(). 

// if there are no products, it will render a header with no product, else it will render a card with the product 
  const renderProducts = () => {
      if (products.length <= 0)
        return <Header as="h3" textAlign="center">No Products</Header>
      return products.map(product => (
        <Card color="green" key={product.id}>
          <Card.Content>
            <Card.Header textAlign="center">{product.name}</Card.Header>
            <Card.Meta textAlign="center">{product.department}</Card.Meta>
            <Divider/>
            <Card.Description textAlign="center">
              {product.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <Button as={Link} to={`/products/${product.id}`} color='blue' fluid size="tiny">
            View
          </Button>
        </Card.Content>
        </Card>
      ))
  }; 

  return (
    <div>
      <Header as="h1" textAlign="center">Products</Header>
      <Divider/>
      <br/>
      <Button as={Link} to="/products/new" icon size="tiny" color="blue">
        <Icon name="plus"/>Add Products
      </Button>
      <br/>
      <br/>
      <Card.Group>
        {renderProducts()}
      </Card.Group>
    </div>
  )

}

export default Products
