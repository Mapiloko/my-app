import './App.css';
// import o9n from "o9n";
import React, {  useState } from 'react';



function LockScreen() {
  const [orientatn, setOrientation] = useState("portrait");
  // const [ori, setOri] = useState(false);

  const isLandscape = true

  const lockOrientation = (orientatn) =>{

        setOrientation(orientatn)
      
        let de =document.documentElement
        if(de.requestFullscreen)
            de.requestFullscreen()

        window.screen.orientation.lock(orientatn).then(res=>{        
          console.log(".screen.orientation", res)
        }).catch((e)=>{
          console.log("Error locking screen", e)
        })
  }


  window.addEventListener("orientationchange", (e) => {
    // if the orientation is landscape the e.target.orientatinon will be 90
    let  orientation=""
    // if (device === "iOS") {
    //   orientation = e.target.orientation === 0 ? "potrait" : "landscape";
    // } else if(device === "Android"){
      orientation = e.target.screen.orientation.angle === 0 ? "potrait" : "landscape";
    
    if (orientation === "potrait" && !isLandscape) {
      console.log("potrait and not isLandscape ")
    } else if (orientation === "landscape" && !isLandscape) {
      console.log("landscape and not isLandscape ")
    } else if (orientation === "landscape" && isLandscape) {
      console.log("landscape and  isLandscape ")
    } else {
      console.log("landscape and  else ")
    }
  });


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

       {/* <div style={{display: "grid", justifyContent: "center", marginTop:"15px",  marginBottom:"15px" }}>
        </div> */}
    </div>
  );
}

export default LockScreen;
