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
    padding: 20px 10px 20px 10px;
    margin: 5px;
    border-radius: 10px;
    width: 30%;
    cursor: pointer;
    box-shadow: 1px 1px 1px black;
    background-color: ${props => props.showColor ? "darkred" : "#1C1C1C"};
    color: #ffffff;
    @media(max-width: 1000px){
    padding: 10px 0px 10px 0px;
    }
`;

export const DivButton = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const ButtonAdd = styled.button`
    width: 35px;
    height: 35px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 1px 1px 1px black;
    background-color: #1C1C1C;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DivTaskHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    width: 100%;
    h2{
        margin-bottom: 0px;
    }
`;

export const Input = styled.input`
    padding: 10px;
    width: 95%;
    border-radius: 10px;
    outline: none;
    border: 1px solid #000000;
    background-color: #ffffff;
    margin-bottom: 10px;
`;

export const InputTitle = styled.h4`
    color: #ffffff;
    margin-bottom: 5px;
    font-weight: normal;
`;

export const ButtonAddModal = styled.button`
    padding: 15px 0px 15px 0px;
    margin: 5px;
    border-radius: 10px;
    width: 80px;
    cursor: pointer;
    box-shadow: 1px 1px 1px black;
    background-color: ${props => props.showColor ? "darkred" : "#1C1C1C"};
    color: #ffffff;
    @media(max-width: 1000px){
    padding: 10px 0px 10px 0px;
    }
`;

export const DivModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;