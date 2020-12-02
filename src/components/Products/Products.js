import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Product from './Product'
// import { Card, Button, Col, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

const Products = ({ indexProducts, user, onAdd, onRemove }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    indexProducts(user).then(res => {
      setProducts(res.data.products)
      // console.log('res from api in products component', res)
    }).catch((err) => err)
  }, [])

  // console.log('this is products state', products)

  return (
    <Row>
      {products.map(product => (
        <Product user={user} onAdd={onAdd} product={product} onRemove={onRemove} key={product._id} />
      ))}
    </Row>
  )
}

export default Products
