import Title from "../../components/Title";
import PageTitle from "../../components/PageTitle";
import TextBox from "../../components/TextBox";
import P from "../../components/Paragraph";
import AudioPlayer from "../../components/AudioPlayer";

import Image from "next/image";

import * as S from "./styles";

type ImageProps = {
  url: string;
  height: number;
  width: number;
};

export type PageTemplateProps = {
  heading: string;
  body: string;
  title: string;
  gallery: ImageProps[];
};

const PageTemplate = ({ heading, body, title, gallery }: PageTemplateProps) => (
  <>
    <PageTitle />
    <Title src="/home.png" href="/">
      ★{title}★
    </Title>
    <TextBox>
      <P>{heading}</P>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </TextBox>
    <S.Gallery>
      {gallery.map((image, index) => (
        <Image
          key={`photo-${index}`}
          src={image.url}
          alt={`photo-${index}`}
          width={image.width}
          height={image.height}
          quality={100}
          layout="responsive"
          priority
        />
      ))}
    </S.Gallery>
    <AudioPlayer src="/audios/audioOgg.ogg" />
  </>
);

export default PageTemplate;
