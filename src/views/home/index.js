import React from 'react'
import { Container, CardsContainer } from './style'
import InfosCard from './components/infosCard'
import ProfileCard from './components/profileCard'
import TimeLine from './components/timeLine'

export default function Home() {
    return (
        <Container>
            <CardsContainer>
                <ProfileCard/>
                <TimeLine/>
                <InfosCard/>
            </CardsContainer>
        </Container>
    )
}
