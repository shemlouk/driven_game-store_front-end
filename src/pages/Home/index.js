import "react-responsive-carousel/lib/styles/carousel.min.css";
import LoaderSpinner from "../../components/LoaderSpinner";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../provider/provider";
import { Carousel } from "react-responsive-carousel";
import { useState, useContext } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Main from "../../layout/Main";
import * as S from "./style";
import axios from "axios";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const value = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/products`)
      .then(({ data }) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  }, []);

  return (
    <Main onClick={value.clicked}>
      {isLoading ? (
        <LoaderSpinner />
      ) : (
        <>
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
            {products.slice(0, 3).map((p, i) => (
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
        </>
      )}
    </Main>
  );
};

export default Home;
