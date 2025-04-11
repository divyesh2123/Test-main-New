import React from 'react'

export default function Logo(props) {
  return (
    <a className="navbar-brand" href="#">
         <img src={props.url} />
       
       </a>
  )
}
