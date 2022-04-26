import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    background-color: #0e0036;
    height: 100vh;
    @media(max-width: 600px){
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    padding-bottom: 50px;
`;

export const ContainerCounter = styled.div`
    background-color: #4c264b;
    margin-top: 50px;
    padding: 50px;
    border-radius: 10px;
    height: 180px;
`;

export const ContainerTodo = styled.div`
    background-color: #4c264b;
    margin-top: 50px;
    padding: 50px;
    border-radius: 10px;
    min-height: 180px;
`;
