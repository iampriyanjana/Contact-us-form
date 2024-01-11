import React from 'react'
import '../App.css'

function Button({btnText,icon,isOutline}) {
  return (
    <div>
        <button className={isOutline ? "btn2" : "btn"}>{icon}{btnText}</button>
        <form>
        </form>
    </div> 
  )
}

export default Button