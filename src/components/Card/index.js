import { useCallback, useContext, useEffect, useState } from "react";
import ProductsContext from "../../hooks/ProductsContext";
import { API_BASE_URL } from "../../services/constants";
import SessionContext from "../../hooks/SessionContext";
import { Star1, TickCircle } from "iconsax-react";
import ButtonSpinner from "../ButtonSpinner";
import { Link } from "react-router-dom";
import Atropos from "atropos/react";
import * as S from "./style";
import axios from "axios";
import "atropos/css";

const Card = ({ _id, image, name, price, score }) => {
  const [productStatus, setProductStatus] = useState("");
  const { cart, setCart } = useContext(ProductsContext);
  const [isLoading, setIsLoading] = useState(false);
  const { config } = useContext(SessionContext);

  const addToCart = useCallback(async () => {
    if (!config) return alert("Você deve se logar para comprar");
    setIsLoading(true);
    try {
      await axios.put(`${API_BASE_URL}/cart`, { id: _id }, config);
      cart.push(_id);
      setCart([...cart]);
      setIsLoading(false);
    } catch ({ error }) {
      setIsLoading(false);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (cart.includes(_id)) setProductStatus("onCart");
  }, [cart]);

  return (
    <Atropos
      {...{
        style: { width: "fit-content", margin: "20px" },
        highlight: false,
      }}
    >
      <S.Container>
        <S.Image data-atropos-offset="-5" src={image} />
        <S.Title data-atropos-offset="5">{name}</S.Title>
        {productStatus === "onLibrary" && (
          <Link to="/library">
            <S.Button data-atropos-offset="5" colors={["#66C0F4", "#4192C0"]}>
              Open Library
            </S.Button>
          </Link>
        )}
        {productStatus === "onCart" && (
          <Link to="/checkout">
            <S.Button data-atropos-offset="5" colors={["#FFD60A", "#CDAB03"]}>
              Open Cart
            </S.Button>
          </Link>
        )}
        {!productStatus && (
          <S.Button
            onClick={addToCart}
            data-atropos-offset="5"
            colors={["#70e000", "#549c0b"]}
          >
            {isLoading ? <ButtonSpinner /> : "Add to Cart"}
          </S.Button>
        )}
        {productStatus !== "onLibrary" && (
          <S.Price data-atropos-offset="5">
            {!price
              ? "Free"
              : "R$ " + new Intl.NumberFormat("pt-BR").format(price)}
          </S.Price>
        )}
        <S.Score data-atropos-offset="5">
          {Array.from({ length: 5 }).map((_, i) =>
            i < score ? (
              <Star1 key={i} size="15" color="#FFD60A" variant="Bold" />
            ) : (
              <Star1 key={i} size="15" color="#c7d5e0" variant="Bold" />
            )
          )}
          <span>{score?.toFixed(1)}</span>
        </S.Score>
        {productStatus === "onLibrary" && (
          <TickCircle
            data-atropos-offset="5"
            style={{
              position: "absolute",
              right: "16px",
              bottom: "120px",
              zIndex: "3",
            }}
            size="20"
            color="#70e000"
            variant="Bold"
          />
        )}
      </S.Container>
    </Atropos>
  );
};

export default Card;
