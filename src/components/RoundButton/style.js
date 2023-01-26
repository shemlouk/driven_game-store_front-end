import styled from "styled-components";

export const Container = styled.button`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 30px;
  background-color: ${({ color }) => color};
  box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;
  transition: filter 0.3s;
  :hover {
    filter: brightness(1.1);
  }
`;

export const Notification = styled.div`
  height: 22px;
  min-width: 22px;
  padding: 0px 7px;
  border-radius: 50px;
  background-color: #ef233c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12;
  font-weight: 700;
  position: absolute;
  top: 0px;
  right: 0px;
`;
