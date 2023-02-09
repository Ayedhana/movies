import React from 'react';
import Moviecard from '../MovieCard/Moviecard';


const MovieList = ({movies,setMovies}) => {
  return (
    <div>
   
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:'space-around',
    paddingLeft:"50px" ,paddingRight:"50px",paddingTop:"100px", alignContent:"space-around"}}>
     
      {movies.map((movie)=>{ return<Moviecard movie={movie}/>;})}
      
    </div>
    </div>
  );
}

export default MovieList
