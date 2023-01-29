import RoundButton from "../../components/RoundButton";
import { PROFILES } from "../../services/constants";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import * as S from "./style";
import { AuthContext } from "../../provider/provider";
import Login from "../../components/Login";

const Header = () => {
  const [name, setName] = useState("");

  const value = React.useContext(AuthContext);

  const loginRef2 = useRef(null);

  function showLogin() {
    value.setValue(true);
  }

  return (
    <>
      <Login />
      <S.Container onClick={value.clicked}>
        <Link to="/">
          <S.LogoFont bColor="#FFD60A">Game</S.LogoFont>
          <S.LogoFont>Store</S.LogoFont>
        </Link>
        <SearchBar />
        <S.Wrap>
          {!name ? (
            <S.SignButton
              ref={value.loginRef}
              onClick={() => value.setValue2(false)}
            >
              Login
            </S.SignButton>
          ) : (
            <>
              <S.ButtonsContainer>
                <RoundButton name="game" path="/library" />
                <RoundButton name="cart" path="/checkout" />
              </S.ButtonsContainer>
              <S.Username>
                Welcome
                <p>{name}</p>
              </S.Username>
            </>
          )}
          <S.ProfilePicture
            src={PROFILES[Math.floor(Math.random() * PROFILES.length)]}
          />
        </S.Wrap>
      </S.Container>
    </>
  );
};

export default Header;
