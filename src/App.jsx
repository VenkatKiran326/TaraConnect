import React from "react";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import ErrorBoundary from "./pages/ErrorBoundary";
import Landing from "./Landing";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Navbar from "./pages/Navbar";
import Brands from "./pages/Brands";
import Footer from "./pages/Footer";
import Influencers from "./pages/Influencers";
import About from "./pages/About";

import AdminDashboard from "./pages/AdminDashboard";
import BrandDashboard from "./pages/BrandDashboard";
import InfluncerDashboard from "./pages/InfluncerDashboard";

import ScrollToTop from "./pages/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <ScrollToTop />

        <Navbar />

        <ErrorBoundary>
          <Routes>

            {/* Public Routes */}

            <Route
              path="/"
              element={<Landing />}
            />

            <Route
              path="/signin"
              element={<Signin />}
            />

            <Route
              path="/signup"
              element={<Signup />}
            />

            <Route
              path="/brands"
              element={<Brands />}
            />

            <Route
              path="/influencers"
              element={<Influencers />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            {/* Protected Routes */}

            <Route
              path="/admindashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/branddashboard"
              element={
                <ProtectedRoute allowedRole="brand">
                  <BrandDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/influencerdashboard"
              element={
                <ProtectedRoute allowedRole="influencer">
                  <InfluncerDashboard />
                </ProtectedRoute>
              }
            />

          </Routes>

          {/* Footer MUST be inside BrowserRouter */}
          <Footer />

        </ErrorBoundary>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;