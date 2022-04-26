import React from 'react';
import {
    useEffect,
    useState
} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../store/actions/todoActions';

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
        else{
            alert("Digite o nome da tarefa!")
        }
    }

    return (
        <Container>
            <h3>TAREFAS</h3>
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
                {listRedux.map(item =>
                    <TodoItem
                        onClick={() => {
                            const temp = list.filter(listItem => listItem !== item)
                            setList(temp)
                        }}
                    >
                        <p key={item}>{item}</p>
                    </TodoItem>
                )}
            </div>
        </Container>
    );
}

export default TodoList;