import axios from "axios";
import { Apple, Star1, Windows } from "iconsax-react";
import { useCallback, useContext, useEffect, useState } from "react";
import ProductsContext from "../../hooks/ProductsContext";
import SessionContext from "../../hooks/SessionContext";
import { AuthContext } from "../../provider/provider";
import { API_BASE_URL } from "../../services/constants";
import {
  ConfirmButton,
  ContFinalPrice,
  ContInfos,
  ContOS,
  ContStars,
  FinalPrice,
  GameCard,
  GameImage,
  GameTitle,
  Price,
  Title,
  Total,
  TotalPrice,
} from "./style";

const Cart = ({ handleClick, componentToShow }) => {
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
      setCart(productsOnCart.data.products);
      setIsLoading(false);
    } catch ({ error }) {
      setIsLoading(false);
      console.log(error);
    }
  });

  useEffect(() => {
    getData();
  }, [config]);

  const filteredProducts = products.filter((product) => {
    const found = cart.find((item) => item === product._id);
    return found;
  });

  console.log(filteredProducts);
  return (
    <div componentToShow={componentToShow}>
      <Title>Summary</Title>
      {filteredProducts.length &&
        filteredProducts.map((product) => (
          <GameCard>
            <GameImage url={product.image} />
            <ContInfos>
              <GameTitle>{product.name}</GameTitle>
              <ContStars>
                {Array.from({ length: 5 }).map((_, i) =>
                  i < product.score ? (
                    <Star1 key={i} size="15" color="#FFD60A" variant="Bold" />
                  ) : (
                    <Star1 key={i} size="15" color="#c7d5e0" variant="Bold" />
                  )
                )}
                <span>{product.score?.toFixed(1)}</span>
              </ContStars>
              <ContOS>
                {product.plataforms.map((p) => {
                  return p === "mac" ? (
                    <Apple size="17" color="white" variant="Bold" />
                  ) : p === "windows" ? (
                    <Windows size="17" color="white" variant="Bold" />
                  ) : (
                    ""
                  );
                })}
              </ContOS>
            </ContInfos>
            <Price>R$ {product.price}</Price>
          </GameCard>
        ))}
      <ContFinalPrice>
        <FinalPrice>
          <Total>Total: </Total>
          <TotalPrice>
            R${" "}
            {filteredProducts.reduce((pv, cv) => pv + cv.price, 0).toFixed(2)}
          </TotalPrice>
        </FinalPrice>
        <ConfirmButton onClick={handleClick}>Confirm</ConfirmButton>
      </ContFinalPrice>
    </div>
  );
};

export default Cart;
