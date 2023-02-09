import React, {useState} from 'react'
import '../Styles/Navbar.css';
import logo from '../assets/logo.jpeg';
import ReactStars from "react-stars";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";

const Navbar = ({movies,setMovies,inputSearch,setInputSearch,stars,setStars}) => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [newMovie, setNewMovie] = useState({
  id: uuidv4(),
  title: "",
  genre: "",
  image: "",
  rating: 1,
});
const handelChange=(e)=>{
  setNewMovie({...newMovie,[e.target.name]:e.target.value})
  console.log(newMovie)
}
const handelSave=()=>{
setMovies([...movies,newMovie])
 setShow(false); 
}
const handelSearch=(e)=>{
setInputSearch(e.target.value) 

}
const handelStars=(new_rating)=>{
  setStars(new_rating)
}

  return (
    <div className="navbar">
      <img src={logo} alt="Movies" className="lmj-logo" />
      <input type="text" placeholder="Write a movie title" onChange={handelSearch}/>
      <ReactStars count={5} size={30} color2={"#FFC0CB"} half={false} onChange={handelStars} value={stars}/>
      <Button variant="outline-secondary" onClick={handleShow}>
        Add Movie
      </Button>
      <h1 className="lmj-title">House Of Movies</h1>
      {/*Model*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="model">
          <label>Image</label>
          <input type="text" name="image" onChange={handelChange}></input>
          <label>Title</label>
          <input type="text" name="title" onChange={handelChange}></input>
          <label>Description</label>
          <input type="text" name="description" onChange={handelChange}></input>
          <label>Rating</label>
          <input type="number" name="rating" onChange={handelChange}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Navbar

