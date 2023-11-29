export default function groupData(data, groupBy) {
  const groupedData = {};
  let sortFunction;

  console.log('in gourp by func');
  console.log(groupBy);

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

  // Check if 'tickets' property exists before accessing it
  if (data.tickets) {
    const sortedData = data.tickets.sort(sortFunction);

    sortedData.forEach(ticket => {
      const key = ticket[groupBy];
      if (!groupedData[key]) {
        groupedData[key] = [];
      }
      groupedData[key].push(ticket);
    });
  }

  return groupedData;
}
