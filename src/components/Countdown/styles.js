import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    p, h1, h3{
        color: #ffffff;
    }
`;

export const Button = styled.button`
    padding: 10px;
    border-radius: 10px;
    width: 85px;
    cursor: pointer;
`;

export const DivButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;