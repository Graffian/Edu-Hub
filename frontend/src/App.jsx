import {Routes , Route} from "react-router-dom"
import './App.css'
import Login from "./components/Login/Login"
import Student from "./components/Student/Student"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Student/Profile"
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Student" element={<Student/>}/>
      <Route path="/Student/Profile" element={<Profile/>}/>
    </Routes>
    </>
  )
}

export default App
