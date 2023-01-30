import { Container } from "./style";
import Cart from "../../components/Cart";
import Payment from "../../components/PaymentMethod";
import Email from "../../components/Email";
import { useState } from "react";
import StepBar from "../../components/StepProgressBar";

const Checkout = () => {
  const [percentage, setPercentage] = useState(0);
  const [componentToShow, setComponentToShow] = useState(1);

  const handleClick = () => {
    setPercentage(percentage + 50);
    setComponentToShow((componentToShow % 3) + 1)
  }

  return (
    <>
      <Container>
        <StepBar percentage={percentage}/>
    
        {componentToShow === 1 && <Cart handleClick={handleClick} componentToShow={componentToShow} />}
        {componentToShow === 2 && <Payment handleClick={handleClick} componentToShow={componentToShow} />}
        {componentToShow === 3 && <Email componentToShow={componentToShow}/>}
      </Container>    
    </>
  )
};

export default Checkout;
