import { Container, Title, PayMethod, ConfirmButton } from "./style";
import { useState } from "react";

const Payment = ({ handleClick, componentToShow}) => {
    const [color, setColor] = useState("#1A1E26");

    const handleColor = () => {
        setColor(color === "#1A1E26" ? "#70E000" : "#1A1E26");
    }

    return (
   
            <Container componentToShow={componentToShow}>
                <Title>Payment</Title>

                <PayMethod color={color} onClick={handleColor}>Credit Card</PayMethod>
                <PayMethod color={color} onClick={handleColor}>Paypal</PayMethod>
                <PayMethod color={color} onClick={handleColor}>PIX</PayMethod>
                <ConfirmButton onClick={handleClick}>Confirm</ConfirmButton>
            </Container>
        
    )
}

export default Payment;