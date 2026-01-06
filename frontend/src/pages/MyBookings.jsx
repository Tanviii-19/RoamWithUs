import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const email = localStorage.getItem("userEmail");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBookings() {
      const res = await fetch(
        `http://localhost:5000/api/bookings/user/${email}`
      );
      const data = await res.json();
      setBookings(data);
    }

    if (email) fetchBookings();
  }, [email]);

  async function handleDelete(id) {
  try {
    await fetch(`http://localhost:5000/api/bookings/${id}`, {
      method: "DELETE",
    });

    // remove from UI after DB delete
    const updatedBookings = bookings.filter(
      (booking) => booking._id !== id
    );
    setBookings(updatedBookings);
  } catch (error) {
    console.log(error);
  }
}

if (bookings.length === 0) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold">
        No bookings yet.
      </h2>

      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Home
      </button>
    </div>
  );
}


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        My Bookings
      </h1>
      
      <button
  onClick={() => navigate("/")}
  className="mb-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
>
  Back to Home
</button>


      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-white rounded-lg shadow p-5"
          >
            <h2 className="text-lg font-semibold mb-2">
              {booking.destination}
            </h2>

            <p><b>Name:</b> {booking.name}</p>
            <p><b>Email:</b> {booking.email}</p>
            <p><b>Mobile:</b> {booking.mobile}</p>
            <p><b>Date:</b> {booking.date}</p>
            <p><b>People:</b> {booking.people}</p>
            <p><b>Travel Type:</b> {booking.travelType}</p>

            <button
              onClick={() => handleDelete(booking._id)}
              className="mt-4 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600"
            >
              Cancel Booking
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
