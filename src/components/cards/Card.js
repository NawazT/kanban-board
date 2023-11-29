import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import './Card.css'

function Card({ ticketId, ticketTitle, ticketPriority, ticketStatus, ticketTag, ticketUserId, users }) {
  const cardStyle = {
    borderColor: ticketPriority === 4 ? 'red' : '#ccc'
  };
  const user = users.find((user) => user.id === ticketUserId);
  const availabilityClass = user ? (user.available ? 'available' : '') : '';
  return (
    <div className='Card' style={cardStyle}> 
      <div className='card_top'>
        <div className="Card_Id"> 
             {ticketId}
        </div>
        <div className= {`Card_User ${availabilityClass}`}>
            <div className= "User_name">
                <FontAwesomeIcon icon={faCircleUser}  size="lg"/>
            </div>
            <div className="User_acticity">
            {user && user.available && (
              <div className="User_acticity_indicator"></div>
                )}
            </div>
        </div>
      </div>
      <div className="Card_mid">
        <div className="Card_progress">
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
