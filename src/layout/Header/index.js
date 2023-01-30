import SessionContext from "../../hooks/SessionContext";
import RoundButton from "../../components/RoundButton";
import { AuthContext } from "../../provider/provider";
import { PROFILES } from "../../services/constants";
import SearchBar from "../../components/SearchBar";
import Login from "../../components/Login";
import { Link } from "react-router-dom";
import { useContext } from "react";
import * as S from "./style";
import axios from "axios";

const Header = ({ setSession }) => {
  const { config, name, image, email } = useContext(SessionContext);
  const value = useContext(AuthContext);

  function updatePhoto() {
    const newImage = prompt("Coloque a URL da imagem");
    if (!newImage) return;
    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/update-img`,
        { img: newImage },
        config
      )
      .then(() => {
        setSession({ image: newImage, email, name, config });
      })
      .catch(({ response }) => {
        console.log(response);
      });

  }

  return (
    <>
      <Login {...{ setSession }} />
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
                Bem-vindo
                <p>{name}</p>
              </S.Username>
            </>
          )}
          <S.ProfilePicture
            onClick={updatePhoto}
            src={
              image
                ? image
                : PROFILES[Math.floor(Math.random() * PROFILES.length)]
            }
          />
        </S.Wrap>
      </S.Container>
    </>
  );
};

export default Header;
