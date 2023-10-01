import React,{useState} from 'react'
import Navbar from './navbar'
import Profile from './profile'
import axios from 'axios'
import Login from './login'
import More from './more'
function App() {
  const [loading, setLoading] = useState(false);
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
   
  const [t20b,settb]=useState('')
  const [t20f,settf]=useState('')
  const [t20s,setts]=useState('')
  const [t20n,settn]=useState('')
  const [t20d,settd]=useState('')
  const [t20fi,settfi]=useState('')
  const [t20t,settt]=useState('')
  const [t20th,settth]=useState('')
  const [t20fh,settfh]=useState('')

  const [odimatch,setodimatch]=useState('')
  const [odiw,setodiw]=useState('')
  const [odiruns,setodiruns]=useState('')
  const [odiheighest,setodiheighest]=useState('')
  const [odiaverage,setodiaverage]=useState('')
  const [odistrike,setodistrike]=useState('')
  const [odih,setodih]=useState('')
  
  const [odib,setodib]=useState('')
  const [odif,setodif]=useState('')
  const [odis,setodis]=useState('')
  const [odin,setodin]=useState('')
  const [odid,setodid]=useState('')
  const [odifi,setodifi]=useState('')
  const [odit,setodit]=useState('')
  const [odith,setodith]=useState('')
  const [odifh,setodifh]=useState('')

  const [testmatch,settestmatch]=useState('')
  const [testinning,settestinning]=useState('')
  const [testruns,settestruns]=useState('')
  const [testheighest,settestheighest]=useState('')
  const [testaverage,settestaverage]=useState('')
  const [testw,settestw]=useState('')
  const [testh,settesth]=useState('')
  

  const [teb,setteb]=useState('')
  const [tef,settef]=useState('')
  const [tes,settes]=useState('')
  const [ten,setten]=useState('')
  const [ted,setted]=useState('')
  const [tefi,settefi]=useState('')
  const [tet,settet]=useState('')
  const [teth,setteth]=useState('')
  const [tefh,settefh]=useState('')

  const [iplruns,setiplruns]=useState('')
  const [iplb,setiplb]=useState('')
  const [iplf,setiplf]=useState('')
  const [ipls,setipls]=useState('')
  const [ipln,setipln]=useState('')
  const [ipld,setipld]=useState('')
  const [iplfi,setiplfi]=useState('')
  const[iplh,setiplh]=useState('')
  const [iplt,setiplt]=useState('')
  const [iplth,setiplth]=useState('')
  const [iplfh,setiplfh]=useState('')
  const [iplhigh,setiplhigh]=useState('')
  const [more,setMore]=useState(false)
  let Moreconent=''
  if(more)
  {
  
Moreconent=<More name={name} country={country} dob={bod} role={role} bat={bat} bowl={bowl} height={height} t20match={t20match} t20runs={t20runs} t20heighest={t20heighest} t20average={t20average} t20w={t20w} t20strike={t20strike}
t20h={t20h} odimatch={odimatch} odiruns={odiruns} odiheighest={odiheighest} odiaverage={odiaverage} odiw={odiw} odistrike={odistrike}
odih={odih} testmatch={testmatch} testinning={testinning} testruns={testruns} testheighest={testheighest} testaverage={testaverage} testw={testw} testh={testh}
t20b={t20b} t20f={t20f} t20s={t20s} t20n={t20n} t20d={t20d} t20fi={t20fi} t20t={t20t} t20th={t20th} t20fh={t20fh} odib={odib} odif={odif} odis={odis} odin={odin} odid={odid} odifi={odifi} odit={odit} odith={odith} odifh={odifh} teb={teb} tef={tef} tes={tes} ten={ten} ted={ted} tefi={tefi} tet={tet} teth={teth} tefh={tefh} iplruns={iplruns} iplb={iplb} iplf={iplf} ipls={ipls} ipln={ipln} ipld={ipld} iplfi={iplfi} iplh={iplh} iplt={iplt} iplth={iplth} iplfh={iplfh} iplhigh={iplhigh} />
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
       'X-RapidAPI-Key':  'b4712df314msh3e3f59b944cfcecp1aec59jsn834e4a3fa039',
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

 settb(response.data.values[3].values[3])
 settf(response.data.values[8].values[3])
 setts(response.data.values[9].values[3])
 settfi(response.data.values[11].values[3])
 settt(response.data.values[13].values[3])
 settth(response.data.values[14].values[3])
 settfh(response.data.values[15].values[3])
 settn(response.data.values[7].values[3])
 settd(response.data.values[10].values[3])

 
 setodib(response.data.values[3].values[2])
 setodif(response.data.values[8].values[2])
 setodis(response.data.values[9].values[2])
 setodifi(response.data.values[11].values[2])
 setodit(response.data.values[13].values[2])
 setodith(response.data.values[14].values[2])
 setodifh(response.data.values[15].values[2])
 setodin(response.data.values[7].values[2])
 setodid(response.data.values[10].values[2])

 setteb(response.data.values[3].values[1])
 settef(response.data.values[8].values[1])
 settes(response.data.values[9].values[1])
 settefi(response.data.values[11].values[1])
 settet(response.data.values[13].values[1])
 setteth(response.data.values[14].values[1])
 settefh(response.data.values[15].values[1])
 setten(response.data.values[7].values[1])
 setted(response.data.values[10].values[1])

 setiplruns(response.data.values[3].values[4])
 setiplb(response.data.values[3].values[4])
 setiplf(response.data.values[8].values[4])
 setipls(response.data.values[9].values[4])
 setiplfi(response.data.values[11].values[4])
 setiplh(response.data.values[12].values[4])
 setiplt(response.data.values[13].values[4])
 setiplth(response.data.values[14].values[4])
 setiplfh(response.data.values[15].values[4])
 setipln(response.data.values[7].values[4])
 setipld(response.data.values[10].values[4])
 setiplhigh(response.data.values[4].values[4])
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
         'X-RapidAPI-Key': 'b437e9f8f7mshd0b9b1d83c11e88p14efe9jsnfb5716693049',
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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
    findPlayer(e)
  }
 
  return (
    <div className='container-fluid' style={{minHeight:'100vh',margin:'0px'}}>
    <Navbar/>
    <div  className="row">

      <div  className="col-sm-3 mb-3 mb-sm-0">
        <Login setName={GetName} chk={setMore}/>
       </div>
      
       {loading ? (
        <div className="loader-container col-sm-9">
            <div className="spinner"></div>
        </div>
      ):(
      <div  className="col-sm-9">
      <Profile name={name} country={country} image={image} chk={setMore}/>
      </div>
      )}
  </div>

  <hr/>
    
  <div  className='row mt-2'>
  
    {Moreconent}
    </div> 
    
</div>
  )
}

export default App
