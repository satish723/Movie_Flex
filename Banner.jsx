import React from 'react';
import requests from './request';
import Row from "./Row";
import instance from "./axios"
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
  },[])
  
  return (
    
    <header className="banner"  >

    </header>
  )
}

export default Banner