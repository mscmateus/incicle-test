import React from 'react'
import { Container,
    AuthorPicture,
    AuthorSection,
    AuthorInfo,
    PubliInfo,
    Content,
    ContentData,
    Interactions,
    Buttons,
    Button
 } from './style'

export default function Home() {
    return (
        <Container>
            <AuthorSection>
                <AuthorPicture src={'https://randomuser.me/api/portraits/lego/3.jpg'} />
                <AuthorInfo>
                    <h1><a href={''}>Patricia Santos</a></h1>
                    <PubliInfo><h2 style={{marginRight:'10px'}}>há cerca de 8 horas</h2><h2>Somente eu</h2></PubliInfo>
                </AuthorInfo>
            </AuthorSection>
            <Content>
                <p>Essa publicação está configurada no modo privado "somente eu"</p>
                <ContentData>
                    <div><p>seja o primeiro a curtir</p></div>
                    <Interactions><p style={{marginRight: '10px'}}>0 comentários</p><p>0 compartilhamentos</p></Interactions>
                </ContentData>
            </Content>
            <Buttons>
                <Button>Curtir</Button>
                <Button>Comentários</Button>
                <Button>Compartilhar</Button>
            </Buttons>
        </Container>
    )
}