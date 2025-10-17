// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import siteLogo from "../../assets/images/signup_logo.jpg";
// import backgroundImage from "../../assets/images/signup-background.jpg";

// function Signup() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     setLoading(true);

//     if (!formData.fullName || !formData.email || !formData.password) {
//       setError("All fields are required.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:3002/register",
//         formData
//       );
      
//       // --- THIS IS THE CRUCIAL FIX ---
//       // The backend now sends a token on registration. We must save it.
//       localStorage.setItem("token", response.data.token);
      
//       setSuccess("Account created successfully! Redirecting...");
      
//       // Wait for a moment to show the success message, then redirect to the dashboard
//       setTimeout(() => {
//         window.location.href = "http://localhost:3001";
//       }, 1500);

//     } catch (err) {
//       setError(err.response?.data?.message || "An error occurred during signup.");
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
//           <h3 className="text-center">Join TradeX</h3>
//           <p className="text-center text-muted mb-4">India's largest broker</p>

//           <form onSubmit={handleSubmit}>
//             <div className="form-floating mb-3">
//               <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Your full name" value={formData.fullName} onChange={handleChange} required />
//               <label htmlFor="fullName">Full Name</label>
//             </div>
//             <div className="form-floating mb-3">
//               <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} required />
//               <label htmlFor="email">Email address</label>
//             </div>
//             <div className="form-floating mb-3">
//               <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//               <label htmlFor="password">Password</label>
//             </div>

//             {error && <div className="alert alert-danger p-2">{error}</div>}
//             {success && <div className="alert alert-success p-2">{success}</div>}

//             <div className="d-grid">
//               <button className="btn btn-primary btn-lg" type="submit" disabled={loading}>
//                 {loading ? "Creating Account..." : "Create account"}
//               </button>
//             </div>
//           </form>

//           <div className="text-center mt-4">
//             <Link to="/login" className="text-primary">
//               Already have an account? Log in
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

