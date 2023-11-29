import React from 'react';

const SortingComponent = ({ onSortingChange }) => {
  return (
    <div className="sorting-options">
      <label>Sort By:</label>
      <select onChange={(event) => onSortingChange(event.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortingComponent;
