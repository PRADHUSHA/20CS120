import React, { useState } from 'react';

const TrainPage = () => {
  // Sample train data (you can replace this with actual data from an API)
  const initialTrains = [
    { id: 1, name: 'Chennai Exp' },
    { id: 2, name: 'Mumbai Exp' },
    { id: 3, name: 'Cochin Exp'},
    { id: 4, name: 'Kashmir Exp' },
    { id: 5, name: 'Mehalaya Exp'},
    { id: 6, name: 'Coimbatore Exp'},
    // Add more train objects as needed
  ];

  const [trains, setTrains] = useState(initialTrains);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">List of Trains</h1>
      <div className="card">
        <ul className="list-group list-group-flush">
          {trains.map((train) => (
            <li key={train.id} className="list-group-item">
              <h3>{train.name}</h3>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrainPage;
