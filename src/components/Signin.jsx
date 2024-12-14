import { useState } from "react"


const LOGIN = () => {
const [isSignIn, setSignIn]= useState(true)

const handleClick=()=>{
  setSignIn(!isSignIn)
}

  return (
    <div className="flex">
      <div className="w-1/2">
      <img className=" absolute object-cover w-1/2 h-full" src="./App-background.jpg" alt="bckground img"></img>
      </div>



    {/* 2nd div */}
      <div className="w-1/2">
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card bg-base-100 w-[160%] max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-5xl font-bold flex justify-center pt-7">{isSignIn ? "Login now!":"SignUp!"}</h1>
      <form className="card-body">

        {!isSignIn&&<>
      <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" placeholder="Enter your first name"   className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" placeholder=" Enter your last name"  className="input input-bordered" required />
        </div>
        </>}


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder=" Enter your email id" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Enter a strong password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">{isSignIn ? "Login ":"Signup"}</button>

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
