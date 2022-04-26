import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    background-color: #0e0036;
    height: 100vh;
    padding-bottom: 50px;
    @media(max-width: 800px){
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
`;

export const ContainerCounter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    background-color: #4c264b;
    margin-top: 50px;
    padding: 50px;
    border-radius: 10px;
    height: 180px;
    @media(max-width: 800px){
        width: 60%;
    }
`;

export const ContainerTodo = styled.div`
    width: 40%;
    background-color: #4c264b;
    margin-top: 50px;
    padding: 50px;
    border-radius: 10px;
    min-height: 180px;
    @media(max-width: 800px){
        width: 60%;
    }
`;
