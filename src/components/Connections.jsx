import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import{addConnections} from "../utils/connectionSlice"


const Connections = () => {
    const connections= useSelector((store)=>store.connection)
    console.log(connections)
    const dispatch= useDispatch()

    const fetchConnections=async()=>{
        try{
            const res= await axios.get(BASE_URL+"/user/connections",{withCredentials:true})
            
            dispatch(addConnections(res?.data))

        }catch(err){
            alert(err.message)
        }
    }

  
    useEffect(()=>{
        fetchConnections()
    },[])

    if(!connections) return
    if(connections.length===0) return <h1>No Connections found</h1>

  return (
    <div>
      <h1 className="text-5xl font-bold flex justify-center pt-7 mb-[60px]"> My connections</h1>

{connections.map((connection)=><>
    <div className="flex justify-center m-2 ">


    <div className="menu bg-base-300 pl-10 justify-center rounded-l-2xl p-4">
    <img  className="w-20 h-20 rounded-full object-cover" src={connection.photoUrl} alt="userPhoto"></img>
    </div>
 
        
     <div className= " flex justify-center menu bg-base-300 w-[1100px] h-auto rounded-r-2xl p-4 ">
     <p className=" font-bold text-xl pl-6 ">{connection.firstName +" "+connection.lastName}</p> 
    {connection.age&&connection.gender&& <p className="pl-6 ">{connection.age+", "+connection.gender}</p>}
     <p className="pl-6 w-[800px] ">{connection.about}</p>
     </div>


    </div>
    </>)}
    </div>
  )
}

export default Connections
