import { useState, useContext, useEffect, useCallback } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LoaderSpinner from "../../components/LoaderSpinner";
import ProductsContext from "../../hooks/ProductsContext";
import SessionContext from "../../hooks/SessionContext";
import { API_BASE_URL } from "../../services/constants";
import { AuthContext } from "../../provider/provider";
import { Carousel } from "react-responsive-carousel";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Main from "../../layout/Main";
import * as S from "./style";
import axios from "axios";

const Home = () => {
  const { cart, setCart } = useContext(ProductsContext);
  const [isLoading, setIsLoading] = useState(false);
  const { config } = useContext(SessionContext);
  const [products, setProducts] = useState([]);
  const value = useContext(AuthContext);

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${API_BASE_URL}/products`);
      setProducts(data);
      if (!config) return setIsLoading(false);
      const productsOnCart = await axios.get(`${API_BASE_URL}/cart`, config);
      setCart(productsOnCart.data);
      setIsLoading(false);
    } catch ({ error }) {
      setIsLoading(false);
      console.log(error);
    }
  });

  useEffect(() => {
    getData();
  }, [config]);

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
            {products.slice(0, 3).map((p) => (
              <Banner key={p._id} {...p} />
            ))}
          </Carousel>
          <S.SessionContainer>
            <p>Destaques</p>
            <S.CardList>
              {products.map((p) => (
                <Card key={p._id} {...p} />
              ))}
            </S.CardList>
          </S.SessionContainer>
        </>
      )}
    </Main>
  );
};

export default Home;
