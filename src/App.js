import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import TripList from "./components/TripList";
import AddTrip from "./components/AddTrip";
import TripDetails from "./components/TripDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/home" element={<TripList />} />
        <Route path="/add-trip" element={<AddTrip />} />
        <Route path="/trip/:id" element={<TripDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
