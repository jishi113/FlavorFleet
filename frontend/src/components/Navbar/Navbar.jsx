import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [search, setSearch] = useState("");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="logo-container">
        <h1 className="brand-name">FlavorFleet</h1>
      </Link>

      {/* Navigation */}
      <ul className="navbar-menu">

        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          to="/restaurants"
          onClick={() => setMenu("restaurants")}
          className={menu === "restaurants" ? "active" : ""}
        >
          Restaurants
        </Link>

        <a
          href="#app-download"
          onClick={() => setMenu("app")}
          className={menu === "app" ? "active" : ""}
        >
          Get App
        </a>

        <a
          href="#footer"
          onClick={() => setMenu("support")}
          className={menu === "support" ? "active" : ""}
        >
          Support
        </a>

      </ul>

      {/* Right Side */}
      <div className="navbar-right">

        {/* Search */}
        <input
          type="text"
          placeholder="Search dishes or restaurants..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Cart */}
        <div className="navbar-cart">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </Link>
          {getTotalCartAmount() > 0 && <div className="cart-dot"></div>}
        </div>

        {/* Login / Profile */}
        {!token ? (
          <button className="login-btn" onClick={() => setShowLogin(true)}>
            Sign In
          </button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="profile" />

            <ul className="nav-profile-dropdown">

              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" />
                <p>My Orders</p>
              </li>

              <hr />

              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>

            </ul>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;