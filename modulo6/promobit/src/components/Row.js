import React, { useEffect, useState } from "react";
import { getMovies } from "../api";
import './Row.css'

const imageHost = 'https://image.tmdb.org/t/p/original/'

const Row = ({title, path}, isLarge) => {

  const [movies, setMovies] = useState([])

  const fetchMovies = async (_path) => {
    try{
      const data = await getMovies(_path);
      console.log('data', data)
      setMovies(data?.results)
    }catch (error) {
      console.log('fetchMovies error', error);
    };
  };

  useEffect(()=>{
    fetchMovies(path);
  }, [path])


  return(
    <div className="row-container">
      <h2 className="row-header">{title}</h2>
      <div className="row-cards">
        {movies?.map((movies) => {
          return
          <img 
          className={`movie-card ${isLarge && 'movie-card-large'}`}
          key={movies.id} 
          src={`${imageHost}${isLarge? movies.poster_path : movies.poster_path}`} 
          alt={movies.name}>

          </img>
        })}
      </div>
    </div>
  )
}

export default Row;