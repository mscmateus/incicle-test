import React from 'react'
import { Container, BackGroundPicture, ProfilePicture } from './style'

export default function Home() {
    return (
        <Container>
            <div>
                <BackGroundPicture src={'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
                <ProfilePicture src={'https://randomuser.me/api/portraits/lego/0.jpg'}/>
            </div>
        </Container>
    )
}
