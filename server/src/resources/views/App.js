import React from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get('/api/movies') // Thay thế `/api/data` bằng endpoint API NestJS của bạn
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Dữ liệu từ NestJS API</h1>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
};

export default App;
