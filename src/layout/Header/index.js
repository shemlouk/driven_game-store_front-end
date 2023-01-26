import RoundButton from "../../components/RoundButton";
import { PROFILES } from "../../services/constants";
import SearchBar from "../../components/SearchBar";
import * as S from "./style";

const Header = () => {
  return (
    <S.Container>
      <div>
        <S.LogoFont bColor="#FFD60A">Game</S.LogoFont>
        <S.LogoFont>Store</S.LogoFont>
      </div>
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
