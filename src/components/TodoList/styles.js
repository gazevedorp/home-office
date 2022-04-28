import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    h2{
        color: #ffffff;
        text-align: center;
        margin-top: 0px;
        padding-top: 0px;
    }
`;


export const Input = styled.input`
    padding: 10px;
    width: 60%;
    border-radius: 10px;
    outline: none;
    border: 1px solid #000000;
    background-color: #ffffff;
    @media(min-width: 950px){
        width: 70%;
    }
    @media(min-width: 1400px){
        width: 80%;
    }
    @media(max-width: 450px){
        width: 45%;
    }
`;

export const DivInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;   
    margin-bottom: 15px;
`;

export const Button = styled.button`
    padding: 10px;
    width: 85px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 1px 1px 1px black;
    background-color: #4f2d4b;
    color: #ffffff;
`;

export const TodoItem = styled.div`
    padding: 7.5px;
    margin-top: 10px;
    border: 1px solid black;
    cursor: pointer;
    border: 1px solid black;
    background-color: #0e0036;
    color: #ffffff;
    border-radius: 10px;
    p{
        margin: 0px;
        font-size: 14px;
    }
`;