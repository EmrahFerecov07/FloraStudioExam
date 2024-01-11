import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'
import { IoFootballSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav id='navbar'>
            <div className='container'>
                <div className='navbox'>
                    <div className='navleft'>
                        <h2 className='fs'>Floral Studio</h2>
                    </div>

                    <div className='navmid'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About us</NavLink>
                        <NavLink to="/add">Portfolio</NavLink>
                        <NavLink to="/test">Pricing</NavLink>
                        <NavLink to="/tester">Contacts</NavLink>
                    </div>

                </div>

                <div className='navright'>
                    <div className='icons'>
                        <span><IoFootballSharp /></span>
                    </div>
                </div>







            </div>






        </nav>
    )
}

export default Navbar