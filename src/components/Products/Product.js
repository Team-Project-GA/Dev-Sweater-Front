import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
        <Card.Img variant='top' src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
          <ToastContainer />
          {user !== null ? (
            <div className='d-flex justify-content-around'>
              <Button
                onClick={() => {
                  const notify = () => {
                    toast.success(`ADDED ${product.name} TO CART!`, {
                      position: toast.POSITION.BOTTOM_CENTER,
                      autoClose: 2000
                    })
                  }
                  onAdd(product)
                  return notify()
                  // console.log('on add button', onAdd)
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
