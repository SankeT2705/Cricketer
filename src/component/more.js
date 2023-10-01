 import React from 'react'

function More({name,country,dob,role,bat,bowl,height,t20match,t20runs,t20heighest,t20average,t20w,t20strike,t20h,odimatch,odiruns,odiheighest,odiaverage,odiw,odistrike,odih,testmatch,testinning,testruns,testheighest,testaverage,testw,testh,t20b,t20f,t20s,t20n,t20d,t20fi,t20t,t20th,t20fh,odib,odif,odis,odin,odid,odifi,odit,odith,odifh,teb,tef,tes,ten,ted,tefi,tet,teth,tefh,iplruns,iplb,iplf,ipls,ipln,ipld,iplfi,iplh,iplt,iplth,iplfh,iplhigh}) {
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
      <hr></hr>
    <div className='row'>
    <div className="table-responsive border shadow rounded m-1">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Runs</th>
                        <th>Balls</th>
                        <th>Fours</th>
                        <th>Sixs</th>
                        <th>Highest</th>
                        <th>50s</th>
                        <th>100s</th>
                        <th>200s</th>
                        <th>300s</th>
                        <th>400s</th>
                        <th>NT</th>
                        <th>Ducks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>T20I</th>
                        <td>{t20runs} </td>
                        <td>{t20b} </td>
                        <td> {t20f}</td>
                        <td> {t20s}</td>
                        <td>{t20heighest} </td>
                        <td>{t20fi} </td>
                        <td>{t20h} </td>
                        <td>{t20t} </td>
                        <td>{t20th} </td>
                        <td>{t20fh} </td>
                        <td>{t20n} </td>
                        <td>{t20d} </td>
                    </tr>
                    <tr>
                        <th>ODI</th>
                        <td>{odiruns} </td>
                        <td>{odib} </td>
                        <td>{odif}</td>
                        <td>{odis} </td>
                        <td>{odiheighest} </td>
                        <td>{odifi} </td>
                        <td>{odih}</td>
                        <td>{odit} </td>
                        <td>{odith} </td>
                        <td>{odifh} </td>
                        <td>{odin} </td>
                        <td> {odid}</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <th>Test</th>
                        <td>{testruns} </td>
                        <td>{teb}</td>
                        <td>{tef} </td>
                        <td>{tes} </td>
                        <td>{testheighest} </td>
                        <td>{tefi} </td>
                        <td>{testh} </td>
                        <td>{tet} </td>
                        <td>{teth}</td>
                        <td>{tefh} </td>
                        <td>{ten} </td>
                        <td>{ted}</td>
                    </tr>
                    <tr>
                        <th>IPL</th>
                        <td>{iplruns} </td>
                        <td>{iplb} </td>
                        <td>{iplf} </td>
                        <td>{ipls} </td>
                        <td>{iplhigh} </td>
                        <td>{iplfi} </td>
                        <td>{iplh} </td>
                        <td>{iplt} </td>
                        <td>{iplth} </td>
                        <td> {iplfh}</td>
                        <td>{ipln} </td>
                        <td>{ipld} </td>
                     
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </main>
    </div>
  )
}

export default More
