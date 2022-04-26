import React from 'react';

import Countdown from '../../components/Countdown';
import TodoList from '../../components/TodoList';

import {
    Container,
    ContainerCounter,
    ContainerTodo
} from './styles'

const Home = () => {
    return (
        <Container>
            <ContainerCounter>
                <Countdown />
            </ContainerCounter>
            <ContainerTodo>
                <TodoList />
            </ContainerTodo>
        </Container>
    );
}

export default Home;