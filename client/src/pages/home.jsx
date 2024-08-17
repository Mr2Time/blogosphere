import React from "react";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";
import Home1 from "../assets/home-1.jpeg";
import Home2 from "../assets/home-2.jpeg";
import Home3 from "../assets/home-3.jpeg";
import Home4 from "../assets/home-4.jpeg";

function Section1() {
  return (
    <>
      <C1>
        <div className="left">
          <h1>Welcome to NeuBlog</h1>
          <p>
            Dive into a world of creativity and innovation. Discover engaging
            blogs and share your unique stories with our community.
          </p>
          <p>
            <a href="#">Start Your Blog </a>
            <FaLongArrowAltRight />
          </p>
        </div>
        <div className="right">
          <div className="img-container">
            <img src={Home1} alt="home-1" />
            <img src={Home2} alt="home-2" />
            <img src={Home3} alt="home-3" />
            <img src={Home4} alt="home-4" />
          </div>
        </div>
      </C1>
    </>
  );
}

export default function home() {
  return (
    <div>
      <Section1 />
    </div>
  );
}

const C1 = styled.div`
  height: 92vh;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: radial-gradient(
      circle at top left,
      rgba(255, 182, 193, 0.3),
      transparent 60%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(255, 182, 193, 0.3),
      transparent 60%
    ),
    white;
  font-family: Arial, sans-serif;
  padding: 20px;
  box-sizing: border-box;

  .left {
    width: 50%;
    text-align: center;
    padding: 0 20px;

    h1 {
      font-size: 3em;
      color: #333;
      margin: 1rem;
    }

    p {
      font-size: 1.4em;
      color: #666;
      margin: 1rem;
    }

    p a {
      color: #000000;
      text-decoration: none;
      font-weight: bold;
      position: relative;
      bottom: 5px;
    }
  }

  .right {
  width: 30%; /* Adjust width to prevent images from being too large */
  max-height: 38vh; /* Constrain the height to avoid overflowing */
  display: flex;
  flex-direction: column;
  justify-content: center;

  .img-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
    height: auto; /* Allow images to size naturally */

    img {
      width: 100%;
      aspect-ratio: 1 / 1; /* Maintain square aspect ratio */
      object-fit: cover;
      border-radius: 15px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
}

`;
