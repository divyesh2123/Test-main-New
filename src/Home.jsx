import React from 'react'
import p from './data';
export default function Home() {
  return (
    <table>
      {
        p.map(function(f){

          return (<tr>
             <td>{f.id}</td>
             <td>{f.title}</td>
            <td>{f.body}</td>
          </tr>)
        })
      }
      
    </table>
  )
}
