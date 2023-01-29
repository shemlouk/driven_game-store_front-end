import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Banner from "../../components/Banner";
import Main from "../../layout/Main";
import React, { useState } from "react";
import { AuthContext } from "../../provider/provider";
import { Login, SignUp } from "./style";
import axios from "axios";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const value = React.useContext(AuthContext);
  const [products, setProducts] = useState([
    {
      title: "Minecraft Legends",
      image:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/m/minecraft-legends-switch/hero",
    },
    {
      title: "CS:GO",
      image:
        "https://files.tecnoblog.net/wp-content/uploads/2019/07/cs-go-001-1.jpg",
    },
    {
      title: "Mile Morales",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/bzmUpd4O5o7GtuqKE1kCDFse.jpg",
    },
    {
      title: "Valorant",
      image:
        "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/VAL_2560x1440-a875b64f871200771ee9397df1d7050b",
    },
  ]);

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
    <Main>
      {value.value && (
        <Login>
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
        </Login>
      )}
      {value.value2 && (
        <SignUp>
          <input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        </SignUp>
      )}
      <Carousel
        {...{
          infiniteLoop: true,
          showArrows: false,
          showThumbs: false,
          showStatus: false,
          autoPlay: true,
          interval: 5000,
        }}
        onClick={() => value.setValue(false)}
      >
        {products.map((p, i) => (
          <Banner key={i} {...p} />
        ))}
      </Carousel>
    </Main>
  );
};

export default Home;
