import React from "react";
import { Card, Carousel } from "react-bootstrap"; // Import Carousel component from React Bootstrap

const MainCard = ({ data, imageUrlKey, nameKey }) => {
  return (
    <Carousel>
      {data.map((item) => (
        <Carousel.Item key={item.uid}>
          <img
            className="d-block w-100"
            src={`https://starwars-visualguide.com/assets/img/${imageUrlKey}/${item.uid}.jpg`}
            alt={item[nameKey]}
          />
          <Carousel.Caption>
            <h3>{item[nameKey]}</h3>
            {/* Add other details as needed */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MainCard;
