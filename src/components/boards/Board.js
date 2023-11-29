import React, { useState, useEffect } from 'react';
import axios from 'axios';
import groupData from '../helpers/gorupData';
import orderData from '../helpers/orderData';
import './Board.css';
import { MoreHorizontal, Plus } from 'react-feather';

function Board({ grouping, sorting }) {
  const [ticketsData, setTicketsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [orderedTickets, setOrderedTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      const fetchedData = response.data;
      console.log('Fetched data:', fetchedData);

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
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className='board'>
            {orderedTickets.map((group) => {
              const { status, tickets } = group;
              return (
                <div key={status}>
                  <div className="board_top">
                    <p className="board_top_title">
                    <h2>{status}</h2>
                    </p>
                    <Plus />
                    <MoreHorizontal />
                  </div>
                  {tickets.map((ticket) => (
                    <div key={ticket.id}>
                      <div className="board_cards">
                       <p>{ticket.title}</p>
                      </div>
                   </div>
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </div>
  );
}

export default Board;
