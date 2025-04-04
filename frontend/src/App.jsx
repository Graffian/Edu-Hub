import {Routes , Route} from "react-router-dom"
import './App.css'
import Login from "./components/Login/Login"
import Student from "./components/Student/Student"
import Navbar from "./components/Navbar/Navbar"
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Student" element={<Student/>}/>
    </Routes>
    </>
  )
}

export default App
