import './App.css';
// import React, {useEffect, useRef, useState } from 'react';
import LockScreen from './LockScreen';
// import {idbRequest} from './store'

// import {idbRequest} from './store'


function App() {
  // const videoRef = useRef(null)
  // const photoRef = useRef(null)
  // const [counter, setCount] = useState(0);
  // // const [viewer, setViewer] = useState(false);
  // const [captured, setCaptured] = useState(false);
  // const [numCaptures] = useState(60);


  // const getVideo = () => {
  //   navigator.mediaDevices.getUserMedia({video: true})
  //                          .then(stream => {
  //                             let video = videoRef.current;
  //                             video.setAttribute('autoplay', ''); // required to tell iOS safari we don't want fullscreen

  //                             video.setAttribute('muted', ''); // required to tell iOS safari we don't want fullscreen

  //                             video.setAttribute('playsinline', ''); // required to tell iOS safari we don't want fullscreen
  //                             video.srcObject = stream
  //                             video.play();
  //                          }).catch(err =>{
  //                           console.error("Error occures",err) 
  //                          })
  // }
  // const getThem = async ()=>{
  //   try{
  //     throw new Error("Already done")

  //   }catch(e){
  //       console.log("egree", e)
  //       console.log("Error eeing")
  //   }
  // }

  // const callapis =()=>{
  //   setCount(counter+1)
  //   // idbRequest.set_key(`key_${counter}`, "event")

  //   navigator?.serviceWorker?.controller?.postMessage({
  //     type: "POST_DATA",
  //     title: "json-server", 
  //     author: "uthor",
  //     key: counter
  //   });
  // }

  // const takePhoto = () =>{

  //   let videoCanvas = videoRef.current;
    
  //   photoRef.current.width=640; 
  //   photoRef.current.height=480;
    
  //   let ctx = photoRef.current.getContext('2d');
  //   ctx.drawImage(videoCanvas, 0, 0, photoRef.current.width , photoRef.current.height);

  //   photoRef.current.toBlob( (blob) => {
  //   console.log("blob",JSON.stringify(blob))
  //   navigator?.serviceWorker?.controller?.postMessage({
  //       blob: blob,
  //       type: "POST_DATA"
  //     });
  //   },"image/jpeg" )

  // }

  // useEffect(() => {
  //   getVideo();
  // },[])

  // const setIntervals = ()=>{

  //    var count = 0

  //    while(count < numCaptures)
  //    {
       
  //        takePhoto();
  //        setCount(count)        
  //       count = count + 1
  //    }

  //    setCaptured(true)
  
  
  // }

  return (
    <div>
      <LockScreen></LockScreen>
      
      {/* { viewer? <Viewer></Viewer> : captured ? <Captured setView={()=> setViewer(true) } >{counter}</Captured> :
       <div className='camera' >
          <video ref={videoRef}></video>
          <canvas style={{display: "none" }} ref={photoRef} id="photores"></canvas>
          <div className='Buttnss'>
            <button className='btn btn-primary text-center'  onClick={setIntervals} disabled={counter===60} >Capture Images</button>
          </div>
       </div>
      } */}
      {/* <button className='btn btn-primary text-center'  onClick={callapis} >Capture Images {counter}</button>  */}
      {/* <button className='btn btn-primary text-center'  onClick={callapis} >Capture sd {counter}</button> */}
    </div>
  );
}

export default App;
