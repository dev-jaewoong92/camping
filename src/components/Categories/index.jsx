import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const CategoriesWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 16px;
`;

const CategoryButton = styled.button`
    padding: 8px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #0056b3;
    }
`;

const Categories = () => {
    const [categories] = useState(['Electronics', 'Clothing', 'Books', 'Home Appliances']);
    return (
        <div>
            <CategoriesWrapper>
                {categories.map((category) => (
                    <Link key={category} to={`/category/${category}`}>
                        <CategoryButton>{category}</CategoryButton>
                    </Link>
                ))}
            </CategoriesWrapper>
            <h2>Choose a category to add items</h2>
        </div>
    );
};

export default Categories;
