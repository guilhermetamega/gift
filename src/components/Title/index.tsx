import * as S from "./styles";

export type SectionWrapperProps = {
  children?: React.ReactNode;
  home?: boolean;
  src?: string;
  href?: string;
};

const Title: React.FC<SectionWrapperProps> = ({
  children,
  home = false,
  src,
  href,
}: SectionWrapperProps) => {
  return (
    <>
      {!!home && (
        <S.SectionWrapper home={home}>
          <S.TitleWrapper>{children}</S.TitleWrapper>
        </S.SectionWrapper>
      )}
      {!home && (
        <S.SectionWrapper home={home}>
          <S.HomeLinkWrapper href={href}>
            <S.ImageWrapper src={src} />
          </S.HomeLinkWrapper>
          <S.TitleWrapper>{children}</S.TitleWrapper>
        </S.SectionWrapper>
      )}
    </>
  );
};

export default Title;
