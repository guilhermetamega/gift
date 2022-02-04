import * as S from "./styles";

type TitleWrapperProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleWrapperProps) => {
  return (
    <S.SectionWrapper>
      <S.TitleWrapper>{children}</S.TitleWrapper>
    </S.SectionWrapper>
  );
};

export default Title;
