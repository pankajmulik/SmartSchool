import React from 'react'
import StaffDetails from './StaffDetails'
import PersonalDetail from './PersonalDetail'
import OtherDetails from './OtherDetails'
import './AddStaff.css'
const AddStaff = () => {
  return (


    <div id="addstaff">

      
    

      <div id="adstf">
        <div className="enroll">
          <div className='btn-span'>
          <button id='back-btn'>  
            <i class="fa-solid fa-arrow-left"></i>
            </button>
Back

          </div>


          <h3>Enroll New staff</h3>
        </div>
        

        <h2 id='branch'>Branch : New Smart School </h2>

        <StaffDetails />
        <PersonalDetail />


        <OtherDetails />
      </div>





    </div>

  )
}

export default AddStaff