import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 330px;
  overflow: hidden;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: white;
  position: relative;
  border-top: 1px solid #c7d5e070;
  ::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 30px;
    background: linear-gradient(to top, #11151f 40%, transparent 80%);
  }
`;

export const Image = styled.img`
  top: -20px;
  height: 230px;
  position: absolute;
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: 700;
  position: absolute;
  left: 16px;
  bottom: 120px;
  color: white;
  z-index: 1;
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(
    to bottom,
    ${({ colors }) => colors && `${colors[0]}, ${colors[1]}`}
  );
  font-size: 15px;
  font-weight: 700;
  position: absolute;
  left: 16px;
  bottom: 30px;
  z-index: 1;
  color: white;
  cursor: pointer;
`;
