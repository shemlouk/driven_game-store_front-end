import * as S from "./style";

const Banner = ({ image, title, number }) => {
  return (
    <S.Container>
      <S.Image src={image} />
      <S.Title>{title}</S.Title>
      <S.Price>
        {!number
          ? "Free"
          : "R$" + new Intl.NumberFormat("pt-BR").format(number)}
      </S.Price>
      <S.Button>Buy</S.Button>
    </S.Container>
  );
};

export default Banner;
