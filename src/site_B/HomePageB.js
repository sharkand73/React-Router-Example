import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function HomePageB() {
  return (
    <>
      <h1>Site B</h1>
      <Link to=''>Page 1</Link>
      <Link to='page_2'>Page 2</Link>
      <Link to='page_3'>Page 3</Link>
      <Outlet />
      <div>
        <Link to='/'>Home</Link>
      </div>
    </>   
  )
}
