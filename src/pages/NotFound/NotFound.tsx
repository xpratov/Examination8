import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className=''>
      <h2>404 - Not Found</h2>
      <p>Could not find requested resource</p>
      <Link to={"/"}>Return Home</Link>
    </div>
  )
}

export default NotFound
