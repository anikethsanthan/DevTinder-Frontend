import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addRequests } from "../utils/requestSlicce";

const Requests = () => {
    const requests= useSelector((store)=>store.requests)
  
  const dispatch = useDispatch();
 

  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      

      dispatch(addRequests(res?.data));
    } catch (err) {
     
      alert("Failed to fetch requests. Please try again later.");
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if(!requests) return<h1 className=" font-semibold text-xl text-center mt-[30px]">No connections found...</h1>;
  if(requests.length===0) return (
    <h1 className="font-semibold text-xl text-center mt-[30px]">
      No connections Found
    </h1>
  );

return (
  <div>
    <h1 className="text-5xl font-bold flex justify-center pt-7 mb-[60px]"> Pending requests</h1>

{requests.map((requests)=>{

const {_id, firstName, lastName,photoUrl,age,gender,about }= requests.fromUserId
return(
< div key={_id} >
  <div className="flex justify-center m-2 ">


  <div className="menu bg-base-300 pl-10 justify-center rounded-l-2xl p-4">
  <img  className="w-20 h-20 rounded-full object-cover" src={photoUrl} alt="userPhoto"></img>
  </div>

      
   <div className= " flex justify-center menu bg-base-300 w-[1100px] h-auto rounded-r-2xl p-4 ">
   <p className=" font-bold text-xl pl-6 ">{firstName +" "+lastName}</p> 
  {age&&gender&& <p className="pl-6 ">{age+", "+gender}</p>}
   <p className="pl-6 w-[800px] ">{about}</p>
   </div>


  </div>
  </div>)})}
  </div>
)

  
};

export default Requests;
