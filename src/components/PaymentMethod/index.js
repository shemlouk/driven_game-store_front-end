import { Title, PayMethod, ConfirmButton } from "./style";

const Payment = () => {
    return (
        <>
            <Title>Payment</Title>

            <PayMethod>Credit Card</PayMethod>
            <PayMethod>Paypal</PayMethod>
            <PayMethod>PIX</PayMethod>
            <ConfirmButton>Confirm</ConfirmButton>
        </>
    )
}

export default Payment;