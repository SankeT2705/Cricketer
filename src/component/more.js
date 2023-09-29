import React from 'react'

function More({name,country,dob,role,bat,bowl,height,t20match,t20runs,t20heighest,t20average,t20w,t20strike,t20h,odimatch,odiruns,odiheighest,odiaverage,odiw,odistrike,odih,testmatch,testinning,testruns,testheighest,testaverage,testw,testh}) {
  return (
    <div className='container-fluid'>
    <main>
    <div className="row row-cols-1 row-cols-md-4 mb-3">

      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal text-center">Personal</h4>
          </div>
          <div className="card-body">
          <p>Name: {name}</p>
    <hr></hr>
          <p>Country: {country}</p>
    <hr></hr>
          <p>Birth Date: {dob}</p>
    <hr></hr>
          <p>Role: {role}</p>
    <hr></hr>
          <p>Bat: {bat}</p>
    <hr></hr>
          <p>Bowl: {bowl}</p>
    <hr></hr>
          <p>Height: {height}</p>
            
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal text-center">T-20I</h4>
          </div>
          <div className="card-body">
          <p>Match : {t20match}</p>
    <hr></hr>
          <p>Runs: {t20runs}</p>
    <hr></hr>
          <p>Highest: {t20heighest}</p>
    <hr></hr>
          <p>Average: {t20average}</p>
    <hr></hr>
          <p>Wickets: {t20w}</p>
    <hr></hr>
          <p>Strike Rate: {t20strike}</p>
    <hr></hr>
          <p>100: {t20h}</p>
            
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal text-center"> One Day</h4>
          </div>
          <div className="card-body">
          <p>Match : {odimatch}</p>
    <hr></hr>
          <p>Runs: {odiruns}</p>
    <hr></hr>
          <p>Highest: {odiheighest}</p>
    <hr></hr>
          <p>Average: {odiaverage}</p>
    <hr></hr>
          <p>Wickets: {odiw}</p>
    <hr></hr>
          <p>Strike Rate: {odistrike}</p>
    <hr></hr>
          <p>100 : {odih}</p>
             
          </div>
        </div>
      </div>

      
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal text-center">Test </h4>
          </div>
          <div className="card-body">
          <p>Match : {testmatch}</p>
    <hr></hr>
          <p>Innings: {testinning}</p>
    <hr></hr>
          <p>Runs: {testruns}</p>
    <hr></hr>
          <p>Highest: {testheighest}</p>
    <hr></hr>
          <p>Average: {testaverage}</p>
    <hr></hr>
          <p>Wickets: {testw}</p>
    <hr></hr>
          <p>100: {testh}</p>
             
          </div>
        </div>
      </div>
    </div> 
    
  </main>
    </div>
  )
}

export default More
