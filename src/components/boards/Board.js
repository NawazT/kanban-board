import React from 'react'
import Card from '../cards/Card'
import './Board.css'
import { MoreHorizontal, Plus } from 'react-feather'

function Board() {
  return (
    <div className='board'>
      <div className="board_top">
        <p className="board_top_title">In Progress 
            <span> 2 </span>
        </p>

        <Plus />
        <MoreHorizontal />
        
      </div>
      <div className="board_cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Board
