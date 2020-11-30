import React, { useEffect, useState } from 'react'
import Product from './Product'
// import { Card, Button, Col, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

const Products = ({ indexProducts, user, onAdd }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    indexProducts(user).then(res => {
      setProducts(res.data.products)
      console.log('res from api in products component', res)
    }).catch(() => console.error)
  }, [])

  console.log('this is products state', products)

  return (
    <div>
      {products.map(product => (
        <Product user={user} onAdd={onAdd} product={product} key={product._id} />
      ))}
    </div>
  )
}

export default Products
