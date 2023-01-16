import React from 'react'

export const Navbar = () => {





  return (
    <div>   
       <nav>
        <div className="logo"><h1>Thai Street Food</h1></div>
          <div className="openMenu"><i className="fa fa-bars"></i></div>
            <ul className="mainMenu">
            <li><a href="#">Hjem</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Min side</a></li>
            <li><a href="#">Kontakt</a></li>
            <div className="closeMenu"><i className="fa fa-times"></i></div>
          </ul>
      </nav> 
  </div>
  )

}
