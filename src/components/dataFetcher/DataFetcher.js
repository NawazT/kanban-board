import { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      const fetchedData = response.data;
      setData(fetchedData);
    };
    fetchData();
  }, []);

  return { data };
};

export default DataFetcher;
