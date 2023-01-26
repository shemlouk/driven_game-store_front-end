import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 100px;
  padding: 0px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, #1b2838, transparent);
  top: 0px;
  left: 0px;
  position: fixed;
  border-bottom: 1px solid #c7d5e020;
`;

export const LogoFont = styled.span`
  font-size: 35px;
  color: transparent;
  font-family: "Press Start 2P", sans-serif !important;
  background-color: ${({ bColor }) => (bColor ? bColor : "white")};
  user-select: none;
  background-clip: text;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.15);
`;

export const ButtonsContainer = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
`;
