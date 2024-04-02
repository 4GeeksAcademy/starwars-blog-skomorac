import React from "react";
import { Card, Container } from "react-bootstrap";
import "../../styles/index.css";

const MainCard = ({ data, imageUrlKey, nameKey }) => {
  console.log(data);
  return (
    <Container fluid>
      <h1 className="mainTitle mb-3">{imageUrlKey}</h1>
      <div className="card-container mb-5">
        {data.map((item, i) => (
          <div key={i} className="m-2">
            <Card className="bg-secondary">
              <Card.Img
                variant="top"
                src={`https://starwars-visualguide.com/assets/img/${imageUrlKey}/${item.uid}.jpg`}
                alt={item[nameKey]}
                className="card-image"
              />
              <Card.Body>
                <Card.Title>{item[nameKey]}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MainCard;
