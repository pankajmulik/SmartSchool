import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const NavItem = (props) => {
  return (
      <div className="navitem">
          <NavLink to={props.ndata.path}>
          <span>
              {props.ndata.icon}
              {props.ndata.name}
</span>
          </NavLink>
     </div>
  )
}

export default NavItem