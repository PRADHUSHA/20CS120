import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

const SingleTrainPage = () => {
  const { id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    
    fetch(` http://20.244.56.144/train/trains/${id}`)
      .then((response) => response.json())
      .then((data) => setTrain(data))
      .catch((error) => console.error("Error fetching train:", error));
  }, [id]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Train Details</h1>
      <Card>
        <CardContent>
          <Typography variant="h5">{train.name}</Typography>
          <Typography>Departure Time: {train.departureTime}</Typography>
          <Typography>Arrival Time: {train.arrivalTime}</Typography>
          <Typography>Train Class: {train.trainClass}</Typography>
          <Typography>Train Fare: {train.fare}</Typography>
          <Typography>Train Delay: {train.delay}</Typography>
          <Typography>Seat Availability: {train.seatAvailability}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleTrainPage;
