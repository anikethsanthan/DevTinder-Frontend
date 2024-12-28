import { useState } from "react"
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice"


const LOGIN = () => {
const [isSignIn, setSignIn]= useState(true)
const [emailId, setEmailId]= useState("krishna@gmail.com");
const [password, setPassword]= useState("krishnaK@123");
const [firstName, setFirstName]= useState("");
const [lastName, setLastName]= useState("");
const [loader, setLoader]= useState(false)
const [error, setError]= useState("")


const navigate= useNavigate();
const dispatch= useDispatch();

const handleLogin=async()=>{
  setLoader(true)
 try{
  const res = await axios.post(BASE_URL+"/login",{
    emailId,
    password
  },{withCredentials:true})
  dispatch(addUser(res.data))

  navigate("/feed")

 

 

 }catch(err){
  setError(err?.response?.data||"Something went wrong!")
  
 }
 setLoader(false)
  

}

const handleSignup= async()=>{
  setLoader(true)
try{
  const res= await axios.post(BASE_URL+"/signup",{
    emailId,
    password,
    firstName,
    lastName
  },{withCredentials:true})

  dispatch(addUser(res.data))

  navigate("/profile")

  


}catch(err){
  setError(err?.response?.data||"Something went wrong!")

}
setLoader(false)
  

}


const handleClick=()=>{
  setSignIn(!isSignIn)
}

  return (
    <div className="flex">
      <div className="w-1/2 bg-gradient-to-b from-black">
      <img className=" absolute object-cover w-full h-full" src="./Tinder_BCK.webp" alt="bckground img"></img>
      <div className=" bg-gradient-to-b from-black h-full w-full absolute ">
        <div className="ml-[60px] mt-[18%]">
        <p className="text-7xl text-white  font-bold">Start Something Epic.</p></div>
        <button type="button"
         className="mt-[18px] ml-[300px]
          p-2 rounded-xl pr-4 pl-4 text-white text-2xl font-semibold bg-gradient-to-r absolute from-pink-500 to-orange-500 ...">
  Start Connecting
</button>
<p className="absolute w-1/2 mt-[80px] ml-[50px] text-white ">
Single people, listen up: If you’re looking for love, want to start dating, or just keep it casual, you need to be on Tinder. With over 55 billion matches made, it’s the place to be to meet your next best match.
<br></br> Let’s be real, the dating landscape looks very different today, as most people are meeting online. With Tinder, the world’s most popular free dating app, you have millions of other single people at your fingertips and they’re all ready to meet someone like you. Whether you’re straight or in the LGBTQIA community, Tinder’s here to bring you all the sparks.

</p>
</div>
      </div>



    {/* 2nd div */}
      <div className="w-1/2">
      <div className="hero bg-base-100 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card bg-base-100 w-[160%] max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-5xl font-bold flex justify-center pt-7">{isSignIn ? "Login now":"SignUp"}</h1>
      <form className="card-body">

        {!isSignIn&&<>
      <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input 
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
          type="text"
           placeholder="Enter your first name"  
            className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input 
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}
          type="text"
           placeholder=" Enter your last name" 
            className="input input-bordered" required />
        </div>
        </>}


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
          value={emailId}
          onChange={(e)=>setEmailId(e.target.value)}
          type="email" 
          placeholder=" Enter your email id" 
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          value={password}
          onChange={(e)=>setPassword(e.target.value)} 
          type="password"
           placeholder="Enter a strong password" 
           className="input input-bordered" required />
          <label className="label">
            <Link to="/forgotpassword" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <p className="text-red-500 -mt-[30px] mb-3">{error}</p>
        <button 
        onClick={(e) => {
        e.preventDefault(); 
        isSignIn ? handleLogin() : handleSignup();
       }}
         className="btn btn-primary"> {loader ? (
          <>
            Loading
            <span className="loading loading-dots loading-md ml-2"></span>
          </>
        ) : (
          isSignIn ? "Login" : "Signup"
        )}</button>
<div className="flex justify-center">


</div>
         
         

          <p  onClick ={()=>handleClick()}className="mt-4 flex justify-center label-text-alt link link-hover">
          {isSignIn ? "New to the app SignUp now?":"Already a user Sign In!"}</p>
        </div>
      </form>
    </div>
  </div>
</div>
 </div>
    
       
   
 
</div>



  )
}

export default LOGIN
