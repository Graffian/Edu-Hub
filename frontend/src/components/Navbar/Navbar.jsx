import "./Navbar.css"
import Menu from "../../assets/menu.svg"
import {useLocation} from "react-router-dom"

function Navbar(){
  const location = useLocation()
    function sideNavButton(){
      if (location.pathname == "/Student"){
        return (
          <nav className="side-nav">
            <p>PROFILE</p>
            <p>COURSES</p>
            <p>YOUR COURSES</p>
            <p>COURSE MATERIALS</p>
            <p>RECORDED LECTURES</p>
          </nav>
        )
      }else{
        return (
          <nav className="side-nav">
          <p>PROFILE</p>
          <p>CREATE A COURSE</p>
          <p>CREATED COURSES</p>
          <p>UPLOAD COURSE MATERIALS</p>
          <p>UPLOAD RECORDED LECTURES</p>
        </nav>
        )
      }
    }
    return(
        <>
        <nav className='nav-bar'>
        <span onClick={sideNavButton}>
          <img src={Menu} alt="menu-icon" />
        </span>
        <p className ='app-title'>EDU - HUB</p>
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