import React from 'react'
import navdata from './navdat'
import NavItem from './NavItem'
const NavMenu = () => {
  return (
      <div className='navmenu'>
          
          {
              navdata.map((ndata) => {
                  
               return   <NavItem ndata={ndata} />
              })
          }


    </div>
  )
}

export default NavMenu