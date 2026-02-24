import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // saves to database
    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.text())
      .then((msg) => {
        alert(msg);

        setUser({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });

        navigate("/branddashboard");
      })

      .catch((err) => {
        console.error(err);
        alert("Something went wrong");
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="page ">
          <div className="box">
        <form onSubmit={handleSubmit}>
          <h3 className="text-black text-center">Create account </h3>
 <div className="boxes text-center">
              <button className="secondaryBtn">Brand</button>
              <button className="secondaryBtn">Influncer</button>
            </div>

          <div className="form-group">
            <label for="exampleInputEmail1" className="text-black">Username <span className="text-danger text-black">*</span></label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="name"
              value={user.name}
              onChange={handleChange}
              aria-describedby="emailHelp"
              placeholder="Username"
              required
            />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1" className="text-black">Email address <span className="text-danger">*</span></label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1" className="text-black">Password <span className="text-danger">*</span></label>
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

            <label for="exampleInputPassword1" className="text-black">Confirm Password <span className="text-danger">*</span></label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <small id="emailHelp" className="form-text">
              Reenter password
            </small>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label text-black" for="exampleCheck1">
              Remember me
            </label>
          </div>
          <button type="submit" className="secondaryBtn w-100 ">
            Sign up
          </button>
        </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
