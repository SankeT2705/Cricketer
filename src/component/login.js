import React,{useState} from 'react'

function Login({setName}) {
    const [Player, setPlayer] = useState('');

    const handleInputChange = (e) => {
        setPlayer(e.target.value);
      };
    const Submit=(e)=>{
       
        console.log(Player)
        setName(Player)
        e.preventDefault()
    }
  return (
    <div className="container-fluid"  >
    <div className="row justify-content-center mt-3 shadow" style={{minHeight:'200px'}}>
        <div className="col  form-container">
            <h2 className="form-title">Search Player </h2>
            <form className='text-center'>
               
                <div className="form-group ">
                    <input type="email" value={Player} onChange={handleInputChange} className="form-control my-1" id="email" placeholder="Enter Player Name"/>
                </div>

                <button type="submit" onClick={Submit} className="btn btn-outline-info shadow m-auto mt-1 rounded-xl" style={{width:'50%'}}>Find</button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Login