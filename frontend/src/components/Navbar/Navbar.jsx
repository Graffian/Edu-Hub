import "./Navbar.css"
import Menu from "../../assets/menu.svg"
import url from "url"
function Navbar(){


    function sideNav(){
        if (url.pathname == "/Student"){
            return (
                <nav className="side-nav">
                    
                </nav>
            )
        }else{
            return(
                <nav className="side-nav">

                </nav>
            )
        }
    }
    return(
        <>
        <nav className='nav-bar'>
        <span onClick={sideNav}><img src={Menu} alt="menu-icon"/></span>
        <p className='app-title'>EDU - HUB</p>
        <div className='nav-div'>
          <p className='home-nav'>HOME</p>
          <p className='about-nav'>ABOUT</p>
        </div>
      </nav>
      {sideNav()}
      </>
    )
}
export default Navbar