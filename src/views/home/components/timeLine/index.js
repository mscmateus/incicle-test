import React from 'react'
import { Container, Card } from './style'

import Publication from './components/publication'
import NewPublication from './components/newPublication'

export default function TimeLine() {
    return (
        <Container>
            <NewPublication />
            <Publication 
                content='Essa publicação está configurada no modo privado "somente eu".'
                privateStatus = {true}
                timeStatus = "Há cerca de 8 horas"
            />
            <Publication 
                content="ikikikiki"
                privateStatus = {false}
                timeStatus = "há 8 dias"
            />
        </Container>
    )
}