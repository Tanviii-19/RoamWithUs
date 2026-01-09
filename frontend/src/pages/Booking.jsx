import { useState } from "react";
import { useNavigate } from "react-router-dom";
import welcome from "../assets/Images/welcome.jpg";

const Booking = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(1);
  const [travelType, setTravelType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const email = localStorage.getItem("userEmail");


async function handleConfirm() {
  if (isSubmitting) return; // prevent multiple clicks

  if (
    !name ||
    !email ||
    !mobile ||
    !destination ||
    !date ||
    !travelType
  ) {
    alert("Please fill all fields");
    return;
  }

  // Mobile number validation
  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileRegex.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number");
    return;
  }

  const bookingData = {
    name,
    email,
    mobile,
    destination,
    date,
    people,
    travelType,
  };

  try {
    setIsSubmitting(true);
    const res = await fetch("https://roamwithus.onrender.com/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (!res.ok) throw new Error("Booking failed");

    navigate("/booking-success");
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${welcome})` }}
    >
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Book Your Trip
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-3 p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full mb-3 p-2 border rounded"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <select
          className="w-full mb-3 p-2 border rounded"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="">Select Destination</option>
          <option>Auli</option>
          <option>Badrinath</option>
          <option>Kedarnath</option>
          <option>Nainital</option>
          <option>Rishikesh</option>
          <option>Haridwar</option>
        </select>

        <input
          type="date"
          className="w-full mb-3 p-2 border rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="number"
          min="1"
          className="w-full mb-3 p-2 border rounded"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />

        <select
          className="w-full mb-4 p-2 border rounded"
          value={travelType}
          onChange={(e) => setTravelType(e.target.value)}
        >
          <option value="">Travel Type</option>
          <option>Solo</option>
          <option>Couple</option>
          <option>Family</option>
        </select>

       <button
  onClick={handleConfirm}
  disabled={isSubmitting}
  className={`w-full py-2 rounded-lg text-white transition ${
    isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
  }`}
>
  {isSubmitting ? "Booking..." : "Confirm Booking"}
</button>

         <button
  onClick={() => navigate("/")}
  className="mb-6 mt-3 bg-amber-800 text-white rounded hover:bg-blue-950"
>
  Back to Home
</button>

      </div>

     

    </div>
  );
};

export default Booking;