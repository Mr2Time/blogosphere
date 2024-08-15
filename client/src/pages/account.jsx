import React from 'react';
import styled from 'styled-components';

const AccountContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f2f2f2;
`;

const WelcomeText = styled.h1`
    font-size: 24px;
    color: #333;
    margin-bottom: 16px;
`;

const ProfileImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 16px;
`;

const AccountPage = () => {
    return (
        <AccountContainer>
            <WelcomeText>Welcome back!</WelcomeText>
            <ProfileImage src="/path/to/profile-image.jpg" alt="Profile Image" />
            {/* Additional content goes here */}
        </AccountContainer>
    );
};

export default AccountPage;