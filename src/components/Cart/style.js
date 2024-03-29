import styled from "styled-components";

export const Title = styled.h1`
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
export const GameCard = styled.div`
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  justify-content: space-between;
  width: 611px;
  height: 116px;
  background: #11151f;
  border-image-source: linear-gradient(
    180deg,
    rgba(199, 213, 224, 0.1) 0%,
    rgba(199, 213, 224, 0) 100%
  );
  margin-bottom: 17px;
`;
export const GameImage = styled.div`
  width: 212px;
  height: 116px;
  background: linear-gradient(270deg, #11151f 7.58%, rgba(0, 0, 0, 0) 48.3%),
    url(${(props) => props.url});
  background-size: cover;

  :hover {
    transition: all 500ms;
    transform: scale(1.1);
  }
`;

export const ContInfos = styled.div`
  display: flex;
  flex: 1;
  z-index: 1;
  flex-direction: column;
  justify-content: space-around;
`;

export const GameTitle = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: white;
`;
export const ContStars = styled.span`
  display: flex;
  align-items: center;

  span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    color: #ffd60a;
    margin-left: 10px;
  }
`;
export const ContOS = styled.div`
  width: 40px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Price = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #ffffff;
`;
export const ContFinalPrice = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;
export const FinalPrice = styled.div`
  width: 476px;
  height: 58px;
  background: #1a1e26;
  border-radius: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
export const Total = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  color: #ffffff;
`;
export const TotalPrice = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  color: #ffffff;
`;
export const ConfirmButton = styled.button`
  background: linear-gradient(180deg, #66c0f4 0%, #4192c0 100%);
  border-radius: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-left: 23px;
  border: none;
  padding: 0px 20px;
  cursor: pointer;
`;
