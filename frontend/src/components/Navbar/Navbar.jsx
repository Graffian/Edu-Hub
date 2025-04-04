import "./Navbar.css"
import Menu from "../../assets/menu.svg"
import {useLocation} from "react-router-dom"

function Navbar(){
  const location = useLocation()
    function sideNavButton(){
      if (location.pathname == "/Student"){
        return (
          <nav className="side-nav">
            <p className="side-nav-item">PROFILE</p>
            <p className="side-nav-item">COURSES</p>
            <p className="side-nav-item">YOUR COURSES</p>
            <p className="side-nav-item">COURSE MATERIALS</p>
            <p className="side-nav-item">RECORDED LECTURES</p>
          </nav>
        )
      }else if(location.pathname == "/"){
        return (
          <></>
        )
      }
      else{
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
        {/* <span onClick={sideNavButton}>
          <img src={Menu} alt="menu-icon" />
        </span> */}
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