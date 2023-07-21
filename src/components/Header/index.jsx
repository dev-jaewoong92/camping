import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const HeaderWrapper = styled.div`
    padding: 16px;
    background-color: #333;
    color: #fff;
    text-align: center;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <h1>My Store</h1>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
        </HeaderWrapper>
    );
};

export default Header;
