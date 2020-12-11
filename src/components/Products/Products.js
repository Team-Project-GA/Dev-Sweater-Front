import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from './Product'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { Card, Button, Col, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

const Products = ({ indexProducts, user, onAdd, onRemove }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    indexProducts(user).then(res => {
      setProducts(res.data.products)
      // console.log('res from api in products component', res)
    }).then(() => {
      const notify = () => {
        toast.success('CHECK OUT OUR PRODUCTS!', {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 1000
        })
      }
      return notify()
    }).catch((err) => err)
  }, [])

  // console.log('this is products state', products)

  return (
    <Row>
      <ToastContainer />
      {products.map(product => (
        <Col key={product._id}>
          <Product user={user} onAdd={onAdd} product={product} onRemove={onRemove} />
        </Col>
      ))}
    </Row>
  )
}

export default Products
