import React,{useEffect,useState}from 'react'
import instance from "./axios"
import "./Row.css";
function Row({title,fetchUrl,isLarge}) {
    const [movies,setMovies]=useState([]);
    useEffect(()=>
        {
            async function fetchdata()
            {
                const data=await instance.get(fetchUrl);
                setMovies(data.data.results || []);
            }
            fetchdata();
        },[fetchUrl]);
    const baseURL="https://image.tmdb.org/t/p/w500";
  return (
    <div className="Container">
        <h2>{title}</h2>
        <div className="rowItems">
            {/* {console.log(title)} */}
            {movies.map((movie)=>
            <img className={['item', isLarge && 'isLarge'].filter(Boolean).join(' ')} key={movie.id} src={`${baseURL}${movie.poster_path}`} alt={movie.title}
            />)}
        </div>
    </div>
  )
}

export default Row