import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const [dropDown, setDropDown] = useState(false);

  const hiddenButtonPaths = [
    "/student-register",
    "/roleselection",
    "/login",
    "/alumni-register",
    "/admin",
  ];
  const hideButtons = hiddenButtonPaths.includes(location.pathname);

  return (
    <div className="relative top-0 bg-white z-50 flex items-center justify-between text-sm py-4 border-b border-white-400 font-outfit">
      {/* Logo */}
      <img
        className="w-44 cursor-pointer"
        src={assets.Logo}
        alt=""
        data-aos="zoom-in"
        data-aos-duration="800"
        onClick={() => navigate("/")}
      />

      {/* Buttons (Create Account and Login) */}
      {!hideButtons && (
        <div
          className="flex items-start gap-4 md:max-lg:gap-2"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <button
            onClick={() => navigate("/roleselection")}
            className="bg-primary font-outfit text-white px-10 py-3 rounded-full font-light hidden xl:block hover:bg-orange-600 transition md:max-lg:px-6 md:max-lg:py-2"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-secondary font-outfit text-white px-10 py-3 rounded-full font-light hidden xl:block md:max-lg:px-6 md:max-lg:py-2"
          >
            Login
          </button>
        </div>
      )}

      {/* Mobile Dropdown */}
      <div className="xl:hidden flex items-center">
        <div className="mr-4" onClick={() => setDropDown(!dropDown)}>
          {dropDown ? <X /> : <Menu />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
