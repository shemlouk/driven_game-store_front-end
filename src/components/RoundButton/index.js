import { useLocation, Link } from "react-router-dom";
import { Game, ShoppingCart } from "iconsax-react";
import { useEffect, useState } from "react";
import * as S from "./style";

const ICONS = { game: Game, cart: ShoppingCart };

const RoundButton = ({ name, number, path }) => {
  const Icon = ICONS[name];
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(pathname === path);
  useEffect(() => {
    setIsActive(pathname === path);
  }, [pathname]);
  return (
    <Link to={path}>
      <S.Container color={isActive ? "#C7D5E0" : "#1B2838"}>
        {name && <Icon size="32" color={isActive ? "#1B2838" : "#C7D5E0"} />}
        {number > 0 && <S.Notification>{number}</S.Notification>}
      </S.Container>
    </Link>
  );
};

export default RoundButton;
