import React from 'react'
import { Container, Card } from './style'

import Publication from './components/publication'
import NewPublication from './components/newPublication'

export default function TimeLine() {
    return (
        <Container>
            <NewPublication />
            <Publication />
        </Container>
    )
}