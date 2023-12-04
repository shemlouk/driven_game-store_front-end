import { useContext, useState } from "react";
import Cart from "../../components/Cart";
import Email from "../../components/Email";
import Payment from "../../components/PaymentMethod";
import StepBar from "../../components/StepProgressBar";
import ProductsContext from "../../hooks/ProductsContext";
import { Container } from "./style";

const Checkout = () => {
  const [percentage, setPercentage] = useState(0);
  const [componentToShow, setComponentToShow] = useState(1);
  const { cart } = useContext(ProductsContext);

  const handleClick = () => {
    setPercentage(percentage + 50);
    setComponentToShow((componentToShow % 3) + 1);
  };

  return (
    <>
      <Container>
        {!!cart?.length ? (
          <>
            <StepBar percentage={percentage} />

            {componentToShow === 1 && (
              <Cart
                handleClick={handleClick}
                componentToShow={componentToShow}
              />
            )}
            {componentToShow === 2 && (
              <Payment
                handleClick={handleClick}
                componentToShow={componentToShow}
              />
            )}
            {componentToShow === 3 && (
              <Email componentToShow={componentToShow} />
            )}
          </>
        ) : (
          "Carrinho sem produtos."
        )}
      </Container>
    </>
  );
};

export default Checkout;
