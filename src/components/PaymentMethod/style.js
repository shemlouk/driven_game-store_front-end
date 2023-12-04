import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 15px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 50px;
`;

const PayMethod = styled.button`
  width: 271px;
  height: 60px;
  background: ${(props) => (props.color ? "#1A1E26" : "#70E000")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 22px;

  &:focus {
    background: ${(props) => (props.color ? "#70E000" : "#1A1E26")};
    color: black;
  }
`;

const ConfirmButton = styled.button`
  width: 270px;
  height: 50px;
  background: linear-gradient(180deg, #66c0f4 0%, #4192c0 100%);
  border-radius: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export { ConfirmButton, PayMethod, Title };

