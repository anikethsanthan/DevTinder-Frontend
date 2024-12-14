

const LOGIN = () => {
  return (
    <div >
      <img className=" absolute object-cover w-1/2 h-full" src="./App-background.jpg" alt="bckground img"></img>
       
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse w-2/3" >
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
      Fluent in sarcasm, fueled by coffee, and here to find someone who can make me laugh as much as I can make them smile—let’s make this swipe count!
      </p>
    </div>
    <div className="card bg-base-100 ml-[160px] w-full max-w-sm shrink-0 shadow-2xl ">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>


    </div>
  )
}

export default LOGIN
