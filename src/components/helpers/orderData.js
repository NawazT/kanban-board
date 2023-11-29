export default function orderData(data, sortBy) {
  const sortedData = [];

  console.log('inside sort function')
  console.log(sortBy)

  for (const [status, tickets] of Object.entries(data)) {
    const sortedTickets = tickets.sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          return a.priority - b.priority;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          throw new Error('Invalid sortBy parameter');
      }
    });

    sortedData.push({ status, tickets: sortedTickets });
  }

  return sortedData;
}