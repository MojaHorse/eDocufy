import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Features from "./components/Features";
import Footer from "./components/Footer";

// Pages
import ServicesPage from "./Screens/Services";
import AboutUs from "./Screens/AboutUs";
import Home from "./Screens/Home";
import Upload from "./Screens/Upload";
import UploadFile from "./Screens/UploadFile";
import SignUpScreen from "./Authentication/SignUp_Screen";
import LoginScreen from "./Authentication/Login_Screen";
import VerificationScreen from "./Authentication/Verification_screen";
import SettingPage from "./Screens/Settings";

// Main App
const App = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const hiddenRoutes = ["/login", "/signup", "/verify", "/home", "/upload", "/settings"];
  const hideHeaderFooter = hiddenRoutes.includes(location.pathname);

  return (
    <div className="font-sans">
      {!hideHeaderFooter}

      {loading && (
        <div className="text-center text-sm p-2 bg-yellow-100 text-yellow-800">
          Upload in progress...
        </div>
      )}
      {error && (
        <div className="text-center text-sm p-2 bg-red-100 text-red-800">
          Error: {error}
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Steps />
              <Features />
            </>
          }
        />

        {/* Main pages */}
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/verify" element={<VerificationScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="" element={<Upload />} />
        <Route path="upload" element={<UploadFile />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/settings" element={<SettingPage />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
