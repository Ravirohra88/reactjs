import { useState } from "react"
function App() {
  const [color ,setcolor]= useState("black")

  return (
    <div className="w-full h-screen " style = {{backgroundColor:color}}>
     <div className = "fixed flex flex-wrap justify-center p-4 inset-x-0 top-20 px-2 ">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
         <button 
         onClick={()=> setcolor("red")}
         className="outline-none px-4 py-3 rounded-full shadow-lg text-white"style={{backgroundColor:"red"}}>red</button>
         <button onClick={()=> setcolor("blue")} className="outline-none px-4 py-3 rounded-full shadow-lg text-white"style={{backgroundColor:"blue"}}>blue</button>
         <button onClick={()=> setcolor("orange")} className="outline-none px-4 py-3 rounded-full shadow-lg text-white"style={{backgroundColor:"orange"}}>orange</button>
         <button onClick={()=> setcolor("white")} className="outline-none px-4 py-3 rounded-full shadow-lg text-black"style={{backgroundColor:"white"}}>white</button>
         <button onClick={()=> setcolor("black")} className="outline-none px-4 py-3 rounded-full shadow-lg text-white"style={{backgroundColor:"black"}}>black</button>
      </div> 
      </div>

    </div>
  )
}

export default App
