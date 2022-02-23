import client from "../graphql/client";
import { GetPagesQuery } from "../graphql/generated/graphql";
import { GET_PAGES } from "../graphql/queries";
import HomeTemplate from "../templates/Home";

export default function Home() {
  return <HomeTemplate />;
}

export const getStaticProps = async () => {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES);
  return {
    revalidate: 5,
    props: {
      pages,
    },
  };
};
