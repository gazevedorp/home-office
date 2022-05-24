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
    DivInput,
    ButtonColor
} from './styles'

const TodoList = () => {

    const [newTask, setNewTask] = useState()
    const [priority, setPriority] = useState(1)
    const listRedux = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const setListRedux = (value) => {
        if (value !== "") {
            dispatch(addTodo({ name: value, priority: priority }))
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
                <ButtonColor
                    type='button'
                    color="white"
                    selected={priority === 1}
                    onClick={() => setPriority(1)}
                />
                <ButtonColor
                    type='button'
                    color="darkorange"
                    selected={priority === 2}
                    onClick={() => setPriority(2)}
                />
                <ButtonColor
                    type='button'
                    color="darkred"
                    selected={priority === 3}
                    onClick={() => setPriority(3)}
                />
                <Button
                    type='button'
                    onClick={() => {
                        setListRedux(newTask)
                        setNewTask('')
                    }}>
                    +
                </Button>
            </DivInput>
            <div>
                {listRedux.sort((a, b) => b.priority - a.priority).map((item, index) =>
                    <TodoItem
                        priority={item.priority}
                        onClick={() => {
                            removeListRedux(item)
                        }}
                    >
                        <p key={item.name}>{item.name}</p>
                    </TodoItem>
                )}
            </div>
        </Container>
    );
}

export default TodoList;