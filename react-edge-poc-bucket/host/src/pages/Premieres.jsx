import React, { useEffect, useState } from "react";
import Show from "../components/show/Show";

const Premieres = () => {
  const [shows, setShows] = useState([]);

  const fetchPremieres = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=87de9079e74c828116acce677f6f255b"
    );
    const { results } = await response.json();
    setShows(results);
  };

  useEffect(() => {
    fetchPremieres();
  }, []);

  return (
    <>
      <section id="site-bar">
        <div className="container">
          <h1>PREMIERES</h1>
          <p>Brand new shows showing this month</p>
        </div>
      </section>

      <section id="main">
        <div className="container">
          <div class="trending-results">
            {shows.length === 0 ? (
              <div class="no-data" data-ng-if="trending.shows.length == 0">
                There are no popular shows available to display
              </div>
            ) : (
              <ul class="list-of-shows">
                {shows.map(show => (
                  <Show id={show.id} key={show.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Premieres;
