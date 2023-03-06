import React from 'react'

export default function Employee(props) {
  return (
    <div>
      <h3>Here is the {props.name}</h3>
      <p>{props.role ? props.role : 'There are not available'}</p>
    </div>
  )
}
