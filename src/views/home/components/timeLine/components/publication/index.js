import React from 'react'
import {
    Container,
    AuthorPicture,
    AuthorSection,
    AuthorInfo,
    PubliInfo,
    Content,
    ContentData,
    Interactions,
    Buttons,
    Button,
    Active
} from './style'

import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai'
import { FaRegCommentDots, FaRegShareSquare } from 'react-icons/fa'

const iconsStyle={ fontSize: '14px', marginRight: '5px' }

export default function Publication({content=""}) {
    const [liked, setLiked] = React.useState(false)
    return (
        <Container>
            <AuthorSection>
                <AuthorPicture src={'https://randomuser.me/api/portraits/lego/3.jpg'} />
                <AuthorInfo>
                    <h1><a href={''}>Patricia Santos</a></h1>
                    <PubliInfo><h2 style={{ marginRight: '10px' }}>há cerca de 8 horas</h2><h2>Somente eu</h2></PubliInfo>
                </AuthorInfo>
            </AuthorSection>
            <Content>
                <p>{content}</p>
                <ContentData>
                    {liked ?
                        (<div><p>1 curtida</p></div>)
                        :
                        (<div><p>seja o primeiro a curtir</p></div>)}
                    <Interactions><p style={{ marginRight: '10px' }}>0 comentários</p><p>0 compartilhamentos</p></Interactions>
                </ContentData>
            </Content>
            <Buttons>
                <Button onClick={() => setLiked(liked ? false : true)}>
                    {liked ?
                        (<Active><AiTwotoneLike style={iconsStyle} />Curtir</Active>)
                        :
                        (<><AiOutlineLike style={iconsStyle} />Curtir</>)}
                </Button>
                <Button><FaRegCommentDots style={iconsStyle}/>Comentários</Button>
                <Button><FaRegShareSquare style={iconsStyle}/>Compartilhar</Button>
            </Buttons>
        </Container>
    )
}