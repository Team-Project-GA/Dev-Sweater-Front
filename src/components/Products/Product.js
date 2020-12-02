import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'

const Product = ({ product, user, onAdd, onRemove }) => {
  return (
    <Col>
      <Card
        style={{
          width: '18rem',
          margin: 'auto',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
        <Card.Img
          variant='top'
          src={product.img}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
          {user !== null ? (
            <div className='d-flex justify-content-around'>
              <Button
                onClick={() => {
                  // console.log('on add button', onAdd)
                  onAdd(product)
                }}
                variant='outline-primary'>
                Add
              </Button>
              <Button
                onClick={() => {
                  onRemove(product)
                }}
                variant='outline-primary'>
                Remove
              </Button>
            </div>
          ) : (
            ''
          )}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Product
