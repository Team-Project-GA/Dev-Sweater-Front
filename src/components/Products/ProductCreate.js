import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { createProduct } from '../../api/products'

const ProductCreate = ({ user }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    img: ''
  })
  const [createdId, setCreatedId] = useState(null)

  const handleChange = e => {
    console.log('changing')
    const updatedField = { [e.target.name]: e.target.value }
    setProduct(currState => {
      const updatedProduct = { ...currState.product, ...updatedField
      }
      console.log('updated product is', updatedProduct)
      return { product: updatedProduct }
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    createProduct(user, product)
      .then(res => {
        setCreatedId({ createdId: res.data.product._id })
        console.log('this product is product create component', product)
      })
      .catch(() => console.error)
  }
  if (createdId) {
    return <Redirect to='/products' />
  }
  return (
    <React.Fragment>
      <p>Create a Product</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Product Name Here'
          value={product.name}
          onChange={handleChange}
          name='name'
        />
        <input
          type='text'
          placeholder='Product Description Here'
          value={product.description}
          onChange={handleChange}
          name='description'
        />
        <input
          type='text'
          placeholder='Product Price Here'
          value={product.price}
          onChange={handleChange}
          name='price'
        />
        <input
          type='text'
          placeholder='Product Img Here'
          value={product.img}
          onChange={handleChange}
          name='img'
        />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}

export default ProductCreate
