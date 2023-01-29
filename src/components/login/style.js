import styled from "styled-components";

export const Login = styled.div`
  position: fixed;
  top: 126px;
  right: 50px;

  width: 333px;
  height: 293px;

  background: rgba(199, 213, 224, 0.05);
  backdrop-filter: blur(35px);
  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 17px;

  z-index: 1;

  box-sizing: border-box;

  input {
    width: 80%;
    height: 56px;

    border: 0;
    border-image-source: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));

    border-color: #ffffff;
    border-radius: 12px;
    padding-left: 24px;

    font-size: 22px;
    font-weight: 400;
    color: #2a475e;
  }
  button {
    width: 50%;
    height: 47px;

    color: #ffffff;
    font-size: 22px;

    border: 0px;
    background: linear-gradient(0deg, #66c0f4, #66c0f4),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    border: 1px solid;

    border-image-source: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    border-radius: 12px;
  }
  P {
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;

    color: #ffffff;
  }
`;

export const SignUp = styled(Login)`
    height: 450px;
`
