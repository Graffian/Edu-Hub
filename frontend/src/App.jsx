
import './App.css'
import Login from "./components/Login/Login"
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
    <Login/>
    </>
  )
}

export default App
