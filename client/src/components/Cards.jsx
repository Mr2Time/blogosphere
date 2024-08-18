import React from "react";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";

// images
import Card1 from "../assets/card1.jpeg";
import Card2 from "../assets/card2.jpeg";
import Card3 from "../assets/card3.jpeg";

export default function Cards() {
  const images = [Card1, Card2, Card3];
  const header = [
    "Finding Your Creative Spark",
    "The Future of Blogging Technology",
    "Building a Strong Blogging Community",
  ];
  const text = [
    "lorem ipsum dolor sit amet",
    "lorem ipsum dolor sit amet",
    "lorem ipsum dolor sit amet",
  ];
  const tags = ["Inspiration", "Tech", "Community"];

  // get current date, name of month, day, year
  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  // date will look like

  return (
    <StyledCards>
      {images.map((image, index) => (
        <div className="card" key={index}>
          <div className="image-container">
            <p>{tags[index]}</p>
            <img src={image} alt={header[index]} />
          </div>
          <div className="ctext">
            <p>{date}</p>
            <h1>{header[index]}</h1>
            <p>
              Continue reading <FaLongArrowAltRight />
            </p>
          </div>
        </div>
      ))}
    </StyledCards>
  );
}

// Styled Components
const StyledCards = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  

  .card {
    border-radius: 15px;
    width: 20%;
    overflow: hidden;
    text-align: center;

    .image-container {
      width: 100%;
      overflow: hidden;
      border-radius: 15px; /* Round the top corners only */
      position: relative;

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        transition: transform 0.5s ease;
      }

      &:hover img {
        transform: scale(1.1);
      }

      p {
        /* Round the top left corner */
        position: absolute;
        top: 0;
        left: 0;
        background: #ffffff;
        color: #333;
        padding: 0.5rem 1rem;
        border-radius: 2.5px;
        margin: 0.8rem;
        z-index: 1;
      }
    }

    .ctext {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 1rem 0;
      color: #333;

      p {
        font-size: 0.8rem;
        color: #666;
        margin: 0.5rem;
        position: relative;
      }

      h1 {
        font-size: 1.2rem;
        margin: 0.5rem;
      }

      svg {
        font-size: 1.2rem;
        color: #333;
      position: absolute;
      right: -2rem;
      bottom: -0.1rem;
    }
  }
}
`;
