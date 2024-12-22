import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice"

const EditProfile = ({ user }) => {
  // State for user details
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [gender, setGender] = useState(user.gender);
  const [skills, setSkills] = useState(user.skills);
  const [alert, setAlert]= useState(false)
  const dispatch= useDispatch();

  const handleSubmit=async(event)=>{
    event.preventDefault(); 
    try{
        const res= await axios.patch(BASE_URL+"/profile/edit",{
            firstName,
            lastName,
            age,
            about,
            photoUrl,
            gender,
            
            
        },{withCredentials:true})
        
        console.log(res?.data)
        dispatch(addUser(res?.data))
        setAlert(true)

    }catch(err){
        console.log(err.message)
    }
  
  }

  useEffect(()=>{
    setTimeout(()=>{
        setAlert(false)

    },3000)
  },[alert])

  return (
    <>
    <div className="flex">
      {/* Edit Profile Form */}
      <div className="w-2/3 h-screen overflow-y-auto">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="card bg-base-100 w-[250%]  shrink-0 shadow-2xl">
              <h1 className="text-5xl font-bold flex justify-center pt-7">
                Edit Profile
              </h1>
              <form className="card-body">
                {/* First Name Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* Last Name Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* Photo URL Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    type="text"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* Age Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Age</span>
                  </label>
                  <input
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    type="number"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* Gender Selection */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="select select-bordered"
                    required
                  >
                    <option value="" disabled>
                      Select your gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                {/* Skills Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Skills</span>
                  </label>
                  <input
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    type="text"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* About Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">About Section</span>
                  </label>
                  <textarea  value={about}
                    onChange={(e) => setAbout(e.target.value)} className="textarea textarea-bordered" placeholder="Bio"></textarea>
                </div>

                {/* Submit Button */}
                <div className="form-control mt-6">
                  <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* User Card */}
      <div className="w-1/3 bg-base-200 sticky top-0">
      
        <div className="mt-[14%]">
          <UserCard
            user={{ firstName, lastName, age, about, photoUrl, gender, skills }}
          />
        </div>
        {/* <h1 className="-ml-[116px] -mt-4 text-2xl font-bold flex justify-center pt-7">
                Profile preview
              </h1> */}
      </div>
    </div>



  
    {/* alert  */}
    {alert&&
    <div>
    <div className="toast toast-top toast-center">
  
  <div className="alert alert-success">
    <span>Profile updated succesfully!</span>
  </div>
</div>
    </div>}
    </>
  );
};

export default EditProfile;
