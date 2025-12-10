import React,{useEffect,useState}from 'react'
import instance from "./axios"
import "./Row.css";
import { useNavigate } from "react-router-dom";
const VITE_API_KEY=import.meta.env.VITE_API_KEY;
function Row({title,fetchUrl,isLarge}) {
    const [movies,setMovies]=useState([]);
    const [trailkey,settrailkey]=useState(null);
    const navigate = useNavigate();
    useEffect(()=>
        {
            async function fetchdata()
            {
                const data=await instance.get(fetchUrl);
                setMovies(data.data.results || []);
            }
            fetchdata();
        },[fetchUrl]); 
        const vidhandle=(id)=>
            {
                if(id==trailkey)
                {
                    settrailkey(null);
                }
        const vidurl=`movie/${id}/videos?api_key=${VITE_API_KEY}`;
        // useEffect(()=>
        // {
            async function fetchvid()
            {
                const link=await instance.get(vidurl);
                const results =link.data.results;
                if (results && results.length>0) {
                    const vidkey= results[0].key;
                    settrailkey(vidkey);
                    // console.log(results);
                    // // window.open(`https://www.youtube.com/watch?v=${vidkey}`, "_blank");
                    // navigate(`/movie/${results}`);
                
                } else {
                    console.log("No video found for this movie.");
                    settrailkey(null);
                }

            }
        // },[])
        fetchvid();
       
    }
    const baseURL="https://image.tmdb.org/t/p/w500";
  return (
    
    <div className="Container">
        {trailkey&&
        <iframe className='clip'
        width="45%"
        height="400px"
        src={`https://www.youtube.com/embed/${trailkey}?autoplay=1`}
        title="Movie Trailer"
        allow="autoplay"
        allowFullScreen
        >    
        </iframe>}
        <h2>{title}</h2>
        <div className="rowItems">
            {/* {console.log(title)} */}
            {movies.map((movie)=>
            <img className={['item', isLarge && 'isLarge'].filter(Boolean).join(' ')} onClick={()=>vidhandle(movie.id)} key={movie.id} src={`${baseURL}${movie.poster_path}`} alt={movie.title}
/>)}
        </div>
        
    </div>
  )
}

export default Row