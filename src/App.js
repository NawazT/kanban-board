import React, { useState } from 'react';
import './App.css';
import Board from './components/boards/Board';
import GroupingComponent from './components/filters/Grouping'
import SortingComponent from './components/filters/Sorting'



function App() {
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('title')

  return (
    <div className="app">
      <div className="app_navbar">
        <GroupingComponent onGroupingChange={ (value) => setGrouping(value)}/>
        <SortingComponent onSortingChange={(value) => setSorting(value)} />
      </div>
      <div className="app_boards_outer">
        <div className="app_boards">
          <Board grouping = {grouping}  sorting = {sorting}/>
        </div>
      </div>  
    </div>
  );
}

export default App;
