import React from "react";
import { useParams } from "react-router-dom";
import { getTripById } from "../services/trips";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const TripDetails = () => {
  const { id } = useParams();
  const trip = getTripById(id);

  return (
    <div>
      <header style={headerStyle}>
        <div>
          <Link to="/home">
            <Button>Go back</Button>
          </Link>
        </div>
        <h2>Tripso</h2>
      </header>
      <h2>{trip.title}</h2>
      <img
        src={"/" + trip.photo}
        alt={trip.title}
        style={{ maxWidth: "800px", maxHeight: "400px" }}
      />
      <p style={{ fontSize: "1em", fontWeight: "bold" }}>
        <b>Destination:</b> {trip.place}
      </p>
      <p style={{ fontSize: "0.85em" }}>{trip.description}</p>
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
export default TripDetails;
