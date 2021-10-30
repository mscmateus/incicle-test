import styled from 'styled-components'

export const Container = styled.div`
    margin: 10px;
    background-color: #fff;
    border-radius: 10px;
`
export const CardHead = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    color: purple;
    h1{
        border: 0px;
        margin: 0px;
        margin-left: 5px;
        font-weight: unset;
        font-size: 15px;
        color: #0b5f93;
    }
`
export const DateSection = styled.div`
    display: flex;
    padding-inline: 10px;
    justify-content: flex-start;
    align-items: center;
    background-color: #eaebedff;
    p{
        margin: 0px;
        padding: 0px;
        font-size: 12px;
        text-align: center;
        font-weight: bold;
        color: #585556ff;
    }
`
export const Content = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
    align-items: center;
    p{
        margin: 0px;
        padding: 0px;
        font-size: 12px;
        text-align: center;
        color: #585556;
    }
`