import React, { useEffect, useState } from "react";

import "./Show.css";

function Show({ id }) {
  const [show, setShow] = useState({});

  const fetchShow = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=87de9079e74c828116acce677f6f255b`
    );
    const parsedResponse = await response.json();
    setShow(parsedResponse);
  };

  useEffect(() => {
    fetchShow();
  }, []);

  const handleViewClick = event => {
    if (window.location.href.includes("localhost")) {
      window.location.assign(`http://localhost:8282/#/view/${id}`);
    } else {
      document.cookie = "origin=B";
      window.location.assign(`/#/view/${id}`);
      document.location.reload();
    }
  };

  return (
    <li class="col-xs-6 col-md-4 repeat-animation">
      <div class="show-frame">
        <ul class="genres">
          {show.genres?.map((genre, index) => (
            <li
              key={genre.id}
              class="animate-repeat"
              style={{
                backgroundColor:
                  "rgba(59, 185, 187, " + show.genres.length / index / 5 + ")"
              }}
            >
              {genre.name}
            </li>
          )) ?? <></>}
        </ul>
        <img
          preload-image
          default-image="../public/assets/images/loading.jpg"
          fallback-image="../public/assets/images/fallback.jpg"
          src={`https://image.tmdb.org/t/p/w780/${show.backdrop_path}`}
        />
        <div class="date label label-dark">
          <span class="icon icon-calendar"></span> {show.first_air_date}
        </div>
        <h2>{show.original_name}</h2>
        <div class="inner">
          <ul class="info">
            <li class="col-xs-6 rating">
              <span class="icon icon-heart3"></span> {show.vote_average}
            </li>
            <li class="col-xs-6 country">
              <span class="icon icon-earth"></span>{" "}
              {show.origin_country && show.origin_country.length > 0 ? (
                show.origin_country.map(country => <span>{country}</span>)
              ) : (
                <span>--</span>
              )}
            </li>
            <div class="clearfix"></div>
          </ul>
          <div class="buttons">
            <a class="btn btn-info" onClick={handleViewClick}>
              <span class="icon icon-arrow-right7"></span> View
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Show;
