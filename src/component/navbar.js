import React from 'react'

function Navbar
() {
  return (
    <div className='container-fluid'>
        <hr/>
  <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Cricketer</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Contact</a>
        </li>
        
        
         
      </ul>
      
      <form className="d-flex" role="search">
        <button className="btn btn-outline-danger me-2 shadow" type="submit">Login</button>
        <button className="btn btn-outline-info shadow" type="submit">Register</button>
      </form>
    </div>
  </div>
</nav>
         <hr/>
    </div>
  )
}

export default Navbar
