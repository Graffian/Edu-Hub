import {Routes , Route} from "react-router-dom"
import './App.css'
import Login from "./components/Login/Login"
import Student from "./components/Student/Student"
function App() {


  return (
    <>
    <nav className='nav-bar'>
      <p className='app-title'>EDU - HUB</p>
      <div className='nav-div'>
        <p className='home-nav'>HOME</p>
        <p className='about-nav'>ABOUT</p>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Student" element={<Student/>}/>
    </Routes>
    </>
  )
}

export default App
