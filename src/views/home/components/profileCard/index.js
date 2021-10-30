import React from 'react'
import { Container, Section, Ocupation, BackGroundPicture, ProfilePicture, ProfilePictureContainer, Identification, UserInfos } from './style'
import { TiLocationOutline } from "react-icons/ti";
import { FaUniversity } from "react-icons/fa";
import { MdCorporateFare } from "react-icons/md";

export default function ProfileCard() {
    return (
        <Container>
            <BackGroundPicture src={'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} />
            <ProfilePictureContainer>
                <ProfilePicture src={'https://randomuser.me/api/portraits/lego/0.jpg'} />
            </ProfilePictureContainer>
            <Section>
                <Identification>
                    <h1>Kenedy Morais</h1>
                    <a href={''}><h2>@kenedymorais</h2></a>
                    <h3>Front-end Developer</h3>
                </Identification>
                <UserInfos>
                    <p><TiLocationOutline style={{color: '#87c3e1ff', marginRight: 5}}/>Rio Branco/Acre - Brasil</p>
                    <Ocupation>
                        <p><MdCorporateFare style={{marginRight: 5}}/>InCicle</p>
                        <p style={{marginLeft:'40px'}}><FaUniversity style={{ marginRight: 5}}/>Uninorte</p>
                    </Ocupation>
                </UserInfos>
            </Section>
        </Container>
    )
}
