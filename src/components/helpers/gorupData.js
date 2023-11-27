function groupData(data, groupBy) {
    const groupedData = {};
    let sortFunction;
  
    switch (groupBy) {
      case 'userId':
        sortFunction = (a, b) => a.userId.localeCompare(b.userId);
        break;
      case 'priority':
        sortFunction = (a, b) => a.priority - b.priority;
        break;
      case 'status':
        sortFunction = (a, b) => a.status.localeCompare(b.status);
        break;
      default:
        throw new Error('Invalid groupBy parameter');
    }
  
    const sortedData = data.tickets.sort(sortFunction);
  
    sortedData.forEach(ticket => {
      const key = ticket[groupBy];
      if (!groupedData[key]) {
        groupedData[key] = [];
      }
      groupedData[key].push(ticket);
    });
  
    return groupedData;
  }