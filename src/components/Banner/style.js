import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 660px;
  overflow: hidden;
  position: relative;
  margin-bottom: 40px;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ src }) => `url(${src})`} no-repeat center;
  background-size: cover;
  transition: 0.5s;
  :hover {
    transform: scale(1.1);
    filter: contrast(110%);
  }
  ::after {
    width: 100%;
    height: 100%;
    content: " ";
    position: absolute;
    background: linear-gradient(to top, #000000 0%, transparent 50%);
  }
`;
