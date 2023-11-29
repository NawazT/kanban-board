import React from 'react';

const GroupingComponent = ({ onGroupingChange }) => {
  return (
    <div className="grouping-options">
      <label>Group By:</label>
      <select onChange={(event) => onGroupingChange(event.target.value)}>
        <option value="userId">User</option>
        <option value="priority">Priority</option>
        <option value="status">Status</option>
      </select>
    </div>
  );
};

export default GroupingComponent;
