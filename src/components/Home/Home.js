import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="nav">
      <div className="logo">
        <a href="#">Movies</a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="popular">Popular</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
