// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import siteLogo from "../../assets/images/signup_logo.jpg";
// import backgroundImage from "../../assets/images/signup-background.jpg";

// function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         "http://localhost:3002/login",
//         formData
//       );
      
//       // --- THIS IS THE CRUCIAL FIX ---
//       // Save the received token to the browser's local storage.
//       // The dashboard app will read this token to authenticate the user.
//       localStorage.setItem("token", response.data.token);

//       // Now, redirect to the dashboard
//       window.location.href = "http://localhost:3001";

//     } catch (err) {
//       setError(err.response?.data?.message || "An error occurred during login.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
//       <div className="signup-form-wrapper">
//         <div className="signup-form-box">
//           <div className="text-center mb-4">
//             <Link to="/">
//               <img src={siteLogo} alt="TradeX Logo" style={{ height: "24px" }} />
//             </Link>
//           </div>
//           <h3 className="text-center">Log in to TradeX</h3>
          
//           <form onSubmit={handleSubmit}>
//             <div className="form-floating mb-3">
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 placeholder="name@example.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//               <label htmlFor="email">Email address</label>
//             </div>

//             <div className="form-floating mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//               <label htmlFor="password">Password</label>
//             </div>

//             {error && <div className="alert alert-danger p-2">{error}</div>}

//             <div className="d-grid">
//               <button
//                 className="btn btn-primary btn-lg"
//                 type="submit"
//                 disabled={loading}
//               >
//                 {loading ? "Logging in..." : "Log in"}
//               </button>
//             </div>
//           </form>

//           <div className="text-center mt-4">
//             <Link to="/signup" className="text-primary">
//               Don't have an account? Sign up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

