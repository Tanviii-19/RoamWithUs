import Body from "./Body.jsx";
import { useNavigate } from "react-router-dom";
import FAQ from "./FAQS.jsx";
import Footer from "./Footer.jsx";


const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const role = localStorage.getItem("role"); // "user" or "admin"

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("role");
    navigate("/login");
  }

  return (
    <>
      <div className="navbar bg-linear-to-r from-cyan-700 via-zinc-400 to-neutral-300 text-white shadow-lg px-10 font-poppins">
 <div className="flex-1">
   <button className="text-2xl font-bold hover:text-teal-300 transition">
     RoamWithUs
   </button>
 </div>

 {/* Mobile */}
 <div className="flex-none lg:hidden">
   <div className="dropdown dropdown-end">
     <button tabIndex={0} className="btn btn-ghost text-white">
Click
     </button>

     <ul
tabIndex={0}
className="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 text-black p-2 shadow"
     >
{isLoggedIn && role === "user" && (
  <>
    <li>
      <button onClick={() => navigate("/mybookings")}>
 MyBookings
      </button>
    </li>
    <li>
      <button className="text-error" onClick={handleLogout}>
 Logout
      </button>
    </li>
  </>
)}

{isLoggedIn && role === "admin" && (
  <>
    <li>
      <button onClick={() => navigate("/admin")}>
 View All Bookings
      </button>
    </li>
    <li>
      <button className="text-error" onClick={handleLogout}>
 Logout
      </button>
    </li>
  </>
)}

{!isLoggedIn && (
  <>
    <li>
      <button onClick={() => navigate("/login")}>User Login</button>
    </li>
    <li>
      <button onClick={() => navigate("/login")}>Admin Login</button>
    </li>
  </>
)}
     </ul>
   </div>
 </div>

 {/* Desktop */}
 <div className="flex-none hidden lg:block">
   <ul className="menu menu-horizontal gap-3">
     {isLoggedIn && role === "user" && (
<>
  <li>
    <button
      className="btn btn-outline btn-secondary btn-sm"
      onClick={() => navigate("/mybookings")}
    >
      MyBookings
    </button>
  </li>
  <li>
    <button
      className="btn btn-outline btn-error btn-sm"
      onClick={handleLogout}
    >
      Logout
    </button>
  </li>
</>
     )}

     {isLoggedIn && role === "admin" && (
<>
  <li>
    <button
      className="btn btn-outline btn-secondary btn-sm"
      onClick={() => navigate("/admin")}
    >
      View All Bookings
    </button>
  </li>
  <li>
    <button
      className="btn btn-outline btn-error btn-sm"
      onClick={handleLogout}
    >
      Logout
    </button>
  </li>
</>
     )}

     {!isLoggedIn && (
<li className="dropdown dropdown-end">
  <button tabIndex={0} className="btn btn-primary btn-sm">
    Login
  </button>

  <ul
    tabIndex={0}
    className="menu dropdown-content mt-2 w-40 rounded-box bg-base-100 text-black p-2 shadow"
  >
    <li>
      <button onClick={() => navigate("/login")}>User</button>
    </li>
  </ul>
</li>
     )}
   </ul>
 </div>
      </div>

      <Body />
      <FAQ/>
      <Footer/>
    </>
  );
};

export default Home;
