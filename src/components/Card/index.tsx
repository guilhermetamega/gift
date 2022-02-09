import * as S from "./styles";

export type CardProps = {
  children?: React.ReactNode;
  color?: "red" | "blue" | "green" | "yellow";
  href?: string;
};

const Card = ({ children, color, href }: CardProps) => {
  return (
    <S.CardWrapper color={color} href={href}>
      {children}
    </S.CardWrapper>
  );
};

export default Card;
