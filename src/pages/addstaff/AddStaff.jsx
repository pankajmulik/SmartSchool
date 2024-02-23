import React from 'react'
import StaffDetails from './StaffDetails'
import PersonalDetail from './PersonalDetail'
import OtherDetails from './OtherDetails'
import './AddStaff.css'
const AddStaff = () => {
  return (


    <div id="addstaff">

      <div id="adstf">

        <h2 id='branch'>Branch : New Smart School </h2>

        <StaffDetails />
        <PersonalDetail />


        <OtherDetails />
      </div>





    </div>

  )
}

export default AddStaff