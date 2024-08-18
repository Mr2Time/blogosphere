import React from "react";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";

import Home1 from "../assets/home-1.jpeg";
import Home2 from "../assets/home-2.jpeg";
import Home3 from "../assets/home-3.jpeg";
import Home4 from "../assets/home-4.jpeg";
import Home5 from "../assets/home-5.jpeg";

import Cards from "../components/Cards";
import Testimonials from "../components/Test";
// welcome to neublog
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

// why choose neublog
function Section2() {
  return (
    <>
      <C2>
        <div className="left">
          <h1>Why Choose NeuBlog?</h1>
          <p>
            Experience a seamless and elegant platform designed for sharing your
            thoughts and exploring new ideas. Join a community of like-minded
            individuals and elevate your blogging experience.
          </p>
        </div>
        <div className="right">
          <img src={Home5} alt="home-5" />
          <div>
            <h1>5,000+</h1>
            <p>Active Bloggers</p>
          </div>
        </div>
      </C2>
    </>
  );
}

// featured blogs
function Section3() {
  return (
    <C3>
      <div className="top">
        <div className="text">
          <h1>Featured Blogs</h1>
          <p>
            Stay updated with the latest and most popular blog posts <br />
            from our community. Explore a variety of topics and find your <br />
            next favorite read.
          </p>
        </div>
      </div>
      <div className="bottom">
        <Cards />
      </div>
    </C3>
  );
}

export default function home() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Testimonials />
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

const C2 = styled.div`
  height: 70vh;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .left {
    width: 50%;
    text-align: left;
    margin-bottom: 5rem;
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
  }

  .right {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      width: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    div {
      display: flex;
      margin: 1rem;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      position: relative;
      right: 30%;

      h1 {
        font-size: 2em;
        color: #333;
        margin: 1rem;
      }

      p {
        font-size: 1.4em;
        color: #ff6464;
        margin: 1rem;
      }
    }
  }
`;

const C3 = styled.div`
  width: 100%;

  .top {
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    position: static;
    margin: 5rem;

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
  }
`;
