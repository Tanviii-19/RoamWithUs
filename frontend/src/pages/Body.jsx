import Auli from '../assets/Images/Auli.jpg';
import Badrinath from '../assets/Images/Badrinath.jpg';
import Kedarnath from '../assets/Images/Kedarnath.jpg';
import Nainital from '../assets/Images/Nainital.jpg';
import Rishikesh from '../assets/Images/Rishikesh.jpg';
import Haridwar from '../assets/Images/Haridwar.jpg';
import map from '../assets/Images/map.png';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FAQS from "./FAQS.jsx";


const Body = () => {
  const [activeTab, setActiveTab] = useState("about"); 
  const [openPlaces, setOpenPlaces] = useState(false);
  const [openFamous, setOpenFamous] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
 

  const content = {
    about: "Welcome to Devbhoomi! Explore temples, valleys, & scenic destinations. Experience spirituality and adventure in Uttarakhand.",
    places: "Top places to visit: Badrinath, Char Dham, lush valleys, and waterfalls.",
    bestTime: "Best time to visit: April to June & September to November — pleasant weather.",
    reach: "How to reach: By road, rail, or nearby airports. Convenient transport options available.",
    tips: "Tips: Carry warm clothes, respect local customs, and follow safety guidelines.",
  };

   function handleBook() {
    if (!isLoggedIn) {
      navigate("/login");   // guest → login
    } else {
      navigate("/booking"); // logged-in user → booking
    }
  }

  return (
    <>
    <section className="py-12 px-6 md:px-20 font-poppins bg-gray-50">
  <div className="max-w-4xl mx-auto">
    <div className="flex justify-center gap-4 border-b border-gray-300 overflow-x-auto pb-2">
{[
  { key: "about", label: "About" },
  { key: "places", label: "Places to Visit" },
  { key: "bestTime", label: "Best Time to Visit" },
  { key: "reach", label: "How to Reach" },
  { key: "tips", label: "Tips" },
].map((tab) => (
  <button
    key={tab.key}
    onClick={() => setActiveTab(tab.key)}
    className={`py-2 px-4 font-semibold transition-colors ${
activeTab === tab.key
  ? "text-blue-700 border-b-2 border-blue-700"
  : "text-gray-600 hover:text-blue-700"
    }`}
  >
    {tab.label}
  </button>
))}
    </div>
    <div className="mt-6 text-gray-700 ">
<p>{content[activeTab]}</p>
{/* Book Now Button */}
<div className="mt-6 flex justify-end">
  <button
    className="btn btn-primary"
    onClick={handleBook}
  >
    Book Now
  </button>
  </div>
  </div>
  </div>
</section>

<div className="flex gap-5">

  {/* LEFT ASIDE */}
  <aside className="hidden md:block w-1/4 bg-gray-100 p-4 shadow font-poppins">

    {/* About */}
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

    {/* Places */}
    <div
className="cursor-pointer flex justify-between items-center mb-2"
onClick={() => setOpenPlaces(!openPlaces)}
    >
<span className="font-medium">Places</span>
<span>{openPlaces ? "−" : "+"}</span>
    </div>

    {openPlaces && (
<ul className="ml-4 space-y-2 text-sm text-gray-700">

  {/* Famous For */}
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

  {/* Best Time to Visit */}
  <li
    className={`cursor-pointer ${
activeTab === "bestTime" ? "text-blue-600 font-semibold" : ""
    }`}
    onClick={() => setActiveTab("bestTime")}
  >
    Best Time to Visit
  </li>
</ul>
    )}
{/* Divider */}
<hr className="my-4 border-gray-300" />


<div className="text-sm text-gray-700 space-y-2">
  <h3 className="font-semibold text-gray-900">
    Quick Facts
  </h3>

  <p> Capital: Dehradun</p>
  <p> Famous Temples: Kedarnath, Badrinath</p>
  <p> Best For: Nature & Spiritual Travel</p>
  <p> Region: Northern India</p>
</div>

<img
    src= {map}
    alt="Uttarakhand"
    className="w-50 h-50 mx-auto object-cover object-center rounded-lg shadow"
  />


<hr className="my-4 border-gray-300" />
<div className="text-sm text-gray-700 space-y-2">
  <h3 className="font-semibold text-gray-900">
    About Us
  </h3>

  <div className='text-center'>
    RoamWithUs is a travel platform dedicated to helping you
    explore the beauty of Uttarakhand with ease and comfort.
    From spiritual journeys to adventure-filled trips, we
    curate experiences that create lifelong memories.
  </div>
</div>
<hr className="my-4 border-gray-300" />
 <h3 className="font-semibold text-gray-900 text-base pt-2 tracking-wide">
      Why Choose Us?
    </h3>

    <ul className="space-y-3">
      {[
        "1. Handpicked destinations",
        "2. Simple & fast booking",
        "3. Local travel expertise",
        "4. Budget-friendly packages",
      ].map((point, index) => (
        <li
          key={index}
          className="bg-white rounded-md px-3 py-2 shadow-sm
                     transition-all duration-300
                     hover:bg-blue-50 hover:translate-x-1"
        >
          {point}
        </li>
      ))}
    </ul>
  </aside>

  {/* Main Content — RIGHT */}
  <main className="w-full md:w-3/4">
    <section className="py-10 font-poppins bg-gray-50">
<h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
  Top Places to Visit
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

{/* Cards */}
<div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
  <img src={Badrinath} alt="Badrinath" loading="lazy"
    className="w-full h-58 object-cover rounded-t" />
  <div className="p-4">
    <h3 className="text-lg font-semibold mb-1">Badrinath</h3>
    <p className="text-gray-600 text-sm">
      One of the holiest shrines in Devbhoomi, surrounded by mountains.
    </p>
  </div>
  <div className="flex flex-wrap items-center gap-2">
    <span className="text-sm font-medium text-gray-700">Famous for:</span>
    <span className="badge badge-outline badge-success">Spiritual</span>
    <span className="badge badge-outline badge-primary">Scenic Views</span>
  </div>
</div>

<div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
  <img src={Kedarnath} alt="Kedarnath" loading="lazy"
    className="w-full h-58 object-cover rounded-t" />
  <div className="p-4">
    <h3 className="text-lg font-semibold mb-1">Kedarnath</h3>
    <p className="text-gray-600 text-sm">
      Sacred pilgrimage site nestled in the Himalayas.
    </p>
  </div>
  <div className="flex flex-wrap items-center gap-2">
    <span className="text-sm font-medium text-gray-700">Famous for:</span>
    <span className="badge badge-outline badge-success">Himalayan Views</span>
    <span className="badge badge-outline badge-primary">Spiritual</span>
  </div>
</div>

<div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
  <img src={Rishikesh} alt="Rishikesh" loading="lazy" className="w-full h-58 object-cover rounded-t" />
  <div className="p-4">
    <h3 className="text-lg font-semibold mb-1">Rishikesh</h3>
    <p className="text-gray-600 text-sm">
      Yoga capital of the world with adventure and spirituality.
    </p>
  </div>
  <div className="flex flex-wrap items-center gap-2">
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
    <p className="text-gray-600 text-sm">
      Picturesque hill station known for its serene lake and scenic beauty.
    </p>
  </div>
  <div className="flex flex-wrap items-center gap-2">
    <span className="text-sm font-medium text-gray-700">Famous for:</span>
    <span className="badge badge-outline badge-info">Naini Lake</span>
    <span className="badge badge-outline badge-success">Snow View Point</span>
    <span className="badge badge-outline badge-primary">Tiffin Top</span>
  </div>
</div>

<div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
  <img src={Auli} alt="Auli" loading="lazy" className="w-full h-58 object-cover rounded-t" />
  <div className="p-4">
    <h3 className="text-lg font-semibold mb-1">Auli</h3>
    <p className="text-gray-600 text-sm">
      Popular ski destination with stunning Himalayan views.
    </p>
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
    <p className="text-gray-600 text-sm">
      Sacred city on the banks of the Ganges, famous for its ghats and rituals.
    </p>
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