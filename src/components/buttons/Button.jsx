import React from 'react'
import "./Button.css"


function Button({num,onClick}) {
  return (
    <div onClick={onClick} className='buttonbox'>
        <h1 className="num">{num}</h1>
    </div>
  )
}

export default Button