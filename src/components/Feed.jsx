import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice"
import { useEffect } from "react"
import UserCard from "./UserCard"
import { addRequests } from "../utils/requestSlicce"



const Feed = () => {
  const feed= useSelector((store)=>store.feed)
  const dispatch= useDispatch()

  const getFeed=async()=>{
    if (feed) return
  const res = await axios.get(BASE_URL+"/feed",{withCredentials:true})
  dispatch(addFeed(res.data))
  }
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequests(res?.data));
    } catch  {
      console.log("error")
    }
  };

 

  useEffect(()=>{
    getFeed()
    fetchRequests();
  },[])

  if(!feed) return
  if(feed.length<=0) return <h1 className="flex justify-center my-10 text-2xl">No new users found...</h1>
 
  return feed&&(
    <div >
      <div className="flex justify-center my-[2%]" > 
      <UserCard user={feed[0]}/>
      </div>
     
    </div>
  )
}

export default Feed
