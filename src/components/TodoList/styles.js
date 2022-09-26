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
    width: 90%;
    border-radius: 10px;
    outline: none;
    border: 1px solid #000000;
    background-color: #ffffff;
    margin-bottom: 10px;
`;

export const InputArea = styled.textarea`
    padding: 10px;
    width: 90%;
    border-radius: 10px;
    outline: none;
    border: 1px solid #000000;
    background-color: #ffffff;
    margin-bottom: 10px;
    height: 80px;
`;

export const DivInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;   
    width: 500px;
`;

export const ButtonColor = styled.button`
    width: ${props => props.selected ? 45 : 35}px;
    height: ${props => props.selected ? 45 : 35}px;
    margin-right: 5px;
    border-radius: 30px;
    border: 1px solid ${props => props.color}; 
    cursor: pointer;
    background-color: ${props => props.color};
    font-weight: bold;
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

export const TodoItem = styled.div`
    padding: 7.5px;
    margin-top: 10px;
    border: 1px solid black;
    cursor: pointer;
    border: 1px solid black;
    background-color: ${props => props.closed ? "gray" : "#1C1C1C"};
    color: #ffffff;
    border-radius: 10px;
    border-right: 10px solid ${props =>
        props.closed ? "#1C1C1C" :
            props.priority === 1 ? "darkblue" :
                props.priority === 2 ? "darkgreen" :
                    props.priority === 3 ? "#ffd700" :
                        props.priority === 4 ? "darkorange" :
                            "darkred"};
            
            };
    p{
        margin: 0px;
        font-size: 14px;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
        text-decoration: ${props => props.closed ? "line-through" : "none"};
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const DivTaskHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    h2 {
        margin: 0px;
    }
`;

export const DivButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
`;

export const DivModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        margin: 0px;
        margin-bottom: 15px;
        color: #ffffff;
    }
    p{
        margin: 0px;
        margin-top: 10px;
        margin-bottom: 5px;
        font-weight: bold;
        color: #ffffff;
    }
`;

export const TextNoItems = styled.p`
    text-align: center;
    color: gray;
    margin-top: 60px;
    `;

