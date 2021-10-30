import React from 'react'
import { Container } from './style'

import Birthdays from './components/birthdays'
import Pendencies from './components/pendencies'

export default function Home() {
    return (
        <Container>
            <Birthdays/>
            <Pendencies/>
        </Container>
    )
}
