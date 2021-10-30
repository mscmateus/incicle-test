import React from 'react'
import { Container, CardsContainer } from './style'
import InfosCard from './components/infosCard'
import ProfileCard from './components/profileCard'
import TimeLineCard from './components/timeLineCard'

export default function Home() {
    return (
        <Container>
            <CardsContainer>
                <ProfileCard/>
                <TimeLineCard/>
                <InfosCard/>
            </CardsContainer>
        </Container>
    )
}
