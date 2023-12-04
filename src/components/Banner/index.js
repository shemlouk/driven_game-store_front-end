import * as S from "./style";

const Banner = ({ _id, image, name, price }) => {
  return (
    <S.Container>
      <S.Image src={image} />
      <S.Title>{name}</S.Title>
      <S.Price>
        {!price ? "Free" : "R$ " + new Intl.NumberFormat("pt-BR").format(price)}
      </S.Price>
    </S.Container>
  );
};

export default Banner;
