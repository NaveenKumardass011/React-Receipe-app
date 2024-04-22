import React from 'react'
import {useLocation,Link} from 'react-router-dom'
import { IoFastFoodSharp } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { FaHome} from "react-icons/fa";
import "./cssfile/Navbar.css"

function Navbar({menuBarClose,menuActive,menuBar,animationChange,menu}) {
    const location=useLocation()
  return (
    <div className='navbar-container'>
         <div className="navbar">
          <div className="heading">F<span>oo</span>diesHub</div>
      <div className='navbar-right'> 
              <Link className={location.pathname==="/"?"link selected":"link"}         to="/" ><FaHome className='icon' /><span>Home</span></Link>
              <Link className={location.pathname==="/Receipe"?"link selected":"link"}  to="/Receipe" ><IoFastFoodSharp className='icon' /><span>Receipe</span></Link>
              <Link className={location.pathname==="/Settings"?"link selected":"link"} to="/Settings"><VscSettings className='icon'/><span>Settings</span></Link>

          </div>
          {menu ===true &&<div className='navbar-right1' style={{animationName:animationChange}}> 
              <Link className={location.pathname==="/"?"link1 selected":"link1"}         to="/" ><FaHome className='icon-slider' /><span>Home</span></Link>
              <Link className={location.pathname==="/Receipe"?"link1 selected":"link1"}  to="/Receipe" ><IoFastFoodSharp className='icon-slider'/><span>Receipe</span></Link>
              <Link className={location.pathname==="/Settings"?"link1 selected":"link1"} to="/Settings"><VscSettings className='icon-slider'/><span>Settings</span></Link>

          </div>}
         
               <div className={menuActive} onClick={()=>menuBarClose(true)}>
                <div className={menuBar}></div>
                <div className={menuBar}></div>
                <div className={menuBar}></div>
             </div>
    </div>
    </div>
  )
}

export default Navbar