import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'
import "./Navbar.css"

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-myRed">
  
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">START BOOTSTRAP <span className="sr-only">(current)</span></a>
            </li>
          
           
          </ul>

          <span className="navbar-text">

            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
              <a className="nav-link" href="#">HOME</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">ABOUT</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">SAMPLE POST</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">CONTACT</a>
              </li>
            </ul>
            </div>
          </span>
        </div>
      </nav>
        
    )}

export default NavBar