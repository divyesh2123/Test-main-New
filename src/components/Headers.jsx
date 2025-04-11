import React from 'react'
import NavBar from './NavBar'
import './header.css';
export default function Headers() 
{
 
  return (
    <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header" style={{"color":"red","backgroundColor":"yellow"}}>
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>                        
        </button>
        <a className="navbar-brand" href="#">Logo</a>
      </div>
        <NavBar/>
    </div>
  </nav>
  )
}
