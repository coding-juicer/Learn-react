import { useState } from "react"
function App() {
  const [color, setColor] =useState("white")

  const [diffcolor, setDiffColor] =useState("black")

  

  return (
    <>
      <div className="w-full h-screen duration-200 flex flex-wrap flex-row grid-gap" style={{backgroundColor:color}}>

        <div className="w-70 h-70 m-5 rounded-2xl" style={{backgroundColor:diffcolor}} ></div>
        <div className="w-70 h-70 m-5 rounded-2xl" style={{backgroundColor:diffcolor}} ></div>
        <div className="w-70 h-70 m-5 rounded-2xl" style={{backgroundColor:diffcolor}} ></div>
        <div className="w-70 h-70 m-5 rounded-2xl" style={{backgroundColor:diffcolor}} ></div>
        <div className="w-70 h-70 m-5 rounded-2xl" style={{backgroundColor:diffcolor}} ></div>
        <div className="w-70 h-70 m-5 rounded-2xl" style={{backgroundColor:diffcolor}} ></div>
        <div className="w-70 h-70 m-5 rounded-2xl" style={{backgroundColor:diffcolor}} ></div>
        <div className="w-70 h-70 m-5 rounded-2xl" style={{backgroundColor:diffcolor}} ></div>
        <div className="w-70 h-70 m-5 rounded-2xl" style={{backgroundColor:diffcolor}} ></div>
        <div className="w-70 h-70 m-5 rounded-2xl" style={{backgroundColor:diffcolor}} ></div>
        
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full" onClick={()=>{setColor("#7C444F"),setDiffColor("#E2E2B6")}} style={{backgroundColor:"#7C444F"}}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full" onClick={()=>{setColor("#789DBC"),setDiffColor("#FF9874")}} style={{backgroundColor:"#789DBC"}}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full" onClick={()=>{setColor("#C599B6"),setDiffColor("#D7C3F1")}} style={{backgroundColor:"#C599B6"}}>purple</button>
            <button className="outline-none px-4 py-1 rounded-full" onClick={()=>{setColor("lightblue"),setDiffColor("#03346E")}} style={{backgroundColor:"lightblue"}}>Skyblue</button>
            <button className="outline-none px-4 py-1 rounded-full" onClick={()=>{setColor("#B1C29E"),setDiffColor("#96CEB4")}} style={{backgroundColor:"#B1C29E"}}>green</button>
            <button className="outline-none px-4 py-1 rounded-full" onClick={()=>{setColor("#FFDFC8"),setDiffColor("#527853")}} style={{backgroundColor:"#FFDFC8"}}>lightPurple</button>
            <button className="outline-none px-4 py-1 rounded-full" onClick={()=>{setColor("lightgreen"),setDiffColor("#0D7C66")}} style={{backgroundColor:"lightgreen"}}>LightGreen</button>
            <button className="outline-none px-4 py-1 rounded-full" onClick={()=>{setColor("#F6F0F0"),setDiffColor("#021526")}} style={{backgroundColor:"#F6F0F0"}}>White</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
