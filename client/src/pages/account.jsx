import React from "react";
import styled from "styled-components";
import Card1 from "../assets/card1.jpeg";


const AccountPage = () => {
  return (
    <AccountContainer>
      <C1>
        <div className="info-1">
          <img src={Card1} alt="card1" />
          <h4>Mo Wizzy</h4>
          <a href="">edit</a>
        </div>
        <div className="info-2">
          <p>Blogs: 22</p>
          <p>Followers: 200</p>
          <p>Following: 100</p>
          <p>Likes: 2k</p>
        </div>
      </C1>
    </AccountContainer>
  );
};

const AccountContainer = styled.div`
  width: 100%;
  height: 92vh;
  background-color: #f2f2f2;
`;

const C1 = styled.div`
  width: 100%;
  height: 30vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .info-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 70px;
      height: 70px;
      object-fit: cover;
      border-radius: 50%;
    }
    h4 {
      color: #000000;
      font-size: 1rem;
      font-weight: 700;
      margin: 0.5rem;
    }
    p {
      color: #000000;
      font-size: 0.8rem;
      font-weight: 700;
      margin: 0.2rem;
    }
  }

  .info-2 {
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    p {
      color: #000000;
      font-size: 0.8rem;
      font-weight: 700;
      margin: 0.5rem;
    }
  }
`;

export default AccountPage;
