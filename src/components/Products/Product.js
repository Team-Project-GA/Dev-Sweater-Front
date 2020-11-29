import React, { Fragment } from 'react'
import { Card, Button } from 'react-bootstrap'

const Product = ({ product, user, onAdd }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
          {user !== null ? (
            <Fragment>
              <Button
                onClick={() => {
                  console.log('on add button', onAdd)
                  onAdd(product)
                }} variant='outline-primary'>Add too Cart</Button>
              {}
              <Button variant='outline-primary'>Go to Cart</Button>
            </Fragment>
          ) : (
            ''
          )}
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
