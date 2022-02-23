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
  heading: string;
  body: string;
  title: string;
  gallery: ImageProps[];
};

const PageTemplate = ({ heading, body, title, gallery }: PageTemplateProps) => (
  <>
    <NextSeo
      title={`${title} - 1 ano`}
      description={"Site about my history with my girlfriend."}
      canonical="https://oneyearwithyou.vercel.app/"
      openGraph={{
        url: "https://oneyearwithyou.vercel.app/",
        title: `${title} - 1 ano`,
        description: "Site about my history with my girlfriend.",
        images: [
          {
            url: gallery[0].url,
            width: gallery[0].width,
            height: gallery[0].height,
            alt: `${title}`,
          },
        ],
      }}
    />
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
  </>
);

export default PageTemplate;
