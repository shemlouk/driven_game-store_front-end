import RoundButton from "../../components/RoundButton";
import { PROFILES } from "../../services/constants";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import * as S from "./style";
import { AuthContext } from "../../provider/provider";
import Login from "../../components/login/login";

const Header = () => {
  const [name, setName] = useState("");

  const value = React.useContext(AuthContext)

  const loginRef = useRef(null)

  function showLogin() {
    value.setValue(true);
  }

  function clicked(e){
    console.log(e.currentTarget)
    console.log(e.target)
    if(e.target === loginRef.current){
      console.log("correto")
      return value.setValue(true)
    }
    console.log("errado")
    return value.setValue(false)
  }

  return (
    <S.Container onClick={clicked}>
      <Login />
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
          <S.SignButton ref={loginRef}>Login</S.SignButton>
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
