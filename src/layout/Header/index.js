import RoundButton from "../../components/RoundButton";
import { Link } from "react-router-dom";
import * as S from "./style";

const Header = () => {
  return (
    <S.Container>
      <div>
        <S.LogoFont bColor="#FFD60A">Game</S.LogoFont>
        <S.LogoFont>Store</S.LogoFont>
      </div>
      <S.ButtonsContainer>
        <Link to="/library">
          <RoundButton name="game" />
        </Link>
        <Link to="/checkout">
          <RoundButton name="cart" />
        </Link>
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default Header;
