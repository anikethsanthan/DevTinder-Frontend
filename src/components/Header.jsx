

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-300">
  <div className="flex-1">
    <a className="btn btn-ghost text-2xl ml-5">Dev Tinder</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      
      
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-6">
        <div className="w-10 rounded-full ">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Header