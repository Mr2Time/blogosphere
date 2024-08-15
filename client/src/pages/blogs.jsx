import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  filter: grayscale(100%);
`;

const CardHeading = styled.h2`
  font-size: 20px;
  margin-top: 10px;
`;

const CardSubText = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: 5px;
`;

const Blogs = () => {
  return (
    <div>
      <CardContainer>
        <CardImage src="path/to/image.jpg" alt="Blog Image" />
        <CardHeading>Blog Title</CardHeading>
        <CardSubText>Author Name</CardSubText>
      </CardContainer>

      <CardContainer>
        <CardImage src="path/to/image.jpg" alt="Blog Image" />
        <CardHeading>Blog Title</CardHeading>
        <CardSubText>Author Name</CardSubText>
      </CardContainer>

      {/* Add more CardContainers for each blog */}
    </div>
  );
};

export default Blogs;