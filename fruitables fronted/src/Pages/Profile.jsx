import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import SinglePageHeader from '../Components/SinglePageHeader'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

function Profile() {
    let [userData,setUserData]=useState(JSON.parse(localStorage.getItem('userData'))||"")
    const handleLogout=()=>{
        localStorage.removeItem('userData')
        
    }
  return (
    <>
    <Navbar/>
    <SinglePageHeader one ={{title:"Profile"}}/>
    <h1>username:{userData["name"]||""}</h1>
    <h1>email:{userData['email']||""}</h1>
    <h1>phone:{userData['phone']||""}</h1>
    <Link to="/signin">
                  <button
                  type="submit"
                  className="btn btn-primary border-2 border-secondary rounded-pill text-white h-100"
                  style={{ top: 0, right: "25%" }}
                  onClick={handleLogout}
                  >
                  Logout
                </button>
                    </Link>
    <Footer/>

    
    </>
  )
}

export default Profile