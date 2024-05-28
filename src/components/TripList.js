import React from "react";
import { Link } from "react-router-dom";
import TripCard from "./TripCard";
import Button from "react-bootstrap/Button";
import { getTrips } from "../services/trips";

const trips = getTrips().sort((a, b) => b.id - a.id);

const TripList = () => {
  return (
    <div>
      <header style={headerStyle}>
        <h2>Tripso</h2>
        <div>
          <Link to="/add-trip">
            <Button>+ Add a Trip</Button>
          </Link>
        </div>
      </header>
      <div style={contentContainerStyle}>
        <div style={contentStyle}>
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </div>
  );
};

const headerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "60px", // Set a fixed height for the header
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 4px 4px 0px rgba(128, 128, 128, 0.2)",
  backgroundColor: "#fff",
  zIndex: 1000,
};

const contentContainerStyle = {
  position: "absolute",
  top: 10,
  left: 0,
  marginTop: "80px", // Adjust this value if needed based on the header height
  padding: "20px",
  width: "100%",
};

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px", // Gap between trip cards
  justifyContent: "center",
  alignItems: "center",
};

export default TripList;
