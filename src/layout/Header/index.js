import RoundButton from "../../components/RoundButton";
import { PROFILES } from "../../services/constants";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as S from "./style";

const Header = () => {
  const [name, setName] = useState("");
  return (
    <S.Container>
      <Link to="/">
        <S.LogoFont bColor="#FFD60A">Game</S.LogoFont>
        <S.LogoFont>Store</S.LogoFont>
      </Link>
      <SearchBar />
      <S.Wrap>
        <S.ButtonsContainer>
          <RoundButton name="game" path="/library" />
          <RoundButton name="cart" path="/checkout" />
        </S.ButtonsContainer>
        {!name ? (
          <S.SignButton>Login</S.SignButton>
        ) : (
          <S.Username>
            Welcome
            <p>{name}</p>
          </S.Username>
        )}
        <S.ProfilePicture
          src={PROFILES[Math.floor(Math.random() * PROFILES.length)]}
        />
      </S.Wrap>
    </S.Container>
  );
};

export default Header;
