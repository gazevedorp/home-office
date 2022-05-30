import React from 'react';
import {
    useEffect,
    useState
} from 'react';

import {
    Container,
    Button,
    DivButton
} from './styles'

const Countdown = () => {

    const [time, setTime] = useState(0 * 60);
    const [isActive, setIsActive] = useState(false);
    const [countdownOn, setCountdownOn] = useState(false);
    const [type, setType] = useState("");
    const [audioOn, setAudioOn] = useState(true);

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
                if (type === "work") {
                    WorkCounter()
                    setType("rest")
                }
                else {
                    RestCounter()
                    setType("work")
                }
            }
        }
    }, [countdownOn, isActive])

    const WorkCounter = () => {
        if (!countdownOn) {
            setType("work")
        }
        setTime(0.2 * 60)
        setIsActive(true)
    }

    const RestCounter = () => {
        if (!countdownOn) {
            setType("rest")
        }
        setTime(0.1 * 60)
        setIsActive(true)
    }

    return (
        <Container>
            <h2>{countdownOn ? (type === "work" ? "DESCANSO" : "TRABALHO") : type !== "" ? (type === "work" ? "TRABALHO" : "DESCANSO") : "CONTADOR"}</h2>
            <h1>
                {String(minutes).padStart(2, '0').split('')}
                :
                {String(seconds).padStart(2, '0').split('')}
            </h1>
            <DivButton>
                <Button
                    showColor={!countdownOn && type === "work"}
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
                    {!countdownOn && type === "work" ? "Pausar" : "Trabalho"}
                </Button>
                <Button
                    showColor={!countdownOn && type === "rest"}
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
                    {!countdownOn && type === "rest" ? "Pausar" : "Descanso"}
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
                    {countdownOn ? "Pausar Ciclo" : "Iniciar Ciclo"}
                </Button>
            </DivButton>
        </Container >
    );
}

export default Countdown;