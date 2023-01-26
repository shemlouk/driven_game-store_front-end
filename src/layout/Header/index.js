import RoundButton from "../../components/RoundButton";
import * as S from "./style";

const Header = () => {
  return (
    <S.Container>
      <div>
        <S.LogoFont bColor="#FFD60A">Game</S.LogoFont>
        <S.LogoFont>Store</S.LogoFont>
      </div>
      <S.ButtonsContainer>
        <RoundButton name="game" path="/library" />
        <RoundButton name="cart" path="/checkout" />
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default Header;
