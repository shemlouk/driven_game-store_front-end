import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 100px;
  padding: 0px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, #1b2838, transparent);
  border-bottom: 1px solid #c7d5e020;
  position: fixed;
  top: 0px;
  left: 0px;
`;

export const LogoFont = styled.span`
  font-family: "Press Start 2P", sans-serif !important;
  font-size: 35px;
  background-color: ${({ color }) => (color ? color : "white")};
  color: transparent;
  text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.15);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  user-select: none;
`;
