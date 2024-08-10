import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        try {
          const res = await axios.get('http://localhost:5000/protected', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setData(res.data);
        } catch (err) {
          setError('Failed to fetch data');
          console.error(err.response ? err.response.data : err.message);
        }
      } else {
        setError('No token found');
        console.error('No token found');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default ProtectedComponent;
