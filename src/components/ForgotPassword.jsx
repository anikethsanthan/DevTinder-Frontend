import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const ForgotPassword = () => {
    const [emailId, setEmailId]= useState("");
    const [oldPassword, setoldPassword] = useState("");
    const [newPassword, setnewPassword] = useState("");
    const [alert, setAlert]= useState(false)
    


    const passwordReset= async()=>{
        try{
            const res= await axios.patch(BASE_URL+"/profile/forgotPassword",{emailId, oldPassword,newPassword},{withCredentials:true});

            if(res.data.message==="Password updated successfully."){
                setAlert(true)
               
             
            }else{
                alert("!Invalid request")
            }

        }
        catch(err){
            alert(err.message)
        }
     

        
    }

    useEffect(()=>{
        setTimeout(()=>{
            setAlert(false)
           
    
        },3000)
      },[alert])
      
      




    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="card bg-base-300 w-[90%] max-w-sm p-6 shadow-2xl">
            <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email Id</span>
                    </label>
                    <input
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                        type="text"
                        placeholder="Enter your email id"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Old password</span>
                    </label>
                    <input
                        value={oldPassword}
                        onChange={(e) => setoldPassword(e.target.value)}
                        type="password"
                        placeholder="Enter your old password"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">New password</span>
                    </label>
                    <input
                        value={newPassword}
                        onChange={(e) => setnewPassword(e.target.value)}
                        type="password"
                        placeholder="Enter a strong password"
                        className="input input-bordered"
                        required
                    />
                    <label className="label">
                        
                    </label>
                </div>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        passwordReset()
                    }}
                    className="btn btn-primary w-full mt-4"
                >
                    Submit
                </button>
                {alert&&
    <div>
    <div className="toast toast-top toast-center">
  
  <div className="alert alert-success">
    <span>Password updated succesfully.</span>
  </div>
</div>
    </div>}
    <Link to="/login">
    <p  className="mt-4 flex justify-center label-text-alt link link-hover">
    Go back to login?</p></Link>
  
            </div>
        </div>
    );
};

export default ForgotPassword;
