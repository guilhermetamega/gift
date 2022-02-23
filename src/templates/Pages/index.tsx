import Title from "../../components/Title";
import PageTitle from "../../components/PageTitle";
import TextBox from "../../components/TextBox";
import P from "../../components/Paragraph";

import Image from "next/image";

import * as S from "./styles";
import { NextSeo } from "next-seo";

type ImageProps = {
  url: string;
  height: number;
  width: number;
};

export type PageTemplateProps = {
  page: {
    heading: string;
    body: {
      html: string;
      text: string;
    };
    title: string;
    gallery: ImageProps[];
  };
};

const PageTemplate = ({ page }: PageTemplateProps) => {
  const body = page.body.html;
  return (
    <>
      <PageTitle />
      <Title src="/home.png" href="/">
        ★{page.title}★
      </Title>
      <TextBox>
        <P>{page.heading}</P>
        <div dangerouslySetInnerHTML={{ __html: body }} />
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
    </>
  );
};

export default PageTemplate;
