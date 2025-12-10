import React from "react";
import requests from "./request";
import Row from "./Row"
import './app.css';
import Banner from "./Banner";
import Navbar  from "./Navbar";
export default function App ()
{
    return(
        <div className="container">
        <Navbar />
        <Banner/>
        
        <Row title="Trending Now" fetchUrl={requests.trendingDay} isLarge={true}  />
        <Row title="Trending Week" fetchUrl={requests.trendingWeek} />
        <Row title="Action" fetchUrl={requests.action} />
        <Row title="Comedy" fetchUrl={requests.comedy}/>
        <Row title="Sci-fi" fetchUrl={requests.scifi} />
        <Row title="Romance" fetchUrl={requests.romance} /> 
        <Row title="Horror" fetchUrl={requests.horror} />
        <Row title="Documentary" fetchUrl={requests.documentary} />
        </div>
    )
}