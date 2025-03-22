import React from 'react'

export default function Comment(props) {
  return (
    <tr>
        <td>{props.id}</td>
        <td>{props.data.userId}</td>
        <td>{props.data.title}</td>
        <td>{props.data.body}</td>
    </tr>
  )
}
