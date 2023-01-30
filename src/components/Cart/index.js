import { ContInfos, ContStars, GameCard, GameImage, GameTitle, Title, ContOS, Price, FinalPrice, TotalPrice, Total, ContFinalPrice, ConfirmButton } from "./style";
import { Windows, Apple, Star1 } from "iconsax-react"
import ProductsContext from "../../hooks/ProductsContext";
import { useContext, useState, useEffect, useCallback } from "react";
import SessionContext from "../../hooks/SessionContext";
import { API_BASE_URL } from "../../services/constants";
import axios from "axios";
import { AuthContext } from "../../provider/provider";

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

  const filteredProducts = products.filter((product) => {
    const found = cart.find((item) => item === product._id);
    return found;
  });

  return (
   
    <div componentToShow={componentToShow}>
      <Title>Summary</Title>
      {filteredProducts.length &&
      filteredProducts.map((product) => (
    <GameCard>
      <GameImage url={product.image}/>
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
          return (
            p === "mac" ? <Apple size="17" color="white" variant="Bold" /> 
            :
            <Windows size="17" color="white" variant="Bold" />
          )
        })}
        </ContOS>
      </ContInfos>
      <Price>R${product.price}</Price>
    </GameCard>
    ))}
      <ContFinalPrice>
        <FinalPrice>
          <Total>Total: </Total>
          <TotalPrice>R$314,65</TotalPrice>
        </FinalPrice>
        <ConfirmButton onClick={handleClick}>Confirm</ConfirmButton>
      </ContFinalPrice>
      </div>

  )
}

export default Cart;