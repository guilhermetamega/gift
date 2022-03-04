import * as S from "./styles";

export type MainProps = {
  children?: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return <S.MainWrapper>{children}</S.MainWrapper>;
};

export default Main;
