import * as S from "./style";

const Banner = ({ image }) => {
  return (
    <S.Container>
      <S.Image src={image} />
    </S.Container>
  );
};

export default Banner;
