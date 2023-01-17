import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/details'>Details</NavLink>
    </div>
  )
}

export default Header