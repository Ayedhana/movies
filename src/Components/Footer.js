import React from 'react'
import Card from "react-bootstrap/Card";

const Footer = () => {
  return (
    <div>
      <Card>
        <Card.Header as="h5">Hous Of Movies</Card.Header>
        <Card.Body>
          <Card.Title>Contactez nous </Card.Title>
          <Card.Text>
           Adresse émail:housofmovies@yahoo.fr
          </Card.Text>
         
        </Card.Body>
      </Card>
    </div>
  );
}

export default Footer
