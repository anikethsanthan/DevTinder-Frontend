import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";


const UserCard = ({user}) => {
  const dispatch= useDispatch()
    const{_id,firstName, lastName,photoUrl, skills, about, age,gender}= user;

    const handleSendRequest= async(status,userId)=>{
      try{
        const res= await axios.post(BASE_URL+"/request/send/"+status+"/"+userId ,{},{withCredentials:true})
        dispatch(removeUserFromFeed(userId))

      }catch(err){
        alert(err.message)
      }
    }

    
  return (
    <div>
      <div className="card card-compact bg-base-300 w-96 shadow-xl">
  <figure>
    <img
    className="h-[400px] w-full object-cover"
      src={photoUrl}
      alt="User-photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName +" "+ lastName}</h2>
    {age&&gender&& <p>{age +", "+ gender}</p>}
    <p>{about}</p>
    <p>{skills}</p>
    <div className="card-actions justify-center ">
    <button 
    onClick={()=>handleSendRequest("ignored",_id)}
    className="btn btn-primary "
    >Ignore</button>
      <button
      onClick={()=>handleSendRequest("interested",_id)}
      className="btn btn-secondary ">Interested</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard
