import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router'


const MovieDetails = ({movies}) => {
  let  {id} = useParams();
 const [seeMore,setSeeMore]=useState({});
console.log(movies)
console.log(id)
 useEffect(() => {
   setSeeMore(movies.filter((movie)=>movie.id=== id))
 }, [movies,id]);
 
 
  return (
    <div>
      <h5>{seeMore[0].title} </h5>
      <iframe
        width="560"
        height="315"
        src={seeMore[0].trailer}
        title={seeMore[0].title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <p>{seeMore[0].description} </p>
    </div>
  );
}

export default MovieDetails

