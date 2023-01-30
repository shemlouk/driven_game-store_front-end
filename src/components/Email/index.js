import { Title, EmailBox, ConfirmationMsg,LibraryButton } from "./style";
import { SmsTracking } from "iconsax-react";

const Email = () => {
    return(
        <>
            <Title>Thank you!</Title>

            <EmailBox>
                <SmsTracking size="130" color="#323b4e"/>
                <ConfirmationMsg>Confirmation email sent to <br></br>your inbox!</ConfirmationMsg>
            </EmailBox>
            
            <LibraryButton>Open Library</LibraryButton>
        </>
    )
}

export default Email;