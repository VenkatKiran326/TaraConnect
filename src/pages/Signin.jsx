import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1️⃣ Send login request to backend
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.text())
      .then((msg) => {
        alert(msg);

        if (msg === "Login Successful") {
          console.log("Logged in user:", user);
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Server error");
      });
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="page">
          <div className="box">
            <h1 className="text-center">Login </h1>
            <div className="boxes text-center">
              <button className="secondaryBtn">Brand</button>
              <button className="secondaryBtn">Influncer</button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group pt-4">
                <label for="exampleInputEmail1">Email address</label>
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
                <label for="exampleInputPassword1">Password</label>
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
                <label className="form-check-label" for="exampleCheck1">
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
