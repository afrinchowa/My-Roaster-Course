import {useState} from "react" ;
import './App.css'
import Home from './components/Home/Home'
import Courses from "./components/Courses/Courses";
import Cart from "./components/Cart/Cart";

function App() {
  
  return (
    <>   
     <h1 className="text-6xl text-center font-bold border-b-2">Course Registration</h1>
      <Home></Home>  
         <div>
         <Courses></Courses>
         <Cart></Cart>
         </div>
         <div>

         </div>
    </>
  )
}

export default App
