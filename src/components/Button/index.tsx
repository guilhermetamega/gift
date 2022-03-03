import * as S from "./styles";

export type ButtonProps = {
  color?: "default" | "correct" | "wrong";
  answer?: string;
  onClick?: any;
};

const Button = ({ color = "default", answer, onClick }: ButtonProps) => {
  return (
    <S.ButtonWrapper color={color} onClick={onClick}>
      {answer}
    </S.ButtonWrapper>
  );
};

export default Button;
