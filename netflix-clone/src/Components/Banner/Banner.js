// ! imports necessary dependencies, including React, axios, requests, and a CSS file banner.css.

import React, { useEffect, useState } from "react";
import axios from "../../utils/axios"; // used for making HTTP requests
import requests from "../../utils/requests";// contains various API endpoint configurations
import "./banner.css";

// uses the useState and useEffect hooks to manage the state and handle side effects.
// defines the Banner component as a functional component
const Banner = () => {
  // initializes the movie state variable using the useState hook
  const [movie, setMovie] = useState({});
  
  useEffect(() => { //  fetch the Netflix Originals data from the API
    (async () => {
      try {
        // define a variable request to hold the pic fetched 
        const request = await axios.get(requests.fetchNetflixOriginals);
        // This set the movie pic randomly
        setMovie( 
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
};

export default Banner;
