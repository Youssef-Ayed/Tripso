import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

// Ensure the TripCard component is correctly exported
const TripCard = ({ trip }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="username-container">
        <div class="profile-container">
          <div class="profile-img">
            <img src="/avatar.png" alt="Profile Picture" />
          </div>
          <div class="profile-description">
            <p class="user-title">{trip.user.name}</p>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          navigate("/trip/" + trip.id);
        }}
      >
        <Card style={{ width: "25em", marginBottom: "2rem" }}>
          <Card.Img variant="top" src={trip.photo} />
          <Card.Body>
            <Card.Title>{trip.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {trip.place}
            </Card.Subtitle>
            <Card.Text>{trip.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default TripCard;
