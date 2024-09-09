import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import SinglePageHeader from '../Components/SinglePageHeader'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'

function SignIn() {
  let [obj,setObj]=useState({email:"",password:""})
  const navigate =useNavigate();
  const handleChange = async(e) => {
    const {name, value}=e.target
    let data={...obj,[name]:value}
    setObj(data)   
}
const handleSubmit=async(e)=>{
  e.preventDefault();
  const response=await fetch("http://localhost:8800/signin/user", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
})

  const jsonresponse=await response.json()
  console.log(jsonresponse);
  window.alert(jsonresponse["message"])
  if(jsonresponse["message"]=="User Login Successfully"){
    localStorage.setItem("userData",JSON.stringify(jsonresponse["data"]))
    navigate('/')
  }
  
}
 return (
    <>
    <Navbar/>
    <SinglePageHeader one={{title:"SignIn"}}/>
    <div>
        <h1>SignIn</h1>
    <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Enter Your Email"
                    onChange={(e)=>(handleChange(e))}
                    value={obj["email"]}
                  />
                  <input
                    type="password"
                    name="password"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Enter Your Password"
                    onChange={(e)=>(handleChange(e))}
                    value={obj['password']}
                  />
                  <button
                    className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                    type="submit"
                  >
                    SignIn
                  </button>
                </form>
                <span>
                    Don't have an account?
                    <Link to="/signup">SignUp</Link>
                </span>
    </div>
    <Footer/>

    </>
  )
}

export default SignIn