import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

const ItemListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Item = styled.div`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 8px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`;

const ItemList = () => {
    const [items, setItems] = useState([]);
    const { categoryName } = useParams();

    const addItem = () => {
        const newItem = {
            name: `Item ${items.length + 1}`,
            price: (Math.random() * 100).toFixed(2),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            category: categoryName,
        };

        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <ItemListWrapper>
            <h2>Category: {categoryName}</h2>
            <button onClick={addItem}>Add Item</button>
            {items.map((item, index) => (
                <Item key={index}>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>{item.description}</p>
                </Item>
            ))}
        </ItemListWrapper>
    );
};

export default ItemList;
