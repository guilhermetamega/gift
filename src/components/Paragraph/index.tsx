import * as S from "./styles";

type ParagraphWrapperProps = {
  children?: React.ReactNode;
};

const Paragraph = ({ children }: ParagraphWrapperProps) => {
  return <S.ParagraphWrapper>{children}</S.ParagraphWrapper>;
};

export default Paragraph;
