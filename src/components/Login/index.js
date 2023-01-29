import { AuthContext } from "../../provider/provider";
import { useState, useContext } from "react";
import * as S from "./style";
import axios from "axios";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const value = useContext(AuthContext);

  function login(e) {
    e.preventDefault();
    const dados = {
      email: email,
      password: password,
    };
    console.log(dados);
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/login`, dados)
      .then((crr) => {
        console.log(crr.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  function signUp(e) {
    e.preventDefault();
    const dados = {
      name: name,
      email: email,
      password: password,
      img: img ? img : "http://test",
    };
    console.log(dados);
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/sign-up`, dados)
      .then((crr) => {
        console.log(crr.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  return (
    <>
      {value.value && (
        <S.Login onSubmit={login}>
          <input
            placeholder="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Senha"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button>Entrar</button>
          <p
            onClick={() => {
              value.setValue(false);
              value.setValue2(true);
              setEmail("");
              setPassword("");
            }}
          >
            Eu não tenho uma conta
          </p>
        </S.Login>
      )}

      {value.value2 && (
        <S.SignUp onSubmit={signUp}>
          <input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            placeholder="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Senha"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            placeholder="Imagem"
            value={img}
            type="url"
            onChange={(e) => setImg(e.target.value)}
          />
          <button>Cadastrar</button>
          <p
            onClick={() => {
              value.setValue(true);
              value.setValue2(false);
              setEmail("");
              setPassword("");
            }}
          >
            Eu já tenho uma conta
          </p>
        </S.SignUp>
      )}
    </>
  );
}
