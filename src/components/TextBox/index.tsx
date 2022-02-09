import * as S from "./styles";

type TextBoxWrapperProps = {
  children?: React.ReactNode;
};

const TextBox = ({ children }: TextBoxWrapperProps) => {
  return (
    <S.TextBoxWrapper>
      <S.TextWrapper>{children}</S.TextWrapper>
    </S.TextBoxWrapper>
  );
};

export default TextBox;
