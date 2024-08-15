import React, { useState } from 'react';
import styled from 'styled-components';

const UserList = styled.ul`
    list-style: none;
    padding: 0;
`;

const UserListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const UserName = styled.span`
    margin-right: 10px;
`;

const FollowButton = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
`;

const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    { id: 4, name: 'User 4' },
    { id: 5, name: 'User 5' },
    { id: 6, name: 'User 6' },
    { id: 7, name: 'User 7' },
    { id: 8, name: 'User 8' },
    { id: 9, name: 'User 9' },
    { id: 10, name: 'User 10' },
];

const FollowPage = () => {
    const [followedUsers, setFollowedUsers] = useState([]);

    const handleFollow = (userId) => {
        setFollowedUsers((prevFollowedUsers) => [...prevFollowedUsers, userId]);
    };

    return (
        <div>
            <h1>Follow Page</h1>
            <UserList>
                {users.map((user) => (
                    <UserListItem key={user.id}>
                        <UserName>{user.name}</UserName>
                        <FollowButton
                            onClick={() => handleFollow(user.id)}
                            disabled={followedUsers.includes(user.id)}
                        >
                            {followedUsers.includes(user.id) ? 'Following' : 'Follow'}
                        </FollowButton>
                    </UserListItem>
                ))}
            </UserList>
        </div>
    );
};

export default FollowPage;