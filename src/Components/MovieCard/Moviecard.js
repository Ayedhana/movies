import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ReactStars from "react-stars";
import {Link} from "react-router-dom";


const Moviecard = ({movie}) => {
  return (
    <div>
      <Card style={{ width: "18rem", height: "40rem" }}>
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}.</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <ReactStars
              count={5}
              size={30}
              color2={"#FFC0CB"}
              value={movie.rating}
              edit={false}
            />
            <Link to={`/movie/${movie.id}`}>
              <h5>More Details</h5>
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default Moviecard
