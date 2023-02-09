
import './App.css';
import { useState,useEffect } from "react";
import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList/MovieList';
import { v4 as uuidv4 } from "uuid";
import Footer from './Components/Footer';

function App() {

  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLisFLGm4_P5eCRLha-Djc_C5tT7If83FkTXaBLSvXiHmM_0mG",
      title: "ffffff",
      description:
        "est un thriller américain co-produit et réalisé par Peter Winther, sorti en 2021.",
      rating: 2,
    },
    {
      id: uuidv4(),
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/The_Pale_Blue_Eye_poster.jpg/220px-The_Pale_Blue_Eye_poster.jpg",

      title: "The Pale Blue Eye",
      description:
        "The Pale Blue Eye is a 2022 American mystery thriller film written and directed by Scott Cooper.",
      rating: 5,
    },
    {
      id: uuidv4(),
      image:
        "https://fr.web.img2.acsta.net/c_310_420/pictures/22/09/28/14/28/0482035.jpg",

      title: "Jaula",
      description:
        "Jaula is a film directed by Ignacio Tatay with Elena Anaya, Pablo Molinero. Synopsis: When a couple finds a child of unknown origin,",
      rating: 3,
    },
    {
      id: uuidv4(),
      image: "https://media.senscritique.com/media/000020798942/300/carter.png",

      title: "Carter",
      description:
        "Carter est un film sud-coréen réalisé par Jeong Byeong-gil, sorti en 2022.",
      rating: 4,
    },
    {
      id: uuidv4(),
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQsPClS6v0aKmxHauTEP4eyhQyjTbTRey9FiYRAsUbPxxbOh5Ns",

      title: "Athena",
      description:
        "Rappelé du front à la suite de la mort de son plus jeune frère, décédé des suites d’une prétendue intervention de police.",
      rating: 4,
    },
    {
      id: uuidv4(),
      image:
        "https://fr.web.img6.acsta.net/pictures/20/10/27/11/58/5614922.jpg",

      title: "The Call",
      description:
        "The Call est un film réalisé par Chung-Hyun Lee avec Shin-Hye Park, Jeon Jong-seo. Synopsis ",
      rating: 3,
    },
    {
      id: uuidv4(),
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSp0zWhqViluKE6LlHBi3p4PiaeDP1Y800GBFzJ2qGxFv6vRGrG",

      title: "BAC Nord",
      description:
        "BAC Nord est un film français co-écrit et réalisé par Cédric Jimenez, sorti en 2020.",
      rating: 3,
    },
    {
      id: uuidv4(),
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTcmObIv9QSmnJsP7RPCPyB_zRNCP1IxkYpWTbcnUe8qiuqrXaq",

      title: "Derrière nos écrans de fumée",
      description:
        "Derrière nos écrans de fumée (The Social Dilemma) est un documentaire drame américain .",
      rating: 4,
    },
  ]);
   const [inputSearch, setInputSearch] = useState("");
   const [stars, setStars] = useState(1);

  const [filtredMovies,setFiltredMovies]=useState(movies);


useEffect(() => {
 setFiltredMovies(
  movies.filter((movie)=>
  movie.title.toLowerCase().includes(inputSearch.toLowerCase())&& movie.rating >= stars)
 )

}, [inputSearch,stars,movies])

console.log(filtredMovies)

 

  return (
    <div className="App">
      <Navbar movies={movies} setMovies={setMovies} inputSerch={inputSearch} setInputSearch={setInputSearch} stars={stars} setStars={setStars} />

      <MovieList movies={filtredMovies} setMovies={setMovies} />
      <br/>
      <br/>
      <Footer/>
    </div>

  );
}

export default App;
