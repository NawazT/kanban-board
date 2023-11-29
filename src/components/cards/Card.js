import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import Chips from '../chips/Chips'
import './Card.css'

function Card({ ticketId, ticketTitle, ticketPriority, ticketStatus, ticketTag, ticketUserId }) {
  return (
    <div className='Card'> 
      <div className='card_top'>
        <div className="Card_Id"> 
            <Chips text = {ticketId} />
        </div>
        <div className='Card_User'>
            <div className="User_name">
                <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className="User_acticity">
                    <p></p>
            </div>
        </div>
      </div>
      <div className="Card_mid">
        <div className="Card_progress">
            {/* <Chips icon = <loader/> </>/> */}
        </div>
        <div className="Card_title">
            <h3>{ticketTitle}</h3>
        </div>
      </div>

      <div className="Card_bottom">
        <div className="Card_priority">
            <p>{ticketPriority}</p>
        </div>
        <div className="Card_tags">
        <p>{ticketTag}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
