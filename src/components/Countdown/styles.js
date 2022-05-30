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
        margin-top: 0px;
        font-size: 46px;
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
    width: 100px;
    cursor: pointer;
    box-shadow: 1px 1px 1px black;
    background-color: ${props => props.showColor ? "darkred" : "#1C1C1C"};
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