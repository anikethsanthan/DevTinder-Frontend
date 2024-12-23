

const UserCard = ({user}) => {
    const{firstName, lastName,photoUrl, skills, about, age,gender}= user
  return (
    <div>
      <div className="card card-compact bg-base-300 w-96 shadow-xl">
  <figure>
    <img
    className="h-[400px] w-full object-cover"
      src={photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName +" "+ lastName}</h2>
    {age&&gender&& <p>{age +", "+ gender}</p>}
    <p>{about}</p>
    <p>{skills}</p>
    <div className="card-actions justify-center ">
    <button className="btn btn-primary ">Ignore</button>
      <button className="btn btn-secondary ">Interested</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard
