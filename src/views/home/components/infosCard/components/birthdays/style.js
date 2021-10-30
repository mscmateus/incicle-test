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
    border-bottom: 5px solid;
    border-color: #eaebedff;
    color: orange;
    h1{
        border: 0px;
        margin: 0px;
        margin-left: 5px;
        font-weight: unset;
        font-size: 15px;
        color: #0b5f93;
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