import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    h3{
        color: #ffffff;
    }
`;


export const Input = styled.input`
    padding: 10px;
    width: 225px;
    border-radius: 10px;
    outline: none;
    border: none;
    @media(max-width: 600px){
        width: 140px;
    }
`;

export const DivInput = styled.div`
    width: 350px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;   
     @media(max-width: 600px){
        width: 250px;
    }
`;

export const Button = styled.button`
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    background-color: #0e0036;
    color: #ffffff;
`;

export const TodoItem = styled.div`
    padding: 7.5px;
    margin-top: 10px;
    border: 1px solid black;
    cursor: pointer;
    background-color: #0e0036;
    color: #ffffff;
    border-radius: 10px;
    p{
        margin: 0px;
        font-size: 14px;
        font-weight: bold;
    }
`;