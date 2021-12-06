import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    width: 100%;
    height: 10%;
    background-color: #1F2A48;
    border-radius: 10px;
    margin-bottom: 3%;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    border: 0;
    margin-left: 20px;
    background: transparent;
    color: #d9d9d9;
    font-size: 18px;
    font-family: 'Nunito Sans', sans-serif;
    &::placeholder{
        color: #d9d9d9;
    }
`;

export const Button = styled.button`
    width: 15%;
    height: 35px;
    background-color: #0079FE;
    border: 0;
    border-radius: 7px;
    cursor: pointer;
    transition: 0.4s;
    &:hover{
        background-color: #094D98
    }
`;

export const TitleButton = styled.span`
    color: #fff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
`;