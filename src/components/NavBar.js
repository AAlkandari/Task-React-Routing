import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
        <div>
           <Link to = "/">Home</Link> 
        </div>
        <div>
            <Link to = "/product-list">Product List</Link>
        </div>
        </nav>
    )
}

export default NavBar
