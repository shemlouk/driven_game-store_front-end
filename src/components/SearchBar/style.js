import styled from "styled-components";

export const Container = styled.form`
  width: 400px;
  height: 60px;
  border-top: 1px solid #c7d5e030;
  background: #2a475e30;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  color: #c7d5e0;
  padding-left: 60px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 18px;
  background-color: transparent;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #c7d5e080;
  }
`;

export const Icon = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 17px;
  left: 20px;
  position: absolute;
`;
