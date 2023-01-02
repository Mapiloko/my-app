import './App.css';
import findIndex from "lodash/findIndex";
// import startCase from "lodash/startCase";
import React from 'react';

function App() {


  // Original array
let array1 = [4, 2, 3, 1, 4, 2]
  
// Using lodash.findIndex
let index = findIndex(array1, (e) => {
    return e == 2;
}, 2);
  
console.log("original Array: ", array1)
console.log("index: ", index)
  


  return (
    <div>
      <p>This is test sentense/p>
      <p>This is test sentense</p>
      <p>This is test sentense</p>
      <p>This is test sentense</p>
      <p>This is test sentense</p>
      <p>This is test sentense</p>
      <p>This is test sentense</p>
    </div>
  );
}

export default App;
