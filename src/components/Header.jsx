import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  
  const userData = useSelector((store) => store.user);
  const notifications= useSelector((store)=>store.requests);



  const handleLogout=async()=>{
    try {
      await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
      dispatch(removeUser()); 
    return  navigate("/login"); 
    } catch{
    
      alert("An error occurred while logging out. Please try again.");
    }
  }

  return (
    <div>
      <div className="navbar bg-base-300 ">
        <div className="flex-1">
          <Link to="/feed" className="btn btn-ghost text-2xl ml-5">Dev Tinder</Link>
        </div>
        <div className="flex-none">
          {userData && (
            <>
        <div className=" flex justify-center">
            <Link to={"/requests"}>
            <div className="flex  flex-col items-center mr-[10px] mt-4">
              {Array.isArray(notifications) &&  notifications.length>0&&
            <span className="indicator-item badge badge-secondary absolute -mt-[11px] ml-[36px] ">{notifications.length}</span>}
            <i  className="fa-solid fa-bell text-xl hover:scale-105 cursor-pointer "></i>
            <label className="label pt-2">
           <span className=" -mt-[10px] label-text">Notifications</span>
           </label>
           </div>
           </Link>
            <Link to={"/connections"}>
            <div className="flex  flex-col items-center mr-[150px] mt-4">
            <i  className="fa-solid fa-users text-xl hover:scale-105 cursor-pointer"></i>
            <label className="label pt-2">
           <span className=" -mt-[10px] label-text">My network</span>
           </label>
           </div>
           </Link>
           </div>

            
              <p className="mr-4">Welcome, {userData.firstName} </p>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar mr-6"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="user photo"
                      src={userData.photoUrl||"https://cdn-icons-png.flaticon.com/512/1177/1177568.png"}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/profile" className="justify-between">Profile</Link>
                  </li>
                  <li onClick={handleLogout}>
                    <Link to="/login">Logout</Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
