import {useState} from "react" ;
import './App.css'
import Home from './components/Home/Home'
import Courses from "./components/Courses/Courses";

function App() {
  
  return (
    <>   
     <h1 className="text-6xl text-center font-bold ">Course Registration</h1>
      <Home></Home>  
      <Courses></Courses>   
    </>
  )
}

export default App
