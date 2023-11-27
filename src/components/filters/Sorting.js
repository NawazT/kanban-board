import React from 'react';

const SortingComponent = ({ onSortingChange }) => {
  return (
    <div className="sorting-options">
      <label>Sort By:</label>
      <select onChange={(event) => onSortingChange(event.target.value)}>
        <option value="none">None</option>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
      <label>Sort Order:</label>
      <select onChange={(event) => onSortingChange({ order: event.target.value })}>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
};

export default SortingComponent;
