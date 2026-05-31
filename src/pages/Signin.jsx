import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const result = await login(user);
      if (result.token) {
        const nextRoute = result.user.role === "brand" ? "/branddashboard" : result.user.role === "influencer" ? "/influencerdashboard" : "/";
        navigate(nextRoute);
      } else {
        setError(result.msg || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Server error");
    }
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="page">
          <div className="box">
            <h1 className="text-center">Login </h1>
            <div className="boxes text-center">
              <button type="button" className="secondaryBtn" disabled>
                Brand
              </button>
              <button type="button" className="secondaryBtn" disabled>
                Influencer
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group pt-4">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
                <small id="emailHelp" className="form-text text-white">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group pt-4">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>

                <div>
                  <div className="text-end">
                    <Link to="/signup">SignUp</Link>
                  </div>

                  <div className="text-end">
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </div>
                </div>
              </div>
              <button type="submit" className="secondaryBtn w-100">
                Sign In
              </button>
              {error && <div className="alert alert-danger mt-3">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
