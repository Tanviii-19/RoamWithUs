import Auli from "../assets/Images/Auli.jpg";
import Badrinath from "../assets/Images/Badrinath.jpg";
import Kedarnath from "../assets/Images/Kedarnath.jpg";
import Nainital from "../assets/Images/Nainital.jpg";
import Rishikesh from "../assets/Images/Rishikesh.jpg";
import Haridwar from "../assets/Images/Haridwar.jpg";
import map from "../assets/Images/map.png";
import welcome from "../assets/Images/image.png";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* ================= SLIDER DATA ================= */
const slides = [
  {
    title: "About Uttarakhand",
    desc: "Discover the spiritual heart of India with majestic mountains, sacred rivers, and timeless traditions.",
  },
  {
    title: "Top Places to Visit",
    desc: "Badrinath, Kedarnath, Nainital, Auli, Rishikesh & more breathtaking destinations.",
  },
  {
    title: "Best Time to Visit",
    desc: "April–June for sightseeing, September–November for peaceful travel & views.",
  },
  {
    title: "How to Reach",
    desc: "Easily accessible by road, rail, and nearby airports like Dehradun.",
  },
  {
    title: "Travel Tips",
    desc: "Carry warm clothes, respect local customs, and stay safe in the mountains.",
  },
];

/* ================= AUTO SLIDER ================= */
const AutoSlider = ({ handleBook }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
  className="relative py-20 px-6 md:px-20 overflow-hidden bg-center bg-fill bg-no-repeat"
  style={{ backgroundImage: `url(${welcome})` }}
>


      <div className="max-w-6xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="min-w-full flex justify-center px-6">
                <div className="bg-white/90 rounded-3xl shadow-2xl p-12 max-w-3xl text-center">
                  <h2 className="text-4xl font-bold text-blue-700 mb-6">
                    {slide.title}
                  </h2>
                  <p className="text-gray-700 text-lg">
                    {slide.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-3">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-full ${
                index === i ? "bg-blue-600 scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <button onClick={handleBook} className="btn btn-primary">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

/* ================= MAIN BODY ================= */
const Body = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [openPlaces, setOpenPlaces] = useState(false);
  const [openFamous, setOpenFamous] = useState(false);

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleBook = () => {
    if (!isLoggedIn) navigate("/login");
    else navigate("/booking");
  };

  return (
    <>
      {/* 🔹 AUTO SLIDER */}
      <AutoSlider handleBook={handleBook} />

      {/* ===================== MAIN LAYOUT ===================== */}
      <div className="flex gap-5">

        {/* LEFT ASIDE */}
        <aside className="hidden md:block w-1/4 bg-gray-100 p-4 shadow">

          <div
            className={`cursor-pointer mb-3 ${
              activeTab === "about" ? "font-bold text-blue-600" : ""
            }`}
            onClick={() => {
              setActiveTab("about");
              setOpenPlaces(false);
            }}
          >
            About Uttarakhand
          </div>

          <div
            className="cursor-pointer flex justify-between items-center mb-2"
            onClick={() => setOpenPlaces(!openPlaces)}
          >
            <span className="font-medium">Places</span>
            <span>{openPlaces ? "−" : "+"}</span>
          </div>

          {openPlaces && (
            <ul className="ml-4 space-y-2 text-sm text-gray-700">
              <li>
                <div
                  className="cursor-pointer flex justify-between items-center"
                  onClick={() => setOpenFamous(!openFamous)}
                >
                  <span>Famous For</span>
                  <span>{openFamous ? "−" : "+"}</span>
                </div>

                {openFamous && (
                  <ul className="ml-4 mt-2 space-y-1">
                    <li>Char Dham Yatra</li>
                    <li>Yoga & Spirituality</li>
                    <li>Trekking & Adventure</li>
                  </ul>
                )}
              </li>

              <li
                className={`cursor-pointer ${
                  activeTab === "bestTime"
                    ? "text-blue-600 font-semibold"
                    : ""
                }`}
                onClick={() => setActiveTab("bestTime")}
              >
                Best Time to Visit
              </li>
            </ul>
          )}

          <hr className="my-4" />

          <div className="text-sm space-y-2">
            <h3 className="font-semibold">Quick Facts</h3>
            <p>Capital: Dehradun</p>
            <p>Famous Temples: Kedarnath, Badrinath</p>
            <p>Best For: Nature & Spiritual Travel</p>
            <p>Region: Northern India</p>
          </div>

          <img src={map} alt="map" className="mx-auto mt-4 rounded-lg shadow" />

          <hr className="my-4" />

          <h3 className="font-semibold">Why Choose Us?</h3>
          <ul className="space-y-2 mt-2">
            {[
              "Handpicked destinations",
              "Simple & fast booking",
              "Local travel expertise",
              "Budget-friendly packages",
            ].map((p, i) => (
              <li
                key={i}
                className="bg-white px-3 py-2 rounded shadow hover:translate-x-1 transition"
              >
                {p}
              </li>
            ))}
          </ul>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="w-full md:w-3/4">
          <section className="py-10 font-poppins bg-gray-50"> 
            <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center"> Top Places to Visit </h2> 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> {/* Cards */} 
<div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105"> <img src={Badrinath} alt="Badrinath" loading="lazy" className="w-full h-58 object-cover rounded-t" /> <div className="p-4"> <h3 className="text-lg font-semibold mb-1">Badrinath</h3> <p className="text-gray-600 text-sm"> One of the holiest shrines in Devbhoomi, surrounded by mountains. </p> </div> <div className="flex flex-wrap items-center gap-2"> <span className="text-sm font-medium text-gray-700">Famous for:</span> <span className="badge badge-outline badge-success">Spiritual</span> <span className="badge badge-outline badge-primary">Scenic Views</span> 
</div> 
</div> 
<div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105"> 
  <img src={Kedarnath} alt="Kedarnath" loading="lazy" className="w-full h-58 object-cover rounded-t" /> 
  <div className="p-4"> 
    <h3 className="text-lg font-semibold mb-1">Kedarnath</h3> 
  <p className="text-gray-600 text-sm"> Sacred pilgrimage site nestled in the Himalayas. </p> 
  </div> 
  <div className="flex flex-wrap items-center gap-2"> 
    <span className="text-sm font-medium text-gray-700">Famous for:</span> 
    <span className="badge badge-outline badge-success">Himalayan Views</span> 
    <span className="badge badge-outline badge-primary">Spiritual</span> </div> </div> 
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105"> 
      <img src={Rishikesh} alt="Rishikesh" loading="lazy" className="w-full h-58 object-cover rounded-t" /> 
      <div className="p-4"> 
        <h3 className="text-lg font-semibold mb-1">Rishikesh</h3>
         <p className="text-gray-600 text-sm"> Yoga capital of the world with adventure and spirituality. </p> 
         </div> <div className="flex flex-wrap items-center gap-2"> 
          <span className="text-sm font-medium text-gray-700">Famous for:</span> 
          <span className="badge badge-outline badge-info">Laxman Jhula</span> 
          <span className="badge badge-outline badge-success">Ganga Aarti</span> 
          <span className="badge badge-outline badge-primary">Yoga Ashrams</span> 
          </div> 
          </div> 
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105"> 
            <img src={Nainital} alt="Nainital" loading="lazy" className="w-full h-58 object-cover rounded-t" /> 
            <div className="p-4"> 
<h3 className="text-lg font-semibold mb-1">Nainital</h3> 
<p className="text-gray-600 text-sm"> Picturesque hill station known for its serene lake and scenic beauty. </p> </div> <div className="flex flex-wrap items-center gap-2"> <span className="text-sm font-medium text-gray-700">Famous for:</span> <span className="badge badge-outline badge-info">Naini Lake</span> 
<span className="badge badge-outline badge-success">Snow View Point</span> 
<span className="badge badge-outline badge-primary">Tiffin Top</span> 
</div> 
</div> 
<div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105"> 
  <img src={Auli} alt="Auli" loading="lazy" className="w-full h-58 object-cover rounded-t" />
   <div className="p-4"> 
    <h3 className="text-lg font-semibold mb-1">Auli</h3> 
    <p className="text-gray-600 text-sm"> Popular ski destination with stunning Himalayan views. </p> 
    </div> 
    <div className="flex flex-wrap items-center gap-2"> 
      <span className="text-sm font-medium text-gray-700">Famous for:</span> 
      <span className="badge badge-outline badge-info">Auli Ropeway</span> 
      <span className="badge badge-outline badge-success">Skiing Facilities</span> 
      <span className="badge badge-outline badge-primary">Nanda Devi Viewpoint</span> 
      </div> 
      </div> 
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105"> 
        <img src={Haridwar} alt="Haridwar" loading="lazy" className="w-full h-58 object-cover rounded-t" /> 
        <div className="p-4"> 
          <h3 className="text-lg font-semibold mb-1">Haridwar</h3> 
          <p className="text-gray-600 text-sm"> Sacred city on the banks of the Ganges, famous for its ghats and rituals. </p> 
          </div> 
          <div className="flex flex-wrap items-center gap-2"> 
            <span className="text-sm font-medium text-gray-700">Famous for:</span> 
            <span className="badge badge-outline badge-info">Har ki Pauri</span> 
            <span className="badge badge-outline badge-success">Ganga Aarti Sthal</span> 
            <span className="badge badge-outline badge-primary">Mansa Devi Temple</span> 
            </div> 
            </div> 
            </div>
       </section> 
       </main> 
       </div> 
       </> 
       ); 
      } 
      export default Body;
        