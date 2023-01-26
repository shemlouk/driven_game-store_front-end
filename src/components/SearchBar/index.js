import { SearchNormal1 } from "iconsax-react";
import * as S from "./style";

const SearchBar = () => {
  return (
    <S.Container>
      <S.Icon>
        <SearchNormal1 size="22" color="#c7d5e080" />
      </S.Icon>
      <S.Input placeholder="Search..." disabled />
    </S.Container>
  );
};

export default SearchBar;
