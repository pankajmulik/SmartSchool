import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './AddStaff.css'

const PersonalDetail = () => {

    const [isdate, setisdate] = useState(null)

    return (
        <div>


            <div id="persdetails">



                <div className="empdetails">

                    <div className="titles">Personal Details</div>

                    <form >

                        <div className="pdin">
                            <div className="pdino">
                                <label htmlFor="name"> First Name :*</label> <br />
                                <input type="text" id='firstName' placeholder='First Name' />
                            </div>
                            <div className="pdino">
                                <label htmlFor="mname"> Middle Name :*</label> <br />
                                <input type="text" id='middleName' placeholder='Middle Name' />
                            </div>
                            <div className="pdino">
                                <label htmlFor="lname">Last Name :*</label> <br />
                                <input type="text" id='lastName' placeholder='Last Name' />
                            </div>
                            <div className="pdino">
                                <label htmlFor="mnum"> Mobile No :*</label> <br />
                                <input type="text" id='mobno' placeholder='Mobile Number' />
                            </div>



                        </div>



                        <div className="pdin">
                            <div className="pdino">
                                <label htmlFor="name"> Emergency Contact Number :*</label> <br />
                                <input type="text" id='ENum' placeholder='Contact Number' />
                            </div>

                            <div className="pdino">

                                <label htmlFor="gender">Gender :</label> <br />
                                <input type="radio" name="gender" id="male" /> Male
                                <input type="radio" name="gender" id="female" /> Female

                                <input type="radio" name="gender" id="other" />Other
                            </div>

                            <div className="pdino">
                                <label htmlFor="calender">Date of Birth :</label> <br />
                                <ReactDatePicker selected={isdate} onChange={date => setisdate(date)} />
                            </div>

                            <div className="pdino">
                                <label htmlFor="email"> Email Id :*</label>
                                <input type="email" id='eid' placeholder='Email Id' />
                            </div>



                        </div>
                        

                        <div className="pdin">
                            <div className="pdino">
                                <label htmlFor="name"> Permanant Address :*</label> <br />

                                <textarea name="coradd" id="coresadd" cols="30" rows="3"></textarea>
                            </div>

                          

                          
                            <div className="pdino">
                                <label htmlFor="corradd"> Corresponding Address :*</label> <br />
                                <textarea name="coradd" id="coresadd" cols="30" rows="3"></textarea>
                            </div>

                            <div className="pdino">
                                <label htmlFor="religion">Religion :*</label> <br />
                                <select name="religion" id="relg">

                                    <option value="religion">Select Religion</option>

                                </select>
                            </div>
                            <div className="pdino">
                                {/* <label htmlFor="religion">Religion :*</label> <br />
                                <select name="religion" id="relg">

                                    <option value="religion">Select Religion</option>

                                </select> */}
                            </div>

                        </div>





                    </form>

                </div>



            </div>



        </div>
    )
}

export default PersonalDetail