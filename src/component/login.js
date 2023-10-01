import React,{useState} from 'react'

function Login({setName,chk}) {
    const [Player, setPlayer] = useState('');

    const handleInputChange = (e) => {
        setPlayer(e.target.value);
      };
    const Submit=(e)=>{
       
        console.log(Player)
        setName(Player)
        chk(false)
        e.preventDefault()
    }
  return (
    <div className="container-fluid"  >
    <div className="row justify-content-center mt-3 shadow" style={{minHeight:'200px'}}>
        <div className="col  form-container" style={{backgroundColor:'#faf7f7'}}>
            <h2 className="form-title">Search Player </h2>
            <form className='text-center'>
               
                <div className="form-group ">
                    <input type="text" value={Player} onChange={handleInputChange} className="form-control my-1" id="email" placeholder="Enter Player Name"/>
                </div>

                <button type="submit" onClick={Submit} className="btn btn-outline-info shadow m-auto mt-1 rounded-xl" style={{width:'50%'}}>Find</button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Login
