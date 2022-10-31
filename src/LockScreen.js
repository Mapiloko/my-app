import './App.css';
// import o9n from "o9n";
import {  useState } from 'react';



function LockScreen() {
    const [orientatn, setOrientation] = useState("portrait");

  const lockOrientation = (orientatn) =>{

        setOrientation(orientatn)
      
        // let de =document.documentElement
        // if(de.requestFullscreen)
        //     de.requestFullscreen()

        // o9n.orientation.lock(orientatn).then(res=>{        
        //   console.log(".screen.orientation", res)
        // }).catch((e)=>{
        //   console.log("Error locking screen", e)
        // })
  }

  return (
    <div className={orientatn} >
        <div style={{display: "grid", justifyContent: "center", marginTop:"15px",  marginBottom:"15px" }}>
          <div>
            <button className='btn btn-primary text-center' style={{ marginRight:"10px"}}  onClick={()=>lockOrientation("portrait")} >Lock Potrait</button>
            <button className='btn btn-primary text-center' style={{ marginLeft:"10px"}}  onClick={()=>lockOrientation("landscape")} >Lock Landscape</button>
          </div>
        </div>

       dummy text text text text asmmsasa sad sad sa sa dd saasd  sajsasa sadsad sadsadsa dsadsa hsadsad 
       sadsadbsa dsadsa dsad sadhsa dsahdsa dsa dsadsa dasjd asjsa dsajd asdjsa dsajda sdjasd sajdsa dasjd
       jas dasjdsa daksdsadsa d askdsadsa mdsa dsamd samd sakd askd asmdsa dmas dsa das asd sandsadmsandsadnsam 
       sadsadb sadnsadsa dsa dsandjas dasjdnsa dajsd samsad jasdsa dasdsa dsakndas 
    </div>
  );
}

export default LockScreen;
