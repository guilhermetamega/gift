import * as S from "./styles";

type CardGroupWrapperProps = {
  children?: React.ReactNode;
};

const CardGroup = ({ children }: CardGroupWrapperProps) => {
  return <S.CardGroupWrapper>{children}</S.CardGroupWrapper>;
};

export default CardGroup;
