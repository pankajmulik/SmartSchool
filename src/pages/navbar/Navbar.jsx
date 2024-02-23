import React, { useState } from 'react'
import './Navbar.css'
import NavMenu from './NavMenu'


const Navbar = () => {

const [istogle,setistogle]=useState(false)



  return (
      <div id='navbaar'>
          
          <div className="uppernav">
              <div className="nhalf">
                  <h1 id='logos'>Smart School</h1>
              </div>
              <div id='navmenus'>
          <div className="rmenuslist" style={{display:'flex'}}>
            
            <div className="rnavms">
              under implementaion track progress
            </div>
            <div className="rnavm">
              <button>Get Help <i class="fa-solid fa-angle-down"></i></button>
            </div>
            <div className="rnavm">
              AY :2023-2024
            </div>
            <div className="rnavm">
             <i class="fa-solid fa-house"></i>
            </div>
            <div className="rnavm">
              <i class="fa-solid fa-bell"></i>

            </div>

            <div className="rnavm">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className="rnavm">
              <i class="fa-solid fa-border-all"></i>
            </div>
            <div className="rnavm">
              <i class="fa-solid fa-id-badge"></i>
            </div>

                  </div>
        </div>

        <div id="rightmenu">

          
          <button onClick={()=>setistogle(!istogle)}>
            <i class="fa-solid fa-bars"></i>
          </button>
          
          <div className="rmenus">
            {
              istogle && <NavMenu/>
            }
          </div>
       
        </div>
        
        
          </div>
         
      
      


    </div>
  )
}

export default Navbar