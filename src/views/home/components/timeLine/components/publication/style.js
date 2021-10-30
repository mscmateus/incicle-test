import styled from 'styled-components'

export const Container = styled.div`
    margin: 10px;
    padding:10px;
    background-color: #fff;
    border-radius: 10px;
    flex-grow: 1;
`
export const AuthorSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    h1{
        padding: 0px;
        font-size: 15px;
        margin: 0px;
        a{
            color: #0b5f93;
            text-decoration: unset;
            font-weight: bold;
        }
        a:hover{
            text-decoration: underline;
        }
    }
    h2{
        font-size: 10px;
        margin: 0px;
        padding: 0px;
        color: #585556;
    }
`
export const AuthorPicture = styled.img`
    width: 30px;
    height: 30px;
    border: 2px solid #084665ff;
    border-radius: 30px;
    margin-right: 10px;
`
export const AuthorInfo = styled.div``
export const PubliInfo = styled.div`
    display: flex;
`
export const Content = styled.div`
    p{
        font-size: 13px;
        color: #585556; 
    }
`
export const ContentData = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    p{
        font-size: 10px;
        color: #585556;
        font-weight: bold;
    }
`
export const Interactions = styled.div`
    display: flex;
    flex-direction: row;
`
export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: #eaebedff;
    margin-block: 5px;
`
export const Button = styled.button`
    flex-grow: 1;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
    border-radius: 20px;
    padding: 5px;
    background-color: #eaebedff;
    font-size: 12px;
    cursor: pointer;
    &:hover{
        background-color: #58555680;
    }
`

export const Active = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    font-size: 12px;
    font-weight: bold;
    color: #0b5f93;
`