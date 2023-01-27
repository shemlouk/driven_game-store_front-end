import { Link } from "react-router-dom";
import Atropos from "atropos/react";
import { useState } from "react";
import * as S from "./style";
import "atropos/css";

const Card = ({ image, title, price }) => {
  const [productStatus, setProductStatus] = useState("");

  return (
    <Atropos
      {...{
        style: { width: "fit-content", margin: "20px" },
        highlight: false,
      }}
    >
      <S.Container>
        <S.Image data-atropos-offset="-5" src={image} />
        <S.Title data-atropos-offset="5">{title}</S.Title>
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
          <S.Button data-atropos-offset="5" colors={["#70e000", "#549c0b"]}>
            Add to Cart
          </S.Button>
        )}
        <S.Price data-atropos-offset="5">
          {!price
            ? "Free"
            : "R$" + new Intl.NumberFormat("pt-BR").format(price)}
        </S.Price>
      </S.Container>
    </Atropos>
  );
};

export default Card;
