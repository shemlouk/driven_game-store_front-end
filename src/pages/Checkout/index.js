import { Container } from "./style";
import Cart from "../../components/Cart";
import Payment from "../../components/PaymentMethod";
import Email from "../../components/Email";

const Checkout = () => {
  return (
  <>
    <Container>
      <Cart /> 
      {/* <Payment /> */}
      {/* <Email/> */} 
    </Container>
  </>
)};

export default Checkout;
