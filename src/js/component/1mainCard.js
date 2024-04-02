import React, { useState, useEffect } from "react";
import { Card, Carousel, Container } from "react-bootstrap";

const MainCard = ({ data, imageUrlKey, nameKey }) => {
  const [numCards, setNumCards] = useState(5); // Default to 5 cards

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 680) {
        setNumCards(1);
      } else if (width >= 680 && width < 960) {
        setNumCards(3);
      } else {
        setNumCards(5);
      }
    };

    handleResize(); // Call initially to set initial number of cards

    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to split data into chunks of numCards elements
  const chunkArray = (arr, chunkSize) => {
    return Array.from(
      { length: Math.ceil(arr.length / chunkSize) },
      (_, index) => arr.slice(index * chunkSize, index * chunkSize + chunkSize)
    );
  };

  // Split data into chunks of numCards elements
  const chunkedData = chunkArray(data, numCards);

  return (
    <Container fluid>
      <Carousel className="h-100" interval={null}>
        {chunkedData.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-around h-100">
              {chunk.map((item, i) => (
                <div key={i} className="m-2 d-flex align-items-stretch">
                  <Card className="h-100 bg-secondary">
                    <Card.Img
                      variant="top"
                      src={`https://starwars-visualguide.com/assets/img/${imageUrlKey}/${item.uid}.jpg`}
                      alt={item[nameKey]}
                      className="h-70" // Adjust image height
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{item[nameKey]}</Card.Title>
                      {/* Add other details as needed */}
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default MainCard;
