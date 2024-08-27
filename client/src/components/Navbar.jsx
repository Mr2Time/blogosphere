import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";

import Brand from "../assets/brand.png";

const Navbar = () => {
  return (
    <StyledNav>
      <StyledMenu>
        <StyledMenuItems>
          <StyledMenuItem to="/">Home</StyledMenuItem>
          <StyledMenuItem to="/blogs">Blogs</StyledMenuItem>
          <StyledMenuItem to="/follow">Follow</StyledMenuItem>
          <StyledMenuItem to="/account">Account</StyledMenuItem>
        </StyledMenuItems>
        <StyledBrand to="/">
          <img src={Brand} alt="brand image" />
        </StyledBrand>
        <JoinUs>
          <Link to="/signup">
            Join Us
            <FaLongArrowAltRight />
          </Link>
        </JoinUs>
      </StyledMenu>
    </StyledNav>
  );
};

export default Navbar;

// Styled Components
const StyledNav = styled.nav`
  height: 8vh;
  padding: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledBrand = styled(Link)`
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;

const StyledMenuItems = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledMenuItem = styled(Link)`
  margin: 0 20px;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  position: relative;

  &:hover {
    text-decoration: underline;
  }
`;

const JoinUs = styled.button`
  padding: 5px 10px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  color: #000000;
  cursor: pointer;
  font-weight: bold;
  box-sizing: border-box;

  &:hover {
    background-color: #f1f1f1; 
    padding: 10px 15px;
    border-radius: 20px;
  }

  a {
    color: #000000;
    text-decoration: none;
    font-weight: bold;
    position: relative;

    svg {
      margin-left: 5px;
    }
  }
`;
