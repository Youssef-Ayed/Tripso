// tripService.js

let trips = [
  {
    id: 1,
    title: "Trip to Paris",
    description: "A wonderful trip to Paris.",
    place: "Paris",
    photo: "paris.jpg",
    user: { name: "Arnold Filer" },
  },
  {
    id: 2,
    title: "Trip to Rome",
    description: "A wonderful trip to Rome.",
    place: "Rome",
    photo: "rome.jpg",
    user: { name: "Jason Shaw" },
  },
  {
    id: 3,
    title: "Trip to Bali",
    description: "A wonderful trip to Bali.",
    place: "Bali",
    photo: "caption.jpg",
    user: { name: "John Doe" },
  },
];

export const getTrips = () => trips;

export const getTripById = (id) =>
  trips.find((trip) => trip.id === parseInt(id));

export const addTrip = (trip) => {
  trip.id = trips.length ? trips[trips.length - 1].id + 1 : 1;
  trips.push(trip);
};
