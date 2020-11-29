import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome to Dev Sweater</h1>
        <p>We got what you need</p>
        <p>
          <Link to='/products'>
            <Button variant='outline-primary'>View Catalog</Button>
          </Link>
        </p>
      </Jumbotron>
    </div>
  )
}

export default Home
