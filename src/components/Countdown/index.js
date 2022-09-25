import React from 'react';
import {
    useEffect,
    useState
} from 'react';
import Modal from 'react-modal';
import { FiSettings } from 'react-icons/fi';

import {
    Container,
    Button,
    DivButton,
    ButtonAdd,
    DivTaskHeader,
    Input,
    InputTitle,
    ButtonAddModal
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

const Countdown = () => {

    const [time, setTime] = useState(0 * 60);
    const [isActive, setIsActive] = useState(false);
    const [countdownOn, setCountdownOn] = useState(false);
    const [type, setType] = useState("");
    const [audioOn, setAudioOn] = useState(true);
    const [modalIsOpen, setIsOpen] = useState(false)
    const [timeWork, setTimeWork] = useState(30);
    const [timeRest, setTimeRest] = useState(5);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    useEffect(() => {
        if (isActive && time > 0) {
            setAudioOn(true)
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
        else {
            if (audioOn) {
                new Audio('./notification3.wav').play();
            }
            setIsActive(false);
            setTime(0 * 60);
        }
    }, [isActive, time])

    useEffect(() => {
        if (countdownOn) {
            if (!isActive) {
                console.log(type)
                if (type === "work") {
                    setType("rest")
                    WorkCounter()
                }
                else {
                    setType("work")
                    RestCounter()
                }
            }
        }
    }, [countdownOn, isActive])

    const WorkCounter = () => {
        if (!countdownOn) {
            setType("work")
        }
        setTime(timeWork * 60)
        setIsActive(true)
    }

    const RestCounter = () => {
        if (!countdownOn) {
            setType("rest")
        }
        setTime(timeRest * 60)
        setIsActive(true)
    }

    return (
        <>
            <Container>
                <DivTaskHeader>
                    <h2>{countdownOn ? (type === "work" ? "DESCANSO" : "TRABALHO") : type !== "" && isActive ? (type === "work" ? "TRABALHO" : "DESCANSO") : "TEMPORIZADOR"}</h2>
                    <ButtonAdd
                        type='button'
                        onClick={() => setIsOpen(true)}>
                        <FiSettings />
                    </ButtonAdd>
                </DivTaskHeader>
                <h1>
                    {String(minutes).padStart(2, '0').split('')}
                    :
                    {String(seconds).padStart(2, '0').split('')}
                </h1>
                <DivButton>
                    <Button
                        showColor={!countdownOn && isActive && type === "work"}
                        disabled={countdownOn}
                        onClick={() => {
                            if (isActive) {
                                setType("")
                                setAudioOn(false)
                                setIsActive(false)
                            }
                            else {
                                WorkCounter()
                            }
                        }}
                    >
                        {!countdownOn && isActive && type === "work" ? "Finalizar" : "Trabalho"}
                    </Button>
                    <Button
                        showColor={!countdownOn && isActive && type === "rest"}
                        disabled={countdownOn}
                        onClick={() => {
                            if (isActive) {
                                setType("")
                                setAudioOn(false)
                                setIsActive(false)
                            }
                            else {
                                RestCounter()
                            }
                        }}
                    >
                        {!countdownOn && isActive && type === "rest" ? "Finalizar" : "Descanso"}
                    </Button>
                    <Button
                        showColor={countdownOn}
                        onClick={() => {
                            if (!countdownOn) {
                                setType("work")
                                setCountdownOn(true)
                            }
                            else {
                                setType("")
                                setCountdownOn(false)
                                setAudioOn(false)
                                setIsActive(false);
                            }
                        }}
                    >
                        {countdownOn && isActive ? "Finalizar Ciclo" : "Iniciar Ciclo"}
                    </Button>
                </DivButton>
            </Container >
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                overlayClassName={customStyles.overlay}
            >
                <InputTitle><b>Tempo de trabalho</b> (minutos)</InputTitle>
                <Input
                    type="number"
                    placeholder='Tempo de trabalho (minutos)'
                    value={timeWork}
                    onChange={e => setTimeWork(e.target.value)}
                />
                <InputTitle><b>Tempo de descanso</b> (minutos)</InputTitle>
                <Input
                    type="number"
                    placeholder='Tempo de descanso (minutos)'
                    value={timeRest}
                    onChange={e => setTimeRest(e.target.value)}
                />
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <ButtonAddModal
                        onClick={() => setIsOpen(false)}
                    >
                        Alterar
                    </ButtonAddModal>
                </div>
            </Modal>
        </>
    );
}

export default Countdown;