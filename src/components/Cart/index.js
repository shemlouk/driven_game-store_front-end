import { ContInfos, ContStars, GameCard, GameImage, GameTitle, Title, ContOS, Price, FinalPrice, TotalPrice, Total, ContFinalPrice, ConfirmButton } from "./style";
import { Star1 } from "iconsax-react";
import { Windows, Apple } from "iconsax-react"


const Cart = ({ handleClick, componentToShow }) => {
  return (
 
    <div componentToShow={componentToShow}>
      <Title>Summary</Title>
      <GameCard>
        <GameImage />
        <ContInfos>
          <GameTitle>Miles Morales</GameTitle>
          <ContStars>
            <Star1 size="12" color="#FFD60A" variant="Bold" />
            <Star1 size="12" color="#FFD60A" variant="Bold" />
            <Star1 size="12" color="#FFD60A" variant="Bold" />
            <Star1 size="12" color="#FFD60A" variant="Bold" />
            <Star1 size="12" color="#FFD60A" variant="Bold" />
            <span>5.0</span>
          </ContStars>
          <ContOS>
            <Windows size="17" color="white" variant="Bold" />
            <Apple size="17" color="white" variant="Bold" />
          </ContOS>
        </ContInfos>
        <Price>R$ 234,67</Price>
      </GameCard>

      <ContFinalPrice>
        <FinalPrice>
          <Total>Total: </Total>
          <TotalPrice>R$314,65</TotalPrice>
        </FinalPrice>
        <ConfirmButton onClick={handleClick}>Confirm</ConfirmButton>
      </ContFinalPrice>
      </div>

  )
}

export default Cart;