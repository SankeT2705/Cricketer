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
          <p>Country: {country}</p>
          <p>Birth Date: {dob}</p>
          <p>Role: {role}</p>
          <p>Bat: {bat}</p>
          <p>Bowl: {bowl}</p>
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
          <p>Runs: {t20runs}</p>
          <p>Highest: {t20heighest}</p>
          <p>Average: {t20average}</p>
          <p>Wickets: {t20w}</p>
          <p>Strike Rate: {t20strike}</p>
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
          <p>Runs: {odiruns}</p>
          <p>Highest: {odiheighest}</p>
          <p>Average: {odiaverage}</p>
          <p>Wickets: {odiw}</p>
          <p>Strike Rate: {odistrike}</p>
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
          <p>Innings: {testinning}</p>
          <p>Runs: {testruns}</p>
          <p>Highest: {testheighest}</p>
          <p>Average: {testaverage}</p>
          <p>Wickets: {testw}</p>
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