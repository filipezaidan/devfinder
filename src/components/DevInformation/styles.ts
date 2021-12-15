import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 75%;
    background-color: #1F2A48;
    border-radius: 10px;
    padding: 6%;
    flex-direction: row;
    justify-content: space-between;
`;


export const ImageContainer = styled.div`
    /* background: red; */
    width: 25%;
    height: 100%;
    padding: 2%;
`;

export const ProfileContainer = styled.div`
    /* background: green; */
    width: 70%;
    height: 100%;
    padding: 2%;
`;

export const ImageProfile = styled.img`
display: inline-block;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #FFF;
    object-fit: cover;
`;

export const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    height: 15%;
    flex-direction: row;
    justify-content: space-between;
    /* background-color: #FFF; */
`;

export const Name = styled.p`
    font-size: 22px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bold;
    color: #FFF;
`;

export const CreateAccount= styled.p`
    font-size: 14px;
    color: #d9d9d9
`;