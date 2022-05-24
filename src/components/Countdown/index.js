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

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    useEffect(() => {
        if (isActive && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
        else {
            new Audio('./notification3.wav').play();
            setIsActive(false);
            setTime(0 * 60);
        }
    }, [isActive, time])

    return (
        <Container>
            <h2>CONTADOR</h2>
            <h1>
                {String(minutes).padStart(2, '0').split('')}
                :
                {String(seconds).padStart(2, '0').split('')}
            </h1>
            <DivButton>
            <Button
                disabled={isActive}
                type='button'
                onClick={() => {
                    setTime(30 * 60)
                    setIsActive(true)
                }}
            >
                Trabalho
            </Button>
            <Button
                disabled={isActive}
                type='button'
                onClick={() => {
                    setTime(10 * 60)
                    setIsActive(true)
                }}
            >
                Descanso
            </Button>
            </DivButton>
        </Container>
    );
}

export default Countdown;