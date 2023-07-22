import React, { useState } from 'react';

export const Train = ({ trainData }) => {
  const [seatsAvailable, setSeatsAvailable] = useState(trainData.seatsAvailable);
  const [price, setPrice] = useState(trainData.price);

  return (
    <div className="container mt-4">
      <h3>Train Name: {trainData.trainName}</h3>
      <p>Train Number: {trainData.trainNumber}</p>
      <p>
        Departure Time: {trainData.departureTime.Hours}:
        {trainData.departureTime.Minutes}:
        {trainData.departureTime.Seconds}
      </p>
      <div className="row">
        <div className="col">
          <p>Seats Available:</p>
          <ul className="list-group">
            <li className="list-group-item">Sleeper: {seatsAvailable.sleeper}</li>
            <li className="list-group-item">AC: {seatsAvailable.AC}</li>
          </ul>
        </div>
        <div className="col">
          <p>Price:</p>
          <ul className="list-group">
            <li className="list-group-item">Sleeper: {price.sleeper}</li>
            <li className="list-group-item">AC: {price.AC}</li>
          </ul>
        </div>
      </div>
      <p className="mt-3">Delayed By: {trainData.delayedBy} minutes</p>
    </div>
  );
};

