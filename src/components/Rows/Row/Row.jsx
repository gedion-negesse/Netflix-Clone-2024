import React from "react";

import { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../Utils/axios";
import requests from "../../../Utils/requests";
import movieTrailer from "movie-trailer"; //it will extract or find the movie trailer from youtube if we passe titile of the move to it
import YouTube from "react-youtube"; // enables us to embed and play a youtube by using the the extracted video id
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original"; // base URL ffor images on TMDB
  // const base_url = "https://api.themoviedb.org/3"; // Base URL for Movies on TMDB

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);

        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]); // using dependency every time page load it will fech new data

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // if there is a trailer open initialy set it empty then do the next step
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        // passing the parameters to the movie trailer
        .then((url) => {
          const urlparams = new URLSearchParams(new URL(url).search); // extracting the video id by parsind whts returned from the movie-trailer

          setTrailerUrl(urlparams.get("v")); // seting the newly extracted video id starts with (v=jkhk1233)
        });
    }
  };

  //defining the size and auto paly of you tube to dispaly the vedio
  const opts = {
    hight: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  return (
    <div className="row">
      <h4>{title}</h4>

      <div className="row_posters">
        {movies?.map((movie, i) => (
          <img
            onClick={() => handleClick(movie)}
            key={i}
            src={`${base_url}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path // when mapping if there isLargeRow is true use the poster card image if not use th backdrop image
            }`}
            alt={movie?.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`} // if isLargeRow is true or passed as propes use the css class name "row_posterLarge" this will change the hight of the poster
            onError={(e) => (e.target.style.display = "none")} //if there is empty array or cant fetch the data dont show any thing.
          />
        ))}
      </div>

      <div style={{ padding: "10px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
