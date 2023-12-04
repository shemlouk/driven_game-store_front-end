import axios from "axios";
import { useCallback, useContext, useState } from "react";
import ProductsContext from "../../hooks/ProductsContext";
import SessionContext from "../../hooks/SessionContext";
import { API_BASE_URL } from "../../services/constants";
import { ConfirmButton, Container, PayMethod, Title } from "./style";

const Payment = ({ handleClick, componentToShow }) => {
  const [color, setColor] = useState("#1A1E26");
  const { config } = useContext(SessionContext);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, setCart } = useContext(ProductsContext);

  const emptyCart = useCallback(async () => {
    if (!config) return alert("Você deve se logar para comprar");
    setIsLoading(true);
    try {
      await axios.patch(`${API_BASE_URL}/cart`, {}, config);
      setCart([]);
    } catch ({ response }) {
      console.error(response);
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <Container componentToShow={componentToShow}>
      <Title>Payment</Title>

      <PayMethod color={color} onClick={() => setColor("#70E000")}>
        Credit Card
      </PayMethod>
      <PayMethod color={color} onClick={() => setColor("#70E000")}>
        Paypal
      </PayMethod>
      <PayMethod color={color} onClick={() => setColor("#70E000")}>
        PIX
      </PayMethod>
      <ConfirmButton
        onClick={() => {
          emptyCart();
          handleClick();
        }}
      >
        Confirm
      </ConfirmButton>
    </Container>
  );
};

export default Payment;
