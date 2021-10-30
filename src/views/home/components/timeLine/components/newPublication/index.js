import React from 'react'
import { Container, TextArea, PublicationButton, ArticleSection, TextAreaContainer } from './style'
import { GrGallery } from 'react-icons/gr'
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
                        <GrGallery />
                    </PublicationButton>
                    <PublicationButton>
                        <VscDeviceCameraVideo />
                    </PublicationButton>
                </TextAreaContainer>
            </Container>
            <ArticleSection>
                <p>ou <a href={''}>public um artigo</a> na InCicle</p>
            </ArticleSection>
        </>
    )
}