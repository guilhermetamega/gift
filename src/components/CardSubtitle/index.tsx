import * as S from "./styles";

export type CardSubtitleProps = {
  children?: React.ReactNode;
};

const CardSubtitle = ({ children }: CardSubtitleProps) => {
  return <S.CardSubtitleWrapper>{children}</S.CardSubtitleWrapper>;
};

export default CardSubtitle;
