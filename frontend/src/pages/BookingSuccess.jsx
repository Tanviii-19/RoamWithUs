import { useNavigate } from "react-router-dom";

const BookingSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <div className="text-green-500 text-6xl mb-4">✔</div>

        <h1 className="text-2xl font-bold mb-2">
          Booking Confirmed!
        </h1>

        <p className="mb-6">
          Your trip has been booked successfully.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default BookingSuccess;
