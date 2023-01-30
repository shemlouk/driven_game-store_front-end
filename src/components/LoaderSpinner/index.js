import { RotatingSquare } from "react-loader-spinner";
import * as S from "./style";

const LoaderSpinner = () => {
  return (
    <S.Container>
      <RotatingSquare
        height="150"
        width="150"
        color="#FFD60A"
        ariaLabel="rotating-square-loading"
        strokeWidth="5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p>Loading</p>
    </S.Container>
  );
};

export default LoaderSpinner;
