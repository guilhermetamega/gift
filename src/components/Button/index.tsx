import * as S from "./styles";

export type ButtonProps = {
  color?: "default" | "correct" | "wrong";
  answer?: string;
};

const Button = ({ color = "default", answer }: ButtonProps) => {
  return <S.ButtonWrapper color={color}>{answer}</S.ButtonWrapper>;
};

export default Button;
