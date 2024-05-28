import React, { useState } from "react";
import { addTrip } from "../services/trips";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddTrip = () => {
  const navigate = useNavigate();
  const [trip, setTrip] = useState({
    title: "",
    description: "",
    place: "",
    photo: "",
    user: {
      name: "Wissal Zattal",
    },
  });
  const [file, setFile] = useState(null);

  const handleNameChange = (e) => {
    console.log(e);
    setTrip({ ...trip, title: e.target.value });
  };
  const handleDescriptionChange = (e) => {
    setTrip({ ...trip, description: e.target.value });
  };
  const handlePlaceChange = (e) => {
    setTrip({ ...trip, place: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setTrip({ ...trip, photo: selectedFile.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      addTrip(trip);
      console.log("Trip added:", trip);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Trip added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/home");
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Please select an image!",
        showConfirmButton: false,
        timer: 1000,
      });
      console.error("No file selected");
    }
  };

  return (
    <div>
      <h2>Add a Trip</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={trip.title}
          onChange={handleNameChange}
        />
        <br />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={trip.description}
          onChange={handleDescriptionChange}
        />
        <br />
        <label>Place:</label>
        <input
          type="text"
          name="place"
          value={trip.place}
          onChange={handlePlaceChange}
        />
        <br />
        <label>Photo:</label>
        <input type="file" name="photo" onChange={handleFileChange} />
        <br />
        <button type="submit">Add Trip</button>
      </form>
    </div>
  );
};

export default AddTrip;
