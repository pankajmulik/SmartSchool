import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './AddStaff.css'



const OtherDetails = () => {

    const [isdate,setisdate]=useState(null)
  return (
      <div>
          

          <div id="otherdetails">


              <div className="empdetails">

                  <div className="titles">Other Details</div>
          
          <form action="#">
                  <div className="empdetailss">
                      <div className="pdin">
                          <div className="pdino">
                              <label htmlFor="name"> Adhar No :*</label> <br />
                              <input type="text" id='firstName' placeholder='Adhar Number' />
                          </div>
                          <div className="pdino">
                              <label htmlFor="mname"> Pan Card :*</label> <br />
                              <input type="text" id='middleName' placeholder='Pan Number' />
                          </div>

                          <div className="pdino">
                              <label htmlFor="calender">Date of Joining:</label> <br />
                              <ReactDatePicker selected={isdate} onChange={date => setisdate(date)} />
                          </div>

                          <div className="pdino">
                              <label htmlFor="mnum"> Staff Reference Code :*</label> <br />
                              <input type="text" id='mobno' placeholder='reference code' />
                          </div>



                      </div>

                      <div className="pdin">
                          <div className="pdino">
                              <label htmlFor="salary"> Salary Pay type :*</label> <br />
                              <input type="radio" name="sal-type" id="salary-type" /> Consolidate

                              <input type="radio" name="sal-type" id="salary-type" /> Pay 

                              <input type="radio" name="sal-type" id="salary-type" /> other
                          </div>
                          <div className="pdino">
                              <label htmlFor="mname">Govt Id / Resident No :*</label> <br />
                              <input type="text" id='middleName' placeholder='Enter Id no' />
                          </div>

                        

                          <div className="pdino">
                              <label htmlFor="mnum"> Staff Reference Code :*</label> <br />
                              <input type="text" id='mobno' placeholder='reference code' />
                          </div>

                          <div className="pdino">
                              {/* <label htmlFor="mname">Govt Id / Resident No :*</label> <br />
                              <input type="text" id='middleName' placeholder='Middle Name' />
                          */}
                          </div> 
                         
         



                      </div>
                      <br />
                      <div className="savebtn">

                          <button id='saveb'>Save and Continue </button>

                      </div>
                  </div>
              </form>  
              </div>
             
          </div>
       
          
          
      
          
          </div>
  )
}

export default OtherDetails