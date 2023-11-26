import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import './Card.css'

function Card() {
  return (
    <div className='Card'> 
      <div className='card_top'>
        <div className="Card_Id"> <h3> CAM-1 </h3>
        </div>
        <div className='Card_User'>
            <div className="User_name">
                <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className="User_acticity">
                    <p>Avl</p>
            </div>
        </div>
      </div>
      <div className="Card_mid">
        <div className="Card_progress">
            <h3>Todo</h3>
        </div>
        <div className="Card_title">
            <h2> CARD TITLE </h2>
        </div>
      </div>

      <div className="Card_bottom">
        <div className="Card_priority">
            <p>4</p>
        </div>
        <div className="Card_tags">
            <p>Feature Request</p>
        </div>
      </div>
    </div>
  )
}

export default Card
