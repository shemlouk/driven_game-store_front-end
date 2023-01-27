import Atropos from "atropos/react";
import * as S from "./style";
import "atropos/css";

const Card = ({ image, title }) => {
  return (
    <Atropos
      {...{
        style: { width: "fit-content", margin: "20px" },
        highlight: false,
      }}
    >
      <S.Container>
        <S.Image data-atropos-offset="-7" src={image} />
        <S.Title data-atropos-offset="4">{title}</S.Title>
      </S.Container>
    </Atropos>
  );
};

export default Card;
