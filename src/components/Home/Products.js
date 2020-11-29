import React from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Products = ({ products, user }) => {
  console.log('products in the product component:', products)
  console.log('user in the product component:', user)
  if (user === null) {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Products</h1>
        <Row className='d-flex justify-content-between'>
          {products.map(product => (
            <Col
              key={product.id}
              style={{
                marginTop: '2rem',
                marginBottom: '2rem'
              }}>
              <Card
                onClick={() => {
                  alert('Sign up & Sign in to purchase items!')
                }}
                className='card'
                style={{
                  width: '18rem',
                  textAlign: 'center',
                  margin: '0 auto'
                }}>
                <Card.Img
                  style={{
                    height: '30vh',
                    width: '100%',
                    objectFit: 'cover'
                  }}
                  variant='top'
                  src={product.img}
                  alt={product.title}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>${product.price}</Card.Text>
                  <Card.Text style={{ fontSize: '.7rem' }}>Add to Card by signing up for an account</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  } else {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Products</h1>
        <Row className='d-flex justify-content-between'>
          {products.map(product => (
            <Col
              key={product.id}
              style={{
                marginTop: '2rem',
                marginBottom: '2rem'
              }}>
              <Card
                className='card'
                style={{
                  width: '18rem',
                  textAlign: 'center',
                  margin: '0 auto'
                }}>
                <Card.Img
                  style={{
                    height: '30vh',
                    width: '100%',
                    objectFit: 'cover'
                  }}
                  variant='top'
                  src={product.img}
                  alt={product.title}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>${product.price}</Card.Text>
                  <Button variant='outline-secondary' className='mr-3' onClick={() => {
                    console.log('this product was clicked', product.title)
                  }}>Add to Cart</Button>
                  <Link className='btn btn-outline-secondary' style={{ textDecoration: 'none' }} to='/cart'>Goto Cart</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default Products
