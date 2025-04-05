import "./Navbar.css"
import Menu from "../../assets/menu.svg"
import {useLocation,useNavigate} from "react-router-dom"

function Navbar(){
  const navigate = useNavigate()
  const location = useLocation()
    function sideNavButton(){
      if (location.pathname == "/Student" || location.pathname == "/Student/Profile"){
        return (
          <nav className="side-nav">
            <p onClick= {()=>{navigate("/Student/Profile")}} className="side-nav-item">PROFILE</p>
            <p onClick= {()=>{navigate("/Student/Courses")}} className="side-nav-item">COURSES</p>
            <p onClick= {()=>{navigate("/Student/Your-Courses")}} className="side-nav-item">YOUR COURSES</p>
            <p onClick= {()=>{navigate("/Student/Course-Material")}} className="side-nav-item">COURSE MATERIALS</p>
            <p onClick= {()=>{navigate("/Student/Recorded-Lectures")}} className="side-nav-item">RECORDED LECTURES</p>
          </nav>
        )
      }
      
      else if (location.pathname == "/Teacher"){
        return(
        <nav className="side-nav">
          <p className="side-nav-item">PROFILE</p>
          <p className="side-nav-item">CREATE A COURSE</p>
          <p className="side-nav-item">CREATED COURSES</p>
          <p className="side-nav-item">UPLOAD COURSE MATERIALS</p>
          <p className="side-nav-item">UPLOAD RECORDED LECTURES</p>
        </nav>
        )
      }
    }
    return(
        <>
        <nav className='nav-bar'>
        <p className ='app-title' onClick={()=>{navigate("/")}}>EDU - HUB</p>
        <div className ='nav-div'>
          <p className ='home-nav'>HOME</p>
          <p className ='about-nav'>ABOUT</p>
        </div>
      </nav>
      {sideNavButton()}
      </>
    )
}
export default Navbar