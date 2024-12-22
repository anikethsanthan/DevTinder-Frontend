import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  
  const userData = useSelector((store) => store.user);



  const handleLogout=async()=>{
    try {
      await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
      dispatch(removeUser()); 
    return  navigate("/login"); 
    } catch (error) {
      console.error("Logout failed:", error);
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
              <p className="mr-4">Welcome {userData.firstName} {userData.lastName}</p>
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
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
