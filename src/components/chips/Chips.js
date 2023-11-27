import React from 'react'

function Chips(props) {
  return (
    <div className='Chip'>
        {props.text}
        {props.icon}
    </div>
  )
}

export default Chips