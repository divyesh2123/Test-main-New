import React from 'react'

export default function Button(props) {




  return (
    <button className={props.variant=="primary"? "primary": "secound"}>
         {props.children}
        {props.text}
    </button>
  )
}
