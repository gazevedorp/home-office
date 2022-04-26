import React from 'react';
import {
    useEffect,
    useState
} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../../store/actions/todoActions';

import {
    Container,
    Input,
    Button,
    TodoItem,
    DivInput
} from './styles'

const TodoList = () => {

    const [newTask, setNewTask] = useState()
    const [list, setList] = useState([])
    const listRedux = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const setListRedux = (value) => {
        if (value !== "") {
            dispatch(addTodo(value))
        }
        else {
            alert("Digite o nome da tarefa!")
        }
    }

    const removeListRedux = (value) => {
        dispatch(removeTodo(value))
    }

    return (
        <Container>
            <h2>TAREFAS</h2>
            <DivInput>
                <Input
                    type="text"
                    placeholder='Nova tarefa'
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                />
                <Button
                    type='button'
                    onClick={() => {
                        setListRedux(newTask)
                        setNewTask('')
                    }}>
                    Adicionar
                </Button>
            </DivInput>
            <div>
                {listRedux.map((item, index) =>
                    <TodoItem
                        onClick={() => {
                            removeListRedux(item)
                        }}
                    >
                        <p key={item}>{index + 1}. {item}</p>
                    </TodoItem>
                )}
            </div>
        </Container>
    );
}

export default TodoList;