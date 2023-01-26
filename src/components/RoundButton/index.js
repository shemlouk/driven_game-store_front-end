import { Game, ShoppingCart } from "iconsax-react";
import * as S from "./style";

const icons = { game: Game, cart: ShoppingCart };

const RoundButton = ({ name, active, number }) => {
  const Icon = icons[name];
  return (
    <S.Container color={active ? "#C7D5E0" : "#1B2838"}>
      {name && <Icon size="32" color={active ? "#1B2838" : "#C7D5E0"} />}
      {number > 0 && <S.Notification>{number}</S.Notification>}
    </S.Container>
  );
};

export default RoundButton;
