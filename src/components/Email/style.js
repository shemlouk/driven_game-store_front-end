import styled from "styled-components";

const Title = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 50px;
`

const EmailBox = styled.div`
    width: 425px;
    height: 273px;
    background: #1A1E26;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 45px;

`
const ConfirmationMsg = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #C7D5E0;
`
const LibraryButton = styled.button`
    width: 191px;
    height: 50px;
    background: linear-gradient(180deg, #66C0F4 0%, #4192C0 100%);
    border-radius: 10px;
    border: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
`

export {
    Title,
    EmailBox,
    ConfirmationMsg,
    LibraryButton
};