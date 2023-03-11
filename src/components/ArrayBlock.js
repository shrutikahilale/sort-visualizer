import React from 'react'
import './style.css'

function ArrayBlock({ element, classN }) {
  return (
    <div className={`block ${classN}`}>{element}</div>
  )
}


// How to write mixing classes?
{/* <div className={`existing-class ${className}`}></div> */ }

export default ArrayBlock