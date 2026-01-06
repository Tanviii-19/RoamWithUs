import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
    const navigate = useNavigate();
     const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

     const handleLogin = (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userEmail", email);

  if (email === "admin@gmail.com") {
    localStorage.setItem("role", "admin");
    navigate("/admin"); // go to admin page
  } else {
    localStorage.setItem("role", "user");
    navigate("/"); // go to home
  }
};


    return (
       
       <>
<div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="border border-blue-500 text-blue-500 py-2 rounded hover:bg-blue-50 transition"
            >
              Back to Home
            </button>
        </form>
        <details className="mt-4 text-sm text-gray-600 text-center">
  <summary className="cursor-pointer text-blue-600">
    Demo Login Credentials (Click to Expand)
  </summary>
  <p className="mt-2">Admin Email: <b>admin@gmail.com</b></p>
  <p>Password: any</p>
  <p className="mt-2">User Email: any random email will work</p>
  <p>Password: any</p>
</details>

      </div>
    </div>

       </>
    );
}   
export default Login;