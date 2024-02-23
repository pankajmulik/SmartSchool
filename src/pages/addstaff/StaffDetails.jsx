import React from 'react'
import './AddStaff.css'
const StaffDetails = () => {
  return (
      <div>

          <div className="titles">Staff Details</div>
          
          <div id="staffdetails">

              <form >

                  <div className="employeedetails">

                      <div className="staffd">
                          <label htmlFor="estatus">Employment Status : </label><br />
                          <select name="estatus" id="estat">

                              <option value="temporary">Temporary</option>

                              <option value="permanent">Permanent</option>

                          </select>
                      </div>

                      <div className="staffd">
                          <label htmlFor="stfftype">Staff Type :</label><br />
                          <input type="radio" name="stype" id="stype" /> Teaching

                          <input type="radio" name="stype" id="stype" />Non Teaching <br />

                          <input type="radio" name="stype" id="stype" /> Transport

                      </div>



                      <div className="staffd">
                          <label htmlFor="eds">Staff Department :*</label> <br />
                          <select name="esdep" id="edept">

                              <option value="#">Select Department</option>


                          </select>
                      </div>
                      <div className="staffd">
                          <label htmlFor="ecat">Employment category:</label><br />
                          <select name="ecat" id="category">

                              <option value="temporary">Select Category</option>

                          </select>
                      </div>

                  </div>

                  <div className="employeedetails">


                      <div className="staffd">
                          <label htmlFor="edesi">Designation :*</label> <br />
                          <select name="edes" id="edess">

                              <option value="temporary">Select Department</option>

                              <option value="permanent">Developer</option>

                          </select>
                      </div>
                      <div className="staffd">
                          <label htmlFor="Qualitype">Qualification Type :*</label> <br />
                          <select name="qual-type" id="qua-type">

                              <option value="select">Select Qualification</option>


                          </select>
                      </div>
                      <div className="staffd">
                          <label htmlFor="education">Education Qualification:*</label> <br />
                          <select name="etrains" id="training">

                              <option value="select">Select Qualification</option>

                          </select>
                      </div>
                      <div className="staffd">
                          <label htmlFor="accessLevel">Access Level:*</label> <br />
                          <select name="Acc" id="Acclevel">

                              <option value="select">Select Access Level</option>

                          </select>
                      </div>

                  </div>


                  <div className="employeedetails">



                      <div className="staffd">
                          <label htmlFor="etrain">Trained as:</label> <br />
                          <select name="etrains" id="training">

                              <option value="temporary">Select level</option>

                              <option value="permanent">Level 1</option>

                          </select>
                      </div>


                      <div className="staffd">
                          <label htmlFor="ctet">CTET Qualified:</label> <br />

                          <input type="radio" name="ctet" id="ctets" />  Yes

                          <input type="radio" name="ctet" id="ctetss" />  No

                      </div>

                  </div>


              </form>
          </div>

          

    </div>
  )
}

export default StaffDetails