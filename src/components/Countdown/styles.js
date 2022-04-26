import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p, h1, h2{
        color: #ffffff;
    }
    h1{
        text-align: center;
    }
    h2{
        text-align: center;
        margin-top: 0px;
        padding-top: 0px;
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
    width: 75%;
    flex-direction: row;
    justify-content: space-between;
    @media(max-width: 450px){
        width: 100%;
    }
`;