import React from 'react'


const Navbar = () => {
  return (
    <div>
        <nav className='bg-dark d-flex gap-2 p-4 ' >
        <a href="/"style={{textDecoration: 'none'}}>Home</a>
        <a href="/all"style={{textDecoration: 'none'}}>All Users</a>
        <a href="/add" style={{textDecoration: 'none'}}>Add Users</a>
        <a href="/login" style={{textDecoration: 'none'}}>Login</a>
        </nav>
    </div>
  )
}

export default Navbar
