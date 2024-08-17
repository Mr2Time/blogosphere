import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Brand from "../assets/brand.png";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


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
            </StyledMenu>
            <StyledDropdown>
                <StyledButton onClick={toggleDropdown}>Menu</StyledButton>
                {isDropdownOpen && (
                    <StyledDropdownItems>
                        <StyledDropdownItem to="/login">login</StyledDropdownItem>
                        <StyledDropdownItem to="/signup">signup</StyledDropdownItem>
                    </StyledDropdownItems>
                )}
            </StyledDropdown>
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

const StyledDropdown = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

const StyledButton = styled.button`
    background-color: transparent;
    color: #000000;
    border: 1px solid lightblue;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;


`;

const StyledDropdownItems = styled.ul`
    position: absolute;
    top: 40px;
    right: 0;
    background-color: #fff;
    padding: 10px;
    list-style: none;
    margin: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    min-width: 150px;
`;

const StyledDropdownItem = styled(Link)`
    display: block;
    padding: 8px 12px;
    color: #333;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: #f1f1f1;
    }
`;
