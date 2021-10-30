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
import { ImAlarm } from 'react-icons/im'
import { GoGlobe } from 'react-icons/go'
import { FaLock } from 'react-icons/fa'

const ActionIconsStyle = { fontSize: '14px', marginRight: '5px' }
const InfoIconsStyle = { marginRight: '3px' }

export default function Publication({ content = "", privateStatus = true, timeStatus = "" }) {
    const [liked, setLiked] = React.useState(false)
    return (
        <Container>
            <AuthorSection>
                <AuthorPicture src={'https://randomuser.me/api/portraits/lego/3.jpg'} />
                <AuthorInfo>
                    <h1><a href={''}>Patricia Santos</a></h1>
                    <PubliInfo>
                        <h2 style={{ marginRight: '10px' }}><ImAlarm style={InfoIconsStyle}/>{"  " + timeStatus}</h2>
                        {privateStatus ? (<h2><FaLock style={InfoIconsStyle}/>{" Somente eu"}</h2>) : (<h2><GoGlobe style={InfoIconsStyle}/>{" Público"}</h2>)}
                    </PubliInfo>
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
                        (<Active><AiTwotoneLike style={ActionIconsStyle} />Curtir</Active>)
                        :
                        (<><AiOutlineLike style={ActionIconsStyle} />Curtir</>)}
                </Button>
                <Button><FaRegCommentDots style={ActionIconsStyle} />Comentários</Button>
                <Button><FaRegShareSquare style={ActionIconsStyle} />Compartilhar</Button>
            </Buttons>
        </Container>
    )
}