import { ThreeDots } from "react-loader-spinner";
import * as S from "./style";

const ButtonSpinner = () => {
  return (
    <S.Container>
      <ThreeDots
        height="50"
        width="50"
        radius="5"
        color="#ffffff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </S.Container>
  );
};

export default ButtonSpinner;
