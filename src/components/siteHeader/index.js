import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

const SiteHeader = () => {
  return (
    
    <nav className="navbar  navbar-light fixed-top  background-color:#ff9e1b; ">
      {/* <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      /> */}
      <img class="crop" src="TheMovieDatabase.png" alt="Italian Trulli"></img>
      <nav className="navbar-brand text-white">
        <Link className=" text-white " to="/">
          The Movie Database 
        </Link>
      </nav>
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white bg-dark" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white bg-dark" to="/movies/Upcoming">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white bg-dark" to="/movies/Popular">
              Popular
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white bg-dark" to="/movies/Top_Rated">
              Top Rated
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white bg-dark" to="/movies/Now_Playing">
              Now Playing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white bg-dark" to="/movies/Watchlist">
              Watch List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white bg-dark" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white bg-dark" to="/Dashboard">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;