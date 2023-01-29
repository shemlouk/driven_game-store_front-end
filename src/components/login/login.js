import React, {useState, useContext} from "react";
import { AuthContext } from "../../provider/provider";
import * as S from "./style";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const value = React.useContext(AuthContext);

  function login() {
    const dados = {
      email: email,
      password: password,
    };
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/login`, dados)
      .then((crr) => {
        console.log(crr.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  function signUp() {
    const dados = {
      name: name,
      email: email,
      password: password,
      img: img,
    };
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
        <S.Login>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Senha"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login}>Login</button>
          <p
            onClick={() => {
              value.setValue(false);
              value.setValue2(true);
              setEmail("");
              setPassword("");
            }}
          >
            I don't have an accoount
          </p>
        </S.Login>
      )}
      {value.value2 && (
        <S.SignUp>
          <input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.vaölue)}
          />
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Senha"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="image (opc)"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <button onClick={signUp}>Sign-up</button>
          <p
            onClick={() => {
              value.setValue(true);
              value.setValue2(false);
            }}
          >
            I already have an accoount
          </p>
        </S.SignUp>
      )}
    </>
  );
}
