import React from "react"
import { Counter } from './Components/Counter';

function App() {

  return (
    <div className=" bg-[#2f4fa6] h-screen w-screen flex justify-center items-center relative ">
      <h1 className="absolute top-7 left-1/2 -translate-x-1/2 text-lg sm:text-xl lg:text-3xl font-semibold underline  decoration-white decoration-wavy text-white underline-offset-4 text-center ">React Redux-RTK(redux toolkit) Counter App</h1>
      <Counter />
      <h1 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-base sm:text-lg lgtext-xl font-semibold underline  decoration-white decoration-wavy text-white underline-offset-4 font-mono text-center  ">Created with &#9829; (love) by Tahir!</h1>
    </div>
  )
}

export default App
