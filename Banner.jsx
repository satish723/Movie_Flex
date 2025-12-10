import React from 'react';
import requests from './request';
import instance from "./axios";
import './Banner.css';
function Banner() {
  const [movie,setMovies]=React.useState([]);
  React.useEffect(()=>
  {
    async function fetchData()
    {
      const res=await instance.get(requests.originals);
      setMovies(res.data.results[Math.floor(Math.random()* res.data.results.length)]);
      return res;
    }
    fetchData();
  },[]);
  return (
    
    <header className="banner" style={{
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` ,
    }}  >
      
      <div className="banner-contents">
      <h1 className='banner-title'>{movie.title}</h1> 
      <div className="buttons"><button className='banner-btn'>play</button><button className='banner-btn'>next</button></div>
      <p className="banner-descriptions">{movie.overview}</p> 
      <div className="banner-fade"></div>
      </div>
    </header>
  )
}

export default Banner