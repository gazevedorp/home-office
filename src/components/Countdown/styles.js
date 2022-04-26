import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    p, h1, h3{
        color: #ffffff;
    }
    h1{
        text-align: center;
    }
`;

export const Button = styled.button`
    padding: 10px;
    border-radius: 10px;
    width: 85px;
    cursor: pointer;
    border: none;
    background-color: #0e0036;
    color: #ffffff;
`;

export const DivButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;