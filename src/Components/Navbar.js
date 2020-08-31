import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <>
        <nav>
        <div className="nav-wrapper teal">
        <Link to="/" className="brand-logo left">Social</Link>
        <ul id="nav-mobile" className="right">
        <li><Link to="/">Home</Link></li>
     
        </ul>
        </div>
        </nav>
        </>
    )
}
export default Navbar;