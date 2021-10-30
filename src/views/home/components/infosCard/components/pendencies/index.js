import React from 'react'
import { Container, CardHead, Content, DateSection } from './style'

import {RiAlarmWarningFill} from 'react-icons/ri'

export default function Pendencies() {
    const date = new Date()
    const weekday = date.toLocaleString('default', { weekday: 'short' })
    const month = date.toLocaleString('default', { month: 'short' })
    return (
        <Container>
            <CardHead><RiAlarmWarningFill/><h1>Pendências</h1></CardHead>
            <DateSection>
                <p>
                    {weekday[0].toUpperCase() + weekday.substr(1) +", "+ date.getDay() +" de "+ month[0].toUpperCase() + month.substr(1)}
                </p>
            </DateSection>
            <Content><p>Você não possui nenhuma pendência para hoje</p></Content>
        </Container>
    )
}