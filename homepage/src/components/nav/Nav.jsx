import React from 'react'
import {MdExitToApp} from "react-icons/md"
import {CiMinimize1} from "react-icons/ci"
import {AiOutlineSearch} from "react-icons/ai"
import {TbSearchOff} from "react-icons/tb"
import {GiHamburgerMenu,GiEgyptianProfile} from "react-icons/gi"

import "./nav.css"
function Nav() {
  return (
    <>
    <div className='nav-bar'>
        <div className='enter-exit-icons col-3'>
        <MdExitToApp className='exit' size={30} fontWeight={"700"} color={"white"}/>
        <CiMinimize1 className='minimize' size={30} color={"white"}/>
        <TbSearchOff className='search-off' size={30} color={"white"}/>
        </div>
        <div className='filler col-6'>
        <h4 className='title'>animania</h4>
        </div>
        <div className='settings-icons col-3'>
            <GiHamburgerMenu size={30} color={"white"} className="settings"/>
            <GiEgyptianProfile size={30} color={"white"} className="profile"/>
        </div>
      
     
    </div>
    <div className='search-section'>
            <div className='outer-search-rim'>
                <input placeholder='search' className='query'/>
                <AiOutlineSearch className='search' size={20} color={"white"} data-toggle="tooltip" data-placement="right" title='search'/>
               
            </div>

        </div>
    </>
    
  )
}

export default Nav