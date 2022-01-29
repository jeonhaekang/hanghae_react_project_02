import styled, { keyframes } from "styled-components";

export const Wrap = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #e0f1e3;
    padding: 0 50px;
`;

export const Navi = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: white;
    border-bottom: 2px solid #02343F;
`;
export const Title = styled.h1`
    color: #02343F;
`;

export const ContentWrap = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    flex-wrap: wrap;
    
`;

export const Card = styled.div`
    width: calc((100% - (20px * 2)) / 3);
    border: 2px solid #02343F;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;
    background-color: ${(props) => props.check === true ? '#F0EDCC' : 'white'};
    position: relative;
`;

export const Kanji = styled.h1`
    margin:3px 0;
    color: #003B73;
`;

export const Hiragana = styled.p`
    margin: 3px 0;
    color: #0074B7;
`;

export const EditWrap = styled.div`
    width:300px;
    height: 500px;
    background-color: white;
    border: 1px solid #02343F;
    border-radius: 15px;
    margin-top:30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const rotate_animation = keyframes`
    100%{
        transform: rotate(-90deg);
    }
`;

export const EditButton = styled.a`
    width:50px;
    height: 50px;
    font-size: 35px;
    font-weight: bold;
    background-color: #02343F;
    border-radius: 50px;
    color: white;
    position: fixed;
    bottom:30px;
    left: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        animation: ${rotate_animation} 0.2s linear alternate;
    }
`;

export const OptionDiv = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
`;

