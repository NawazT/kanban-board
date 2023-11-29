import React, { useState, useEffect } from 'react';
import axios from 'axios';
import groupData from '../helpers/gorupData';
import orderData from '../helpers/orderData';
import Card from '../cards/Card';
import './Board.css';
import { MoreHorizontal, Plus } from 'react-feather';

function Board({ grouping, sorting }) {
  const [ticketsData, setTicketsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [orderedTickets, setOrderedTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      const fetchedData = response.data;
      console.log('Fetched data:', fetchedData);

      const usersData = fetchedData.users;
      setUsers(usersData);

      setTicketsData(fetchedData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const groupedTickets = groupData(ticketsData, grouping);
      const sortedTickets = orderData(groupedTickets, sorting);
      setOrderedTickets(sortedTickets);
    }
  }, [ticketsData, grouping, sorting]);

  return (
    <div className="board">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        orderedTickets.map((group) => {
          const { status, tickets } = group;
          return (
            <div key={status}>
              <div className="board_top">
                <p className="board_top_title">
                  {grouping === 'userId' && users.find((user) => user.id === status)?.name || status}
                </p>

                <Plus />
                <MoreHorizontal />
              </div>
              <div className="board_cards">
                {tickets.map((ticket) => (
                  <Card
                    key={ticket.id}
                    ticketId={ticket.id}
                    ticketTitle={ticket.title}
                    ticketPriority={ticket.priority}
                    ticketStatus={ticket.status}
                    ticketTag={ticket.tag}
                    ticketUserId={ticket.userId}
                    users = {users}
                  />
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Board;
