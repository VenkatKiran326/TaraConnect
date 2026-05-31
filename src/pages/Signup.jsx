import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "brand",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const selectRole = (role) => {
    setUser((prev) => ({ ...prev, role }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const result = await signup({
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
      });

      if (result.token) {
        navigate(user.role === "brand" ? "/branddashboard" : "/influencerdashboard");
      } else {
        setError(result.msg || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong during signup");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="page ">
          <div className="box">
            <form onSubmit={handleSubmit}>
              <h3 className="text-black text-center">Create account </h3>
              <div className="boxes text-center mb-4">
                <button
                  type="button"
                  className={`secondaryBtn me-2 ${user.role === "brand" ? "active" : ""}`}
                  onClick={() => selectRole("brand")}
                >
                  Brand
                </button>
                <button
                  type="button"
                  className={`secondaryBtn ${user.role === "influencer" ? "active" : ""}`}
                  onClick={() => selectRole("influencer")}
                >
                  Influencer
                </button>
              </div>

              <div className="form-group">
                <label htmlFor="username" className="text-black">
                  Username <span className="text-danger text-black">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  placeholder="Username"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="text-black">
                  Email address <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="text-black">
                  Password <span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />

                <label htmlFor="confirmPassword" className="text-black">
                  Confirm Password <span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                />
                <small id="emailHelp" className="form-text">
                  Reenter password
                </small>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label text-black" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button type="submit" className="secondaryBtn w-100 ">
                Sign up
              </button>
              {error && <div className="alert alert-danger mt-3">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
