import React from 'react'
import { Container, CardHead, Content } from './style'

import {FaBirthdayCake} from 'react-icons/fa'

export default function Birthdays() {
    return (
        <Container>
            <CardHead><FaBirthdayCake/><h1>Aniversariantes</h1></CardHead>
            <Content><p>Nenhum dos seus amigos comemora aniversário hoje</p></Content>
        </Container>
    )
}