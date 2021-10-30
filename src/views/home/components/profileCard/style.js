import styled from 'styled-components'

export const Container = styled.div`
    margin: 10px;
    background-color: #fff;
    border-radius: 10px;
    color: #585556ff;
`
export const Identification = styled.div`
    text-align: center;
    h1{
        font-size: 18px;
        margin: 0px;
        color: #097e9cff;
    }
    h2{
        font-size: 14px;
        margin: 0px;
    }
    h3{
        font-size: 12px;
        margin: 0px;
        font-weight: unset;
    }
    a{
        color: #585556ff;
        text-decoration: unset;
    }
    a:hover{
        text-decoration: underline;
    }
`
export const UserInfos = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    p{
        display: flex;
        align-items: center;
    }
`
export const Ocupation = styled.div`
    display: flex;
    flex-direction: row;
`
export const Section = styled.div`
    padding: 10px;
`
export const BackGroundPicture = styled.img`
    width: 250px;
    height: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const ProfilePictureContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const ProfilePicture = styled.img`
    width: 100px;
    height: 100px;
    margin-top: -52px;
    border-radius: 52px;
    border: 5px solid #084665ff;
`