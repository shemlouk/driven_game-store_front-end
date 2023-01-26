import RoundButton from "../../components/RoundButton";
import { PROFILES } from "../../services/constants";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import * as S from "./style";

const Header = () => {
  return (
    <S.Container>
      <Link to="/">
        <S.LogoFont bColor="#FFD60A">Game</S.LogoFont>
        <S.LogoFont>Store</S.LogoFont>
      </Link>
      <SearchBar />
      <S.ButtonsContainer>
        <RoundButton name="game" path="/library" />
        <RoundButton name="cart" path="/checkout" />
      </S.ButtonsContainer>
      <S.ProfilePicture
        src={PROFILES[Math.floor(Math.random() * PROFILES.length)]}
      />
    </S.Container>
  );
};

export default Header;
