import React, { useEffect, useState } from "react";
import categorias, { getMovies } from "../api";
import './Banner.css'

const Banner = () => {
  
    const [movie, setMovie] = useState({});

    const fetchRandomMovie = async () => {
      try{
        const originalsCategorias = categorias.find(
          (categorias) => categorias.name === 'originals'
        );
        const data = await getMovies(originalsCategorias.path);
        const movie = data?.results;
        const randomIndex = Math.floor(Math.random() * movie.length);
        setMovie(movie[randomIndex])
      }catch(error){
        console.log('Baner fetchRandomMovie error', error)
      }
    }; 

      useEffect(() => {
        fetchRandomMovie()
      }, []);

      const truncate = (str, n) => {
        return str?.length > n ? str.subtring(0, n - 1) + '...' : str;
      };

      return (
        <header
          className="banner-container"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.background_path})`,
            roundPosition: "center-center",
          }}
        >
          <div className="banner-content">
            <h1 className="bainner-title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="bainner-button-container">
              <button className="bainner-button">Assistir</button>
              <button className="bainner-button">Minha lista</button>
            </div>
            <div className="bainner-description">
              <h1>{truncate(movie?.overview)}</h1>
            </div>
          </div>
        </header>
      );
};

export default Banner;