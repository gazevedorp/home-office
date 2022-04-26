import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    h3{
        color: #ffffff;
    }
`;


export const Input = styled.input`
    padding: 10px;
    width: 200px;
    border-radius: 10px;
`;

export const DivInput = styled.div`
    width: 350px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Button = styled.button`
    padding: 10px;
    border-radius: 10px;
`;

export const TodoItem = styled.div`
    padding: 7.5px;
    margin-top: 10px;
    border: 1px solid black;
    cursor: pointer;
    background-color: #ffffff;
    border-radius: 10px;
    p{
        margin: 0px;
        font-size: 14px;
    }
`;