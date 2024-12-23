import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice"
import { useEffect } from "react"
import UserCard from "./UserCard"



const Feed = () => {
  const feed= useSelector((store)=>store.feed)
  const dispatch= useDispatch()

  const getFeed=async()=>{
    if (feed) return
  const res = await axios.get(BASE_URL+"/feed",{withCredentials:true})
  dispatch(addFeed(res.data))
  }

  useEffect(()=>{
    getFeed()
  },[])
 
  return feed&&(
    <div >
      <div className="flex justify-center my-[2%]" > 
      <UserCard user={feed[3]}/>
      </div>
     
    </div>
  )
}

export default Feed
