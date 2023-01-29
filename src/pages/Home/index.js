import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Main from "../../layout/Main";
import { useState, useContext } from "react";
import * as S from "./style";
import Login from "../../components/login/login";
import { AuthContext } from "../../provider/provider";

const Home = () => {

  const value = useContext(AuthContext)
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



  function clicked(e){
    console.log(e.currentTarget)
  }

  return (
    <Main onClick={value.clicked}>
      <Carousel
        {...{
          infiniteLoop: true,
          showArrows: false,
          showThumbs: false,
          showStatus: false,
          autoPlay: true,
          interval: 5000,
        }}
      >
        {products.map((p, i) => (
          <Banner key={i} {...p} />
        ))}
      </Carousel>
      <S.SessionContainer>
        <p>Destaques</p>
        <S.CardList>
          {products.map((p, i) => (
            <Card key={i} {...p} />
          ))}
        </S.CardList>
      </S.SessionContainer>
    </Main>
  );
};

export default Home;
