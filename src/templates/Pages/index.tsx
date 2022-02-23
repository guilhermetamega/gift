import Title from "../../components/Title";
import PageTitle from "../../components/PageTitle";
import TextBox from "../../components/TextBox";
import P from "../../components/Paragraph";
import AudioPlayer from "../../components/AudioPlayer";

import Image from "next/image";

import * as S from "./styles";
import { useRouter } from "next/router";

type ImageProps = {
  url: string;
  height: number;
  width: number;
};

export type PageTemplateProps = {
  page: {
    heading: string;
    body: string;
    title: string;
    gallery: ImageProps[];
  };
};

function PageTemplate({ page }: PageTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <>
      <PageTitle />
      <Title src="/home.png" href="/">
        ★{page.title}★
      </Title>
      <TextBox>
        <P>{page.heading}</P>
        <div dangerouslySetInnerHTML={{ __html: page.body }} />
      </TextBox>
      <S.Gallery>
        {page.gallery.map((image, index) => (
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
}

export default PageTemplate;
