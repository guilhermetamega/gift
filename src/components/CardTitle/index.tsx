import * as S from "./styles";

export type CardTitleProps = {
  children?: React.ReactNode;
};

const CardTitle = ({ children }: CardTitleProps) => {
  return <S.CardTitleWrapper>{children}</S.CardTitleWrapper>;
};

export default CardTitle;
