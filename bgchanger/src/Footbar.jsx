import React from "react";
import { useState } from "react";
function Footbar() {
    const[coller,setcoolor] = useState()
    function setcolor(){
        
    }
  return (
    <div>
      <button onClick={setcolor} style={{backgroundColor:'red'}}>red</button>
      <button onClick={setcolor} style={{backgroundColor:'blue'}}>blue</button>
      <button onClick={setcolor} style={{backgroundColor:'yellow'}}>yellow</button>
      <button onClick={setcolor} style={{backgroundColor:'green'}}>green</button>
      <button onClick={setcolor} style={{backgroundColor:'white'}}>white</button>
    </div>
  );
}

export default Footbar;
