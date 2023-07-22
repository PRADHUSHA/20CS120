import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch trains data from your backend API and set it in 'trains' state
    // Replace the API_ENDPOINT with your actual API endpoint
    fetch("http://20.244.56.144/train/trains")
      .then((response) => response.json())
      .then((data) => setTrains(data))
      .catch((error) => console.error("Error fetching trains:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">List of Trains</h1>
      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Train Name</TableCell>
                <TableCell>Departure Time</TableCell>
                <TableCell>Arrival Time</TableCell>
                <TableCell>Train Class</TableCell>
                <TableCell>Train Fare</TableCell>
                <TableCell>Train Delay</TableCell>
                <TableCell>Seat Availability</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trains.map((train) => (
                <TableRow key={train.id}>
                  <TableCell>
                    <Link to={`/trains/${train.id}`}>{train.name}</Link>
                  </TableCell>
                  <TableCell>{train.departureTime}</TableCell>
                  <TableCell>{train.arrivalTime}</TableCell>
                  <TableCell>{train.trainClass}</TableCell>
                  <TableCell>{train.fare}</TableCell>
                  <TableCell>{train.delay}</TableCell>
                  <TableCell>{train.seatAvailability}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default AllTrainsPage;
