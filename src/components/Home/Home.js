import React from 'react'
// import { Button, Carousel } from 'react-bootstrap'

const Home = ({ products, user }) => {
  return (
    <div>
      {products.map(product => {
        console.log('product in home component', product)
        if (user === null) {
          return (
            <h1 key={product.id} style={{ height: '50vh', marginTop: '4rem' }}>
              view these products {product.title}
            </h1>
          )
        }
      })}
    </div>
  )
}

export default Home
