import { Container, Title, EmailBox, ConfirmationMsg, LibraryButton} from "./style";
import { SmsTracking } from "iconsax-react";
import { Link } from "react-router-dom";

const Email = ({ componentToShow }) => {
    return (
     
           <Container componentToShow={componentToShow}>
                <Title>Thank you!</Title>

                <EmailBox>
                    <SmsTracking size="130" color="#323b4e" />
                    <ConfirmationMsg>Confirmation email sent to <br></br>your inbox!</ConfirmationMsg>
                </EmailBox>

                <LibraryButton>
                    <Link to={"/library"}>
                        Open Library
                    </Link>
                </LibraryButton>
            </Container>
       
    )
}

export default Email;