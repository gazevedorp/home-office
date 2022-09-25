import React from 'react';
import {
    //useEffect,
    useState
} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo, alterTodo, removeTodo } from '../../store/actions/todoActions';
import Modal from 'react-modal';
import { format } from 'date-fns';
import { IoMdAdd } from 'react-icons/io';

import {
    Container,
    Input,
    ButtonAdd,
    TodoItem,
    DivButtons,
    ButtonColor,
    DivTaskHeader,
    DivModalContent,
    InputArea,
    ButtonAddModal,
    TextNoItems
} from './styles'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#273746',
        border: '0px',
        borderRadius: '10px',
        width: '300px',
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
}

const TodoList = () => {

    const [newTask, setNewTask] = useState()
    const [priority, setPriority] = useState(1)
    const [modalIsOpen, setIsOpen] = useState(false)
    const [taskName, setTaskName] = useState("")
    const [taskCompany, setTaskCompany] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskId, setTaskId] = useState("")
    const [taskClosed, setTaskClosed] = useState()
    const [taskEstimatedTime, setTaskEstimatedTime] = useState("")
    const uuid = Math.floor(Date.now() * Math.random()).toString(36);

    const listRedux = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const setListRedux = () => {
        if (taskName !== "" && taskCompany !== "" && taskDate !== "" && taskDescription !== "" && priority !== "" && taskEstimatedTime !== "") {
            dispatch(addTodo({ id: uuid, name: taskName, company: taskCompany, date: taskDate, description: taskDescription, priority: priority, closed: false, estimatedTime: taskEstimatedTime }))
            setTaskName("")
            setTaskId("")
            setTaskCompany("")
            setTaskDate("")
            setTaskDescription("")
            setPriority(1)
            setTaskClosed()
            setIsOpen(false)
            setTaskEstimatedTime("")
        }
        else {
            alert("Digite todas as informações!")
        }
    }

    const removeListRedux = (id) => {
        if (window.confirm("Deseja realmente excluir esta tarefa?")) {
            dispatch(removeTodo(id))
            setTaskName("")
            setTaskId("")
            setTaskCompany("")
            setTaskDate("")
            setTaskDescription("")
            setPriority(1)
            setTaskClosed()
            setIsOpen(false)
            setTaskEstimatedTime("")
        }
    }

    return (
        <>
            <Container>
                <DivTaskHeader>
                    <h2>LISTA DE TAREFAS</h2>
                    <ButtonAdd
                        type='button'
                        onClick={() => setIsOpen(true)}>
                        <IoMdAdd />
                    </ButtonAdd>
                </DivTaskHeader>
                <div>
                    {listRedux
                        .sort((a, b) => new Date(a.date) - new Date(b.date))
                        .sort((a, b) => b.priority - a.priority)
                        .sort((a, b) => a.closed - b.closed)
                        .map((item, index) =>
                            <TodoItem
                                key={item.id}
                                closed={item.closed}
                                priority={item.priority}
                                onClick={() => {
                                    console.log(item)
                                    setTaskName(item.name)
                                    setTaskId(item.id)
                                    setTaskCompany(item.company)
                                    setTaskDate(item.date)
                                    setPriority(item.priority)
                                    setTaskDescription(item.description)
                                    setIsOpen(true)
                                    setTaskClosed(item.closed)
                                    setTaskEstimatedTime(item.estimatedTime)
                                }}
                            >
                                <p>{item.name}</p>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <p style={{ marginRight: 5 }}>{format(new Date(item.date), "dd/MM HH:mm")}</p>
                                    <p>[{item.estimatedTime}h]</p>
                                </div>
                            </TodoItem>
                        )}
                    {listRedux.length === 0 ?
                        <TextNoItems>Nenhuma tarefa cadastrada</TextNoItems>
                        : null
                    }
                </div>
            </Container>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                overlayClassName={customStyles.overlay}
            >
                <DivModalContent>
                    <h2>NOVA TAREFA</h2>
                    <Input
                        type="text"
                        placeholder='Nome'
                        value={taskName}
                        onChange={e => setTaskName(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder='Empresa/Projeto'
                        value={taskCompany}
                        onChange={e => setTaskCompany(e.target.value)}
                    />
                    <Input
                        type="datetime-local"
                        placeholder='Data'
                        value={taskDate}
                        onChange={e => setTaskDate(e.target.value)}
                    />
                    <Input
                        type="number"
                        placeholder='Tempo estimado'
                        value={taskEstimatedTime}
                        onChange={e => setTaskEstimatedTime(e.target.value)}
                    />
                    <InputArea
                        numberOfLines={3}
                        type="text"
                        placeholder='Descrição'
                        value={taskDescription}
                        onChange={e => setTaskDescription(e.target.value)}
                    />
                    <p>Prioridade</p>
                    <DivButtons>
                        <ButtonColor
                            type='button'
                            color="darkblue"
                            selected={priority === 1}
                            onClick={() => setPriority(1)}
                        >1</ButtonColor>
                        <ButtonColor
                            type='button'
                            color="darkgreen"
                            selected={priority === 2}
                            onClick={() => setPriority(2)}
                        >2</ButtonColor>
                        <ButtonColor
                            type='button'
                            color="#ffd700"
                            selected={priority === 3}
                            onClick={() => setPriority(3)}
                        >3</ButtonColor>
                        <ButtonColor
                            type='button'
                            color="darkorange"
                            selected={priority === 4}
                            onClick={() => setPriority(4)}
                        >4</ButtonColor>
                        <ButtonColor
                            type='button'
                            color="darkred"
                            selected={priority === 5}
                            onClick={() => setPriority(5)}
                        >5</ButtonColor>
                    </DivButtons>
                    <DivButtons>
                        <ButtonAddModal
                            disabled={!taskId}
                            onClick={() => {
                                dispatch(removeListRedux(taskId))
                                setIsOpen(false)
                                setTaskName("")
                                setTaskId("")
                                setTaskCompany("")
                                setTaskDate("")
                                setTaskDescription("")
                                setPriority(1)
                                setTaskClosed()
                                setIsOpen(false)
                                setTaskEstimatedTime("")
                            }}
                        >
                            Excluir
                        </ButtonAddModal>
                        <ButtonAddModal
                            type='button'
                            disabled={taskClosed}
                            onClick={e => {
                                if (taskId) {
                                    dispatch(alterTodo({ id: taskId, name: taskName, company: taskCompany, date: taskDate, description: taskDescription, priority: priority, closed: false, estimatedTime: taskEstimatedTime }))
                                    setTaskName("")
                                    setTaskId("")
                                    setTaskCompany("")
                                    setTaskDate("")
                                    setTaskDescription("")
                                    setPriority(1)
                                    setTaskClosed()
                                    setIsOpen(false)
                                    setTaskEstimatedTime("")
                                }
                                else {
                                    setListRedux()
                                }
                            }}>
                            {taskId ? "Alterar" : "Adicionar"}
                        </ButtonAddModal>
                        <ButtonAddModal
                            disabled={!taskId}
                            onClick={() => {
                                if (taskClosed) {
                                    dispatch(alterTodo({ id: taskId, name: taskName, company: taskCompany, date: taskDate, description: taskDescription, priority: priority, closed: false, estimatedTime: taskEstimatedTime }))
                                }
                                else {
                                    dispatch(alterTodo({ id: taskId, name: taskName, company: taskCompany, date: taskDate, description: taskDescription, priority: priority, closed: true, estimatedTime: taskEstimatedTime }))
                                }
                                setTaskName("")
                                setTaskId("")
                                setTaskCompany("")
                                setTaskDate("")
                                setTaskDescription("")
                                setPriority(1)
                                setTaskClosed()
                                setIsOpen(false)
                                setTaskEstimatedTime("")
                            }}
                        >
                            {taskClosed ? "Reabrir" : "Finalizar"}
                        </ButtonAddModal>
                    </DivButtons>
                </DivModalContent>
            </Modal>
        </>
    );
}

export default TodoList;