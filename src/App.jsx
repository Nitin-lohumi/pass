import { useCallback, useEffect, useState } from 'react'
import './App.css'
function App() {
  const [number,setNumber] = useState(false);
  const [sps ,setSps] = useState(false);
  const [lenght,setLenght] = useState(12);
  const [password,setPassword] =useState("");
  const [upperCase,setUpperCase] = useState(false);
  const paassword_genrator = useCallback(()=>{
    let str  = "abcdefghijklmnopqrstuvwxyz";
    let pass="";
    if(upperCase)  str = str+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(number) str= str+"1234567890";
    if(sps) str = str+"!@#$%^&*()";
    for(let i=0; i<lenght; i++){
    let char = Math.floor(Math.random()* str.length+1);
    pass = pass+str.charAt(char);
    }
    setPassword(pass);
  },[lenght,sps,setPassword,number,upperCase]);
  function Genrate(){
    paassword_genrator();
     useEffect(()=>{
    Genrate();
  },[lenght,number,sps,paassword_genrator,upperCase])
  }
 
  return(
    <>  
    <div>
      <h2>
        password Genrator
      </h2>
      <p>
        password Lenght 
        <input type="range"
        max={30}
        min={3}
        value={lenght}
        onChange={(e)=>setLenght(e.target.value)}
        />
      </p>
      number<input type="checkbox" onChange={()=>
        {setNumber((prev)=>!prev)}
        }/>
        <br />
        special Charcters : <input type="checkbox"onChange={()=>
        {setSps((prev)=>!prev)}
        }/>
        <br />
       set Uppercase:  <input type="checkbox" onChange={()=>{setUpperCase((prev)=>!prev)}} />
       <br />

       <br/>
           <button onClick={Genrate}>Genrate</button>
      <h2>{password}</h2>
    </div>
    </>
  );
}

export default App
