import React from 'react'
import { Container, TextArea, PublicationButton, ArticleSection, TextAreaContainer } from './style'
import { IoImagesOutline } from 'react-icons/io5'
import { VscDeviceCameraVideo } from 'react-icons/vsc'
import { BsCardText } from 'react-icons/bs'

export default function NewPublication() {
    return (
        <>
            <Container>
                <TextAreaContainer>
                    <BsCardText />
                    <TextArea rows={1} draggable={false} placeholder={'Escreva uma publicação...'} />
                    <PublicationButton>
                        <IoImagesOutline />
                    </PublicationButton>
                    <PublicationButton>
                        <VscDeviceCameraVideo />
                    </PublicationButton>
                </TextAreaContainer>
            </Container>
            <ArticleSection>
                <p>ou <a href={''}>publique um artigo</a> na InCicle</p>
            </ArticleSection>
        </>
    )
}