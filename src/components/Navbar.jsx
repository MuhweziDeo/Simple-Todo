import React from 'react'
import { Link, NavLink,withRouter} from 'react-router-dom';
const Navbar=()=>{
    return (
        <nav>
            <div>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">services</Link></li>
                <li><Link to="/about">About</Link></li>
                </ul>


            </div>
        </nav>


    )
}

export default withRouter(Navbar);
