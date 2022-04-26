import React from 'react';
import {
    useEffect,
    useState
} from 'react';

import {
    Container,
    Input,
    Button,
    TodoItem
} from './styles'

const TodoList = () => {

    const [newTask, setNewTask] = useState()
    const [list, setList] = useState([
        "Arrumar quarto",
        "Lavar louça",
        "Molhar as plantas"
    ])

    return (
        <Container>
            <h3>TAREFAS</h3>
            <Input
                type="text"
                placeholder='Nova tarefa'
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
            />
            <Button
                type='button'
                onClick={() => {
                    list.push(newTask)
                    setNewTask('')
                }}>
                Adicionar
            </Button>
            <div>
                {list.map(item =>
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