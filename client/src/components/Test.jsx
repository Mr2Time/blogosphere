import Home1 from "../assets/home-1.jpeg";
import Home2 from "../assets/home-2.jpeg";
import Home3 from "../assets/home-3.jpeg";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const data = [
  {
    id: 1,
    title: "John - CEO",
    image: Home1,
    description:
      "NeuBlog has transformed the way I share my ideas. The platform is intuitive and the community is incredibly supportive.",
  },
  {
    id: 2,
    title: "Jane - Freelancer",
    image: Home2,
    description:
      "NeuBlog's Neumorphism design makes the blogging experience smooth and enjoyable. Highly recommend it to anyone looking to start a blog.",
  },
  {
    id: 3,
    title: "James - Content Creator",
    image: Home3,
    description:
      "I love how easy it is to connect with other bloggers on NeuBlog. The design is beautiful and the features are top-notch.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const infiniteLoop = () => {
    setIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      infiniteLoop();
    }, 3000); // Increased interval for visibility

    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <SlideContainer>
        <Slide>
          <img
            key={data[index].id}
            src={data[index].image}
            alt={data[index].title}
          />
          <h2>{data[index].description}</h2>
          <p>{data[index].title}</p>
        </Slide>
      </SlideContainer>
    </>
  );
};

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const Slide = styled.div`
  height: 20rem;
  min-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 2s cubic-bezier(0.39, 0.575, 0.565, 1);
  background: #fff;
  margin-top: 5rem;

  h2 {
    font-size: 1rem;
    margin: 2rem 0;
    color: #333;
  }

  p {
    font-size: 0.8rem;
    color: #333;
    border-bottom: 1px solid #ababab;
    padding-bottom: 0.5rem;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export default Testimonials;
