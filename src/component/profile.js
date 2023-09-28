import React from 'react'

function Profile({name,country,image,chk}) {
 const onMore=(e)=>{
      chk(true)
 }
  return (
  <div  className="card shadow" style={{width: '100%'}}>
  <div  className="card-body">
      {/* inner profile photo div */}


<div  className="row">
 
<div  className="col-md-4">
    <div  className="profile-picture shadow">
        <img src={image} style={{height:'150px',width:'150px'}} alt='profilepic'/>
    </div>
</div>

{/* <!-- Vertical Line --> */}
<div  className="col-md-1 vertical-line">
   
</div>

{/* <!-- Right Side (Personal Information) --> */}
<div  className=" container-fluid col-md-7 mt-4">
    <p>Name: {name}</p>
    <p>Country: {country}</p>
    <button type="submit"  className="btn btn-outline-info shadow mt-1 rounded-xl" onClick={onMore} style={{width:'50%', margin:'auto'}}>Get More</button>
   
</div>
</div>
</div>
</div>
 
  )
}

export default Profile