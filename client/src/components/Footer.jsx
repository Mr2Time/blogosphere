import React from "react";
import styled from "styled-components";
//import social media icons including facebook, twitter, and instagram and github
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

// autofill the footer with the necessary information

const AboveFooter = () => {
  return (
    <AboveF>
      <h1>Join NeuBlog Today</h1>
      <div className="main">
        <div className="info">
          <h2>Blogs Created</h2>
          <p>Join a thriving community</p>
        </div>
        <div className="info">
          <h2>Active Users</h2>
          <p>Connect with like-minded individuals</p>
        </div>
        <div className="info">
          <h2>Monthly Growth</h2>
          <p>Our community is expanding</p>
        </div>
        <hr />
      </div>
    </AboveF>
  );
};

export default function Footer() {
  return (
    <Container>
      <AboveFooter />
      <FooterContainer>
        <div className="top">
          <p>
            <a href="#">About Us</a>
          </p>
          <p>
            <a href="#">Contact</a>
          </p>
          <p>
            <a href="#">Privacy Policy</a>
          </p>
          <p>
            <a href="#">Terms of Service</a>
          </p>
        </div>
        <hr />
        <div className="bottom">
          <div className="socials">
            <FaFacebook size={30} color="#ffffff" />
            <FaTwitter size={30} color="#ffffff" />
            <FaInstagram size={30} color="#ffffff" />
            <FaGithub size={30} color="#ffffff" />
          </div>
          <p>&copy; 2021 NeuBlog. All Rights Reserved</p>
        </div>
      </FooterContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const AboveF = styled.div`
  height: 40vh;

  &:hover {
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewport='0 0 24 24' fill='%23ff5959'><path d='M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm0 30c-7.732 0-14-6.268-14-14S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z'/></svg>")
        16 16,
      auto;
  }

  h1 {
    text-align: center;
    padding-top: 5vh;
    font-size: 3rem;
    color: #ff5959;
  }

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5vh;
    position: relative;

    .info {
      text-align: center;
      padding: 0 5vw;

      h2 {
        font-size: 1.2rem;
        color: #000000;
        // bold
        font-weight: 700;
      }

      p {
        // light gray
        color: #6e6e6e;
      }
    }
    hr {
      width: 80%;
      height: 1px;
      background-color: #acabab;
      position: absolute;
      bottom: -5rem;
      left: 10%;
      border: none;
      margin: 1rem 0;
    }
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 30vh;
  background-color: #852d2d;
  position: relative;

  .top {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2vh;

    p {
      margin: 0 1vw;
      font-size: 1.2rem;

      a {
        color: #ffffff;
        text-decoration: none;
      }
    }
  }

  hr {
    width: 90%;
    height: 1px;
    background-color: #acabab;
    border: none;
    margin: 1rem 0;
    position: absolute;
    left: 5%;
  }

  .bottom {
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 5vw;

    .socials {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin: 0 1vw;

        &:hover {
          cursor: pointer;
        }
      }
    }

    p {
      color: #ffffff;
      font-size: 1.2rem;
    }
  }
`;
