import * as S from "./styles";

export type ButtonProps = {
  color?: "default" | "correct" | "wrong";
  text?: string;
  onClick?: any;
};

const Button = ({ color = "default", text, onClick }: ButtonProps) => {
  return (
    <S.ButtonWrapper color={color} onClick={onClick}>
      {text}
    </S.ButtonWrapper>
  );
};

export default Button;
