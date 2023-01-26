import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className='main-nav'>
          <Link to='/site_a'>Site A</Link>
          <Link to='/site_b'>Site B</Link>
          <Link to='/site_c'>Site C</Link>
      </div>
    </>
  )
}
