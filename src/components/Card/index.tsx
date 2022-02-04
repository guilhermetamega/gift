import * as S from "./styles";

export type CardProps = {
  children?: React.ReactNode;
  color?: "red" | "blue" | "green" | "yellow";
};

const Card = ({ children, color }: CardProps) => {
  return <S.CardWrapper color={color}>{children}</S.CardWrapper>;
};

export default Card;
