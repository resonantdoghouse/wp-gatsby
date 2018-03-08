import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Home</h1>
    <Link to="/about/">About</Link>

    <Link to="/hello-cats/">Hello Cats</Link>
  </div>
)

export default IndexPage
