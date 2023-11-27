function orderData(data, sortBy) {
    const sortedData = data.tickets.sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          return a.priority - b.priority;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          throw new Error('Invalid sortBy parameter');
      }
    });
  
    return sortedData;
  }