import { Container, Title, PayMethod, ConfirmButton } from "./style";
import { useState } from "react";

const Payment = ({ handleClick, componentToShow}) => {
    const [color, setColor] = useState("#1A1E26");
    // const [click, setClick] = useState()

    return (
   
            <Container componentToShow={componentToShow}>
                <Title>Payment</Title>

                <PayMethod color={color} onClick={() => setColor("#70E000")}>Credit Card</PayMethod>
                <PayMethod color={color} onClick={() => setColor("#70E000")}>Paypal</PayMethod>
                <PayMethod color={color} onClick={() => setColor("#70E000")}>PIX</PayMethod>
                <ConfirmButton onClick={handleClick}>Confirm</ConfirmButton>
            </Container>
        
    )
}

export default Payment;