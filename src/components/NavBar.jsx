import React from 'react'
import NavItem from './NavItem'

export default function NavBar() {

    const menuItem = ["Home","About","Projects","Contact"]
  return (
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        {
           menuItem.map((item)=>{
                return (<NavItem menuName={item}></NavItem>)
           }) 
        }
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  
  )
}
