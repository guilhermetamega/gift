import * as S from "./styles";

type TitleProps = {
  title: string;
};

const PageTitle = ({ title }: TitleProps) => {
  return <S.PageTitleWrapper>{title}</S.PageTitleWrapper>;
};

export default PageTitle;
