import React from 'react'
import {Link} from 'react-router-dom'

function Navbar({numFavorite}){
    return (
    <div className="inner-width">  
        <nav className="navigation-menu">
          <Link to="/"> Početna</Link>
          <Link to="/products"> Proizvodi</Link>
          <Link to="/favorites" className='fav'> Izabrani <div className='numFav'>{numFavorite}</div></Link>
        </nav>
      </div>

    )
}

export default Navbar