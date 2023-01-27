import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: white;
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
    background: linear-gradient(to top, #000000 0%, transparent 70%);
  }
`;

export const Title = styled.h2`
  font-size: 50px;
  font-weight: 700;
  position: absolute;
  left: 70px;
  bottom: 180px;
  pointer-events: none;
`;

export const Price = styled.div`
  width: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 70px;
  bottom: 90px;
  background: #c7d5e010;
  font-size: 25px;
  font-weight: 500;
  border-top: 1px solid #c7d5e050;
  border-radius: 50px;
  backdrop-filter: blur(4px);
  pointer-events: none;
`;

export const Button = styled.button`
  width: 100px;
  height: 60px;
  border: none;
  border-radius: 50px;
  position: absolute;
  left: 300px;
  bottom: 90px;
  font-size: 25px;
  font-weight: 600;
  color: white;
  background: linear-gradient(to bottom, #66c0f4, #347faa);
  transition: 0.3s;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 15px 7px #66c0f480;
  }
`;
