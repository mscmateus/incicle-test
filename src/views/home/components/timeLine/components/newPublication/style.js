import styled from 'styled-components'

export const Container = styled.div`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
    margin: 10px;
    padding: 10px;
    align-items: center;
`
export const TextAreaContainer = styled.div`
    display: flex;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`
export const TextArea = styled.textarea`
    flex-grow: 1;
    border: 0px;
    background-color: unset;
    display: flex;
    padding: 10px;
    resize: none;
    box-shadow: 0 0 0 0;
    outline: 0;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: hidden;
    &::placeholder {
        color: #000;
    }
`
export const PublicationButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
    background-color: unset;
    border-radius: 10px;
    padding: 10px;
    color: '#b8b8b8ff';
    font-size: 20px;
    cursor: pointer;
    &:hover{
        background-color: #58555680;
        color: #fff;
    }
`
export const ArticleSection = styled.div`
    align-items: center;
    margin-top: -20px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: unset;
    border-radius: 10px;
    padding: 5px;
    padding-inline: 20px;
    background-color: #eaebedff;
    p{
        color: #bbb8b7ff;
        font-size: 12px;
    }
    a{
        color: #336d88;
        text-decoration: unset;
        font-weight: bold;
    }
    a:hover{
        text-decoration: underline;
    }
`