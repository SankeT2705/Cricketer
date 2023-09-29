import React,{useState} from 'react'
import Navbar from './navbar'
import Profile from './profile'
import axios from 'axios'
import Login from './login'
import More from './more'
function App() {
   
  
  const [name,setName]=useState('')
  const [country,setCountry]=useState('')
  const [image,setImge]=useState('https://www.shutterstock.com/image-vector/man-icon-vector-250nw-1040084344.jpg')
  const [bod,setbod]=useState('')
  const [role,setrole]=useState('')
  const [bat,setbat]=useState('')
  const [bowl,setbowl]=useState('')
  const [height,setheight]=useState('NA')

  const [t20match,sett20match]=useState('')
  const [t20w,sett20w]=useState('')
  const [t20runs,sett20runs]=useState('')
  const [t20heighest,sett20heighest]=useState('')
  const [t20average,sett20average]=useState('')
  const [t20strike,sett20strike]=useState('')
  const [t20h,sett20h]=useState('')

  const [odimatch,setodimatch]=useState('')
  const [odiw,setodiw]=useState('')
  const [odiruns,setodiruns]=useState('')
  const [odiheighest,setodiheighest]=useState('')
  const [odiaverage,setodiaverage]=useState('')
  const [odistrike,setodistrike]=useState('')
  const [odih,setodih]=useState('')
  

  const [testmatch,settestmatch]=useState('')
  const [testinning,settestinning]=useState('')
  const [testruns,settestruns]=useState('')
  const [testheighest,settestheighest]=useState('')
  const [testaverage,settestaverage]=useState('')
  const [testw,settestw]=useState('')
  const [testh,settesth]=useState('')

  const [more,setMore]=useState(false)
  let Moreconent=''
  if(more)
  {
Moreconent=<More name={name} country={country} dob={bod} role={role} bat={bat} bowl={bowl} height={height} t20match={t20match} t20runs={t20runs} t20heighest={t20heighest} t20average={t20average} t20w={t20w} t20strike={t20strike}
t20h={t20h} odimatch={odimatch} odiruns={odiruns} odiheighest={odiheighest} odiaverage={odiaverage} odiw={odiw} odistrike={odistrike}
odih={odih} testmatch={testmatch} testinning={testinning} testruns={testruns} testheighest={testheighest} testaverage={testaverage} testw={testw} testh={testh}
/>
  }

  const bowling=async(id)=>{
    const response = await axios.get(`https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}/bowling`, {
    
     headers: {
         'X-RapidAPI-Key': '7612df429dmshfd1ddf59e13dd91p138af1jsn4469652f23fd',
         'X-RapidAPI-Host':  'cricbuzz-cricket.p.rapidapi.com'
     }
      
 });
 
 sett20w(response.data.values[5].values[3])
 setodiw(response.data.values[5].values[2])
 settestw(response.data.values[5].values[1])

 
 
}
const bating=async(id)=>{
  const response = await axios.get(`https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}/batting`, {
 
   headers: {
       'X-RapidAPI-Key': 'b4712df314msh3e3f59b944cfcecp1aec59jsn834e4a3fa039',
       'X-RapidAPI-Host':  'cricbuzz-cricket.p.rapidapi.com'
   }
    
});
 sett20match(response.data.values[0].values[3])
 setodimatch(response.data.values[0].values[2])
 settestmatch(response.data.values[0].values[1])
 
 sett20runs(response.data.values[2].values[3])
 setodiruns(response.data.values[2].values[2])
 settestruns(response.data.values[2].values[1])

 sett20heighest(response.data.values[4].values[3])
 setodiheighest(response.data.values[4].values[2])
 settestheighest(response.data.values[4].values[1])

 sett20average(response.data.values[5].values[3])
 setodiaverage(response.data.values[5].values[2])
 settestaverage(response.data.values[5].values[1])

 sett20strike(response.data.values[6].values[3])
 setodistrike(response.data.values[6].values[2])
 settestinning(response.data.values[1].values[1])

 sett20h(response.data.values[12].values[3])
 setodih(response.data.values[12].values[2])
 settesth(response.data.values[12].values[1])

 bowling(id)
}
  const findImage=async(id)=>{
    const response = await axios.get(`https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}`, {
     params: { plrN: id },
     headers: {
         'X-RapidAPI-Key': '566012bfd2msh4ef44ffff945b67p15c155jsna856bb742f11',
         'X-RapidAPI-Host':  'cricbuzz-cricket.p.rapidapi.com'
     }
      
 });
 
 
 setImge(response.data.image)
 setbod(response.data.DoBFormat)
 setrole(response.data.role)
 setbat(response.data.bat)
 setbowl(response.data.bowl)
 setheight(response.data.height)


 bating(id)
}
  const findPlayer=async(name)=>{
    const response = await axios.get('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search', {
     params: { plrN: name },
     headers: {
         'X-RapidAPI-Key': '566012bfd2msh4ef44ffff945b67p15c155jsna856bb742f11',
         'X-RapidAPI-Host':  'cricbuzz-cricket.p.rapidapi.com'
     }
 });
 
console.log(response.data.player[0])
 
setName(response.data.player[0].name)
setCountry(response.data.player[0].teamName)
findImage(response.data.player[0].id)
}

  const GetName=(e)=>
  {
     
    findPlayer(e)
  }
 
  return (
    <div className='container-fluid' style={{minHeight:'100vh',margin:'0px'}}>
    <Navbar/>
         


  <div  className="row">

    <div  className="col-sm-3 mb-3 mb-sm-0">
      <Login setName={GetName} chk={setMore}/>
    </div>

    <div  className="col-sm-9">
      <Profile name={name} country={country} image={image} chk={setMore}/>
    </div>
  </div>
  <div  className='row mt-2'>
    {Moreconent}
    </div> 

</div>
  )
}

export default App
