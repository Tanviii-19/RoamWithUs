import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminBooking = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBookings() {
      const res = await fetch("http://localhost:5000/api/bookings");
      const data = await res.json();
      setBookings(data);
    }

    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/bookings/${id}`, {
      method: "DELETE",
    });
    setBookings(bookings.filter((b) => b._id !== id));
  };

  const handlelogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Destination</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">People</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b, i) => (
              <tr key={i} className="text-center border-t">
                <td className="border p-2">{b.name}</td>
                <td className="border p-2">{b.email}</td>
                <td className="border p-2">{b.destination}</td>
                <td className="border p-2">{b.date}</td>
                <td className="border p-2">{b.people}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDelete(b._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="mt-4">
        <button
          onClick={handlelogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminBooking;
