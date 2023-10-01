import React, { useEffect, useState } from "react";

// I have used this for image without api
import image from "../../assets/brian-mcgowan-kKyxIwvljBg-unsplash.jpg";
import "./Moviescard.css";

const MoviesCard = () => {
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (pageNum) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=avengers&page=${pageNum}`
      );
      const data = await response.json();
      // data =
      const reverseData = data.filter((item, index) => index !== 1);

      setShows((prevShows) => [...prevShows, ...reverseData]);
      setLoading(false);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleRefresh = () => {
    setShows([]);
    setPage(9);
  };

  return (
    <div className="card-wraper">
      <div className="card-container">
        {shows.map((show, index) => {
          if (index === 1) {
            return null;
          }
          return (
            <div className="card" key={index}>
              <img
                src={show.show.image && show.show.image.original}
                alt={show.show.name}
              />
              <div className="heading">
                <h2>{show.show.name}</h2>
                <div className="year">
                  <h3 className="left">{show.show.language}</h3>
                  <h3 className="right">{show.show.premiered}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="button-container">
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
          <button className="load-more-btn" onClick={handleRefresh}>
            Refresh
          </button>
        </div>
      )}
    </div>
  );
};

export default MoviesCard;
