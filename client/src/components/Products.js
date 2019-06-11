import React, {useState, useEffect} from 'react'
import {Card, Header, Divider} from 'semantic-ui-react';

const Products = (props) => {
  // array destructuring to return two things: returns value of state and a function that will allow you to update the state. 
  const [products, setProducts] = useState([]); 

  const renderProducts = () => {
      if (products.length <= 0)
        return <Header as="h3">No Products</Header>
      return products.map(product => (
        <Card>
          <Card.Content>
            <Card.Header>{product.name}</Card.Header>
            <Card.Meta>{product.department}</Card.Meta>
            <Card.Description>
              {product.description}
            </Card.Description>
          </Card.Content>
        </Card>
      ))
  }; 

  return (
    <div>
      <Header as="h1">Products</Header>
      <Divider/>
      <br/>
      <Card.Group>
        {renderProducts()}
      </Card.Group>
    </div>
  )

}

export default Products
